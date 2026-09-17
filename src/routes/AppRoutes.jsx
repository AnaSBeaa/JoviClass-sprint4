import { useRouter } from "../hooks/useRouter";
import Pagina from "../components/Pagina";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
    const { path } = useRouter();

    if (path === "/login") return <Login />;
    if (path === "/dashboard") {
        return (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        );
    }

    // A página institucional é a rota pública principal.
    return <Pagina />;
}
