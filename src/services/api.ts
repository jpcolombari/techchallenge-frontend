import axios from "axios";
import { PostFormData } from "@/components/PostForm";

// Suas tipagens (Post, LoginResponse, etc.)
export type Post = {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
};
export type LoginResponse = { access_token: string };
export type CreateUserPayload = {
  name: string;
  email: string;
  password: string;
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// O Interceptor Mágico
api.interceptors.request.use(
  (config) => {
    // Só tente acessar o localStorage se o 'window' (objeto do navegador) existir
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Funções Públicas
export const getPosts = async (): Promise<Post[]> =>
  api.get("/posts").then((res) => res.data);

export const getPostById = async (id: string): Promise<Post> =>
  api.get(`/posts/${id}`).then((res) => res.data);

export const searchPosts = async (term: string): Promise<Post[]> =>
  api.get(`/posts/search?term=${term}`).then((res) => res.data);

export const loginUser = async (credentials: any): Promise<LoginResponse> =>
  api.post("/auth/login", credentials).then((res) => res.data);

export const registerUser = async (data: CreateUserPayload) =>
  api.post("/users", data).then((res) => res.data);

// Funções Protegidas
export const createPost = async (data: PostFormData): Promise<Post> =>
  api.post("/posts", data).then((res) => res.data);

export const updatePost = async (
  id: string,
  data: Partial<PostFormData>
): Promise<Post> => api.put(`/posts/${id}`, data).then((res) => res.data);

export const deletePost = async (id: string) =>
  api.delete(`/posts/${id}`).then((res) => res.data);

export default api;
