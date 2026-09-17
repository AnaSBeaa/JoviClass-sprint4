import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "../hooks/useRouter";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const { navigate } = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = login(email, password);
        if (!result.success) {
            setError(result.message);
            return;
        }
        navigate("/dashboard");
    };

    return (
        <section className="min-h-[75vh] flex items-center justify-center px-6 py-20">
            <form onSubmit={handleSubmit} className="w-full max-w-[460px] p-8 rounded-3xl border-2 border-[#9A48FF] bg-[#1c0b3e] shadow-[0_0_40px_rgba(154,72,255,0.2)]">
                <h1 className="font-['Outfit'] text-4xl font-extrabold text-white">Login</h1>
                <p className="mt-2 mb-8 font-['Outfit'] text-[#DDC4FB]">Acesse sua área do aluno.</p>

                <label className="font-['Outfit'] font-semibold text-sm text-[#DDC4FB]">E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="mt-2 mb-5 w-full box-border px-4 py-3 text-white bg-[#39027c] border-2 border-[#9A48FF] rounded-xl outline-none" />

                <label className="font-['Outfit'] font-semibold text-sm text-[#DDC4FB]">Senha</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="mt-2 w-full box-border px-4 py-3 text-white bg-[#39027c] border-2 border-[#9A48FF] rounded-xl outline-none" />

                {error && <p className="mt-4 p-3 rounded-xl border-2 border-[#a83232] bg-[#6a2d2d] font-['Outfit'] text-sm text-white">{error}</p>}

                <button type="submit" className="mt-6 w-full px-7 py-3 rounded-full border-0 bg-[#9A48FF] text-white font-['Outfit'] font-bold cursor-pointer hover:bg-[#C99DFF]">Entrar</button>

                <p className="mt-6 text-xs leading-5 font-['Outfit'] text-[#DDC4FB]">
                    Usuário de demonstração: <strong>aluno@joviclass.com</strong><br />
                    Senha: <strong>joviclass123</strong>
                </p>
            </form>
        </section>
    );
}
