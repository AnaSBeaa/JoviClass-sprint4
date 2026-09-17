import { useAuth } from "../hooks/useAuth";
import { useRouter } from "../hooks/useRouter";

export default function PrivateRoute({ children }) {
    const { isAuthenticated } = useAuth();
    const { navigate } = useRouter();

    if (!isAuthenticated) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
                <h1 className="font-['Outfit'] text-4xl font-extrabold text-white">Área restrita</h1>
                <p className="mt-4 font-['Outfit'] text-[#DDC4FB]">Faça login para acessar esta página.</p>
                <button onClick={() => navigate("/login")} className="mt-6 px-7 py-3 rounded-full border-0 bg-[#9A48FF] text-white font-['Outfit'] font-bold cursor-pointer">
                    Ir para o login
                </button>
            </div>
        );
    }

    return children;
}
