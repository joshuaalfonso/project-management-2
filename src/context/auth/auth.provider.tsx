import { useState } from "react";
import type { User } from "@/model/login.model";
import { AuthContext } from "@/context/auth/authContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [token, setToken] = useState<string | null>(() => {
        return localStorage.getItem("token");
    });

    const [user, setUser] = useState<User | null>(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const login = (token: string, user: User) => {
        setToken(token);
        setUser(user);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    const value = {
        user,
        token,
        isAuthenticated: !!token,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
