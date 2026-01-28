import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('cortex-user');
    return stored ? JSON.parse(stored) : null;
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    if (email && password.length >= 6) {
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${email}`,
      };
      setUser(mockUser);
      localStorage.setItem('cortex-user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    // Mock registration
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    if (email && password.length >= 6 && name) {
      const mockUser: User = {
        id: '1',
        email,
        name,
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${name}`,
      };
      setUser(mockUser);
      localStorage.setItem('cortex-user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cortex-user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
