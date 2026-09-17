import { useState } from "react";
import logo from "../assets/images/logojoviclass.png";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "../hooks/useRouter";

const links = [
    ["#solucao", "A Solução"],
    ["#publico-alvo", "Público-Alvo"],
    ["#galeria", "Galeria"],
    ["#equipe", "Nossa Equipe"],
    ["#contato", "Contato"],
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth();
    const { path, navigate } = useRouter();

    const closeMenu = () => setMenuOpen(false);
    const homeLink = (hash) => (path === "/" ? hash : `/${hash}`);

    const handleNavigate = (event, href) => {
        event.preventDefault();
        closeMenu();

        if (href.startsWith("#")) {
            if (path !== "/") {
                navigate("/");
                setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 50);
            } else {
                document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
            }
            return;
        }

        navigate(href);
    };

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <header className="sticky top-2 z-[100] w-[calc(100%-32px)] max-w-[1400px] mx-auto mt-5 px-4 py-2 rounded-full">
            <nav className="relative flex items-center justify-between gap-6 w-full h-16 px-2 rounded-[40px] bg-[rgba(57,2,124,0.6)] backdrop-blur-[16px] overflow-visible">
                <a href="/" onClick={(e) => handleNavigate(e, "/")} className="shrink-0 cursor-pointer no-underline">
                    <img src={logo} alt="Logo do JoviClass" className="h-[70px] w-auto mt-[10px] md:h-[70px] max-md:h-[52px] max-md:mt-[6px]" />
                </a>

                <ul
                    id="nav-links"
                    className={`absolute md:static top-[calc(100%+12px)] md:top-auto left-0 right-0 flex flex-col md:flex-row items-stretch md:items-center justify-end gap-1 md:gap-7 m-0 md:ml-auto md:mr-12 p-3 md:p-0 rounded-3xl md:rounded-none bg-[rgba(57,2,124,0.95)] md:bg-transparent backdrop-blur-[16px] overflow-hidden z-50 transition-all duration-300 ${menuOpen ? "max-h-[400px] opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"} md:max-h-none md:opacity-100 md:pointer-events-auto`}
                >
                    {links.map(([href, label]) => (
                        <li key={href} className="shrink-0">
                            <a href={homeLink(href)} onClick={(e) => handleNavigate(e, href)} className="block w-full px-4 py-3 md:w-auto md:p-0 rounded-xl md:rounded-none font-['Outfit'] text-[15px] font-extrabold text-[#DDC4FB] no-underline whitespace-nowrap transition-colors duration-300 hover:text-white hover:bg-[rgba(154,72,255,0.25)] md:hover:bg-transparent">
                                {label}
                            </a>
                        </li>
                    ))}
                    <li className="shrink-0">
                        <a href="/dashboard" onClick={(e) => handleNavigate(e, "/dashboard")} className="block w-full px-4 py-3 md:w-auto md:p-0 rounded-xl md:rounded-none font-['Outfit'] text-[15px] font-extrabold text-[#81D8E5] no-underline whitespace-nowrap hover:text-white">
                            {isAuthenticated ? "Dashboard" : "Área do aluno"}
                        </a>
                    </li>
                    {isAuthenticated && (
                        <li className="shrink-0">
                            <button type="button" onClick={handleLogout} className="w-full px-4 py-3 md:w-auto md:p-0 rounded-xl md:rounded-none border-0 bg-transparent font-['Outfit'] text-[15px] font-extrabold text-[#DDC4FB] cursor-pointer hover:text-white">
                                Sair
                            </button>
                        </li>
                    )}
                </ul>

                <button type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen((prev) => !prev)} className="flex md:hidden flex-col items-center justify-center gap-[5px] w-10 h-10 p-0 bg-transparent border-0 rounded-lg cursor-pointer shrink-0">
                    <span className={`block w-[22px] h-[2px] rounded bg-[#DDC4FB] transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                    <span className={`block w-[22px] h-[2px] rounded bg-[#DDC4FB] transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
                    <span className={`block w-[22px] h-[2px] rounded bg-[#DDC4FB] transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
                </button>
            </nav>
        </header>
    );
}
