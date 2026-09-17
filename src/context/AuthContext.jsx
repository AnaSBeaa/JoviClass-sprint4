import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const DEMO_USER = {
    email: "aluno@joviclass.com",
    password: "joviclass123",
    nome: "Aluno JoviClass",
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("joviclass_user")) || null;
        } catch {
            return null;
        }
    });

    useEffect(() => {
        if (user) localStorage.setItem("joviclass_user", JSON.stringify(user));
        else localStorage.removeItem("joviclass_user");
    }, [user]);

    const login = (email, password) => {
        if (email === DEMO_USER.email && password === DEMO_USER.password) {
            setUser({ email: DEMO_USER.email, nome: DEMO_USER.nome });
            return { success: true };
        }

        return { success: false, message: "E-mail ou senha inválidos." };
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: Boolean(user) }}>
            {children}
        </AuthContext.Provider>
    );
}
