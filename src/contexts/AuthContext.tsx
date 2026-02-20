'use client';
import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { getUserProfile } from '../services/api';

export type UserProfile = {
  _id: string;
  name: string;
  email: string;
  role: string;
  score: number;
};

type AuthContextData = {
  isAuthenticated: boolean;
  user: UserProfile | null;
  login: (token: string) => void;
  logout: () => void;
  isLoading: boolean;
  updateScore: (points: number) => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProfile = useCallback(async () => {
    try {
      const profile = await getUserProfile();
      setUser(profile);
    } catch (error) {
      console.error('Failed to fetch user profile', error);
      logout();
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
      fetchProfile();
    } else {
      setIsLoading(false);
    }
  }, [fetchProfile]);

  const login = (newToken: string) => {
    localStorage.setItem('authToken', newToken);
    setToken(newToken);
    fetchProfile();
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    setUser(null);
  };

  const updateScore = (points: number) => {
    if (user) {
      setUser({ ...user, score: user.score + points });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!token,
        user,
        login,
        logout,
        isLoading,
        updateScore,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);