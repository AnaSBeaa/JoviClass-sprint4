import { useAuth } from "../hooks/useAuth";
import { useRouter } from "../hooks/useRouter";

export default function Dashboard() {
    const { user, logout } = useAuth();
    const { navigate } = useRouter();

    const sair = () => {
        logout();
        navigate("/");
    };

    return (
        <section className="min-h-[75vh] flex items-center justify-center px-6 py-20">
            <div className="w-full max-w-[900px] p-10 rounded-3xl border-2 border-[#81D8E5] bg-gradient-to-br from-[#39027c] to-[#1c0b3e]">
                <p className="font-['Outfit'] text-sm font-bold uppercase tracking-wider text-[#81D8E5]">Rota privada</p>
                <h1 className="mt-3 font-['Outfit'] text-5xl font-extrabold text-white">Olá, {user?.nome}!</h1>
                <p className="mt-4 font-['Outfit'] text-lg text-[#DDC4FB]">Você está acessando o Dashboard do JoviClass porque está autenticado.</p>
                <button onClick={sair} className="mt-8 px-7 py-3 rounded-full border-0 bg-[#9A48FF] text-white font-['Outfit'] font-bold cursor-pointer">Sair da conta</button>
            </div>
        </section>
    );
}
