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
  quiz?: {
    question: string;
    answer: boolean;
    explanation: string;
  };
};

export type PaginatedPostResponse = {
  data: Post[];
  total: number;
  page: number;
  lastPage: number;
};

export type LoginResponse = { access_token: string };

export enum UserRole {
  PROFESSOR = 'PROFESSOR',
  STUDENT = 'STUDENT',
}

export type CreateUserPayload = {
  name: string;
  email: string;
  password: string;
  role: UserRole;
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(
  (config) => {
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

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUser");

        // Evitar loop de redirect se já estivermos na home ou login
        // alert("Sua sessão expirou. Por favor, faça login novamente.");
        // window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);

// Funções Públicas
export const getPosts = async (page = 1, limit = 10): Promise<PaginatedPostResponse> =>
  api.get(`/posts?page=${page}&limit=${limit}`).then((res) => res.data);

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

// Função para Gerar Pergunta (IA)
export const generateQuiz = async (content: string): Promise<{ question: string; answer: boolean; explanation: string }> =>
  api.post("/posts/generate-quiz", { content }).then((res) => res.data);

export default api;
