import { createContext, useEffect, useState } from "react";

export const RouterContext = createContext(null);

export function RouterProvider({ children }) {
    const [path, setPath] = useState(() => window.location.pathname || "/");

    useEffect(() => {
        const handlePopState = () => setPath(window.location.pathname || "/");
        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    const navigate = (to) => {
        window.history.pushState({}, "", to);
        setPath(window.location.pathname || "/");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <RouterContext.Provider value={{ path, navigate }}>
            {children}
        </RouterContext.Provider>
    );
}
