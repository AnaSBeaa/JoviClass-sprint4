import logo from "../assets/images/logojoviclass.png";
import telaInicial from "../assets/images/telainicial.png";
import info from "../assets/images/info.png";
import conta from "../assets/images/conta.png";
import horarios from "../assets/images/horarios.png";
import ana from "../assets/images/ana.png";
import paloma from "../assets/images/paloma.png";
import yasmin from "../assets/images/yasmin.png";
import TeamMember from "./TeamMember";
import { useContato } from "../hooks/useContato";

function Pagina() {
    const { formStatus, enviando, handleSubmit } = useContato();

    const gradientText =
        "bg-gradient-to-r from-[#DDC4FB] to-[#81D8E5] bg-clip-text text-transparent";

    return (
        <div className="min-h-screen overflow-x-hidden bg-[#0d0221] text-white bg-[radial-gradient(600px_circle_at_15%_8%,rgba(154,72,255,0.28),transparent_60%),radial-gradient(700px_circle_at_85%_5%,rgba(129,216,229,0.16),transparent_60%),radial-gradient(800px_circle_at_50%_40%,rgba(154,72,255,0.22),transparent_60%),radial-gradient(500px_circle_at_90%_30%,rgba(129,216,229,0.14),transparent_60%),radial-gradient(450px_circle_at_8%_35%,rgba(154,72,255,0.20),transparent_60%),radial-gradient(400px_circle_at_60%_15%,rgba(221,196,251,0.12),transparent_60%),radial-gradient(400px_circle_at_60%_70%,rgba(221,196,251,0.12),transparent_60%),radial-gradient(400px_circle_at_40%_90%,rgba(221,196,251,0.12),transparent_60%)]">

            <main>

                {/* =====================================================
                    HERO
                ====================================================== */}

                <section
                    id="inicio"
                    className="min-h-screen min-h-[100dvh] flex items-center justify-center scroll-mt-24 py-[120px] max-md:py-[100px]"
                >
                    <div className="flex items-center justify-between gap-16 max-md:flex-col max-md:items-center max-md:gap-6 w-full max-w-[1200px] mx-auto px-5">

                        <div className="flex-1">
                            <span
                                className={`
                                    block
                                    font-['Outfit']
                                    font-extrabold
                                    text-[72px]
                                    max-md:text-[48px]
                                    leading-[1.1]
                                    text-left
                                    max-md:text-center
                                    ${gradientText}
                                `}
                            >
                                JoviClass
                            </span>

                            <h1 className="mt-[60px] mb-0 font-['Outfit'] font-bold text-[25px] leading-[1.1] text-white text-left max-md:text-center">
                                Sua rotina acadêmica,
                                <span className="text-[#81D8E5]">
                                    {" "}simplificada
                                </span>
                            </h1>

                            <p className="mt-4 mb-0 max-w-[1000px] font-['Outfit'] font-normal text-[20px] leading-normal text-[#DDC4FB] text-left max-md:text-center">
                                Uma plataforma criada para ajudar estudantes a organizar sua
                                rotina, acompanhar suas atividades e ter suas informações
                                acadêmicas em um só lugar.
                            </p>

                            <a
                                href="#solucao"
                                className="inline-flex items-center gap-3 mt-6 px-6 py-4 rounded-[0.7rem] bg-[#39027c] text-white font-['Outfit'] text-base font-semibold no-underline transition-colors duration-500 hover:bg-[#9A48FF]"
                            >
                                Conheça o JoviClass
                            </a>
                        </div>

                        <img
                            src={telaInicial}
                            alt="Imagem ilustrativa do JoviClass"
                            className="max-w-full w-auto rounded-[70px]"
                        />
                    </div>
                </section>

                {/* =====================================================
                    SOLUÇÃO
                ====================================================== */}

                <section
                    id="solucao"
                    className="min-h-screen min-h-[100dvh] flex items-center justify-center scroll-mt-24 py-[120px] max-md:py-[100px]"
                >
                    <div className="w-full max-w-[1200px] mx-auto px-6">

                        <h2
                            className={`
                                mb-[90px]
                                font-['Outfit']
                                font-extrabold
                                text-[56px]
                                max-md:text-[40px]
                                leading-[1.1]
                                text-center
                                ${gradientText}
                            `}
                        >
                            Da dor à solução
                        </h2>

                        <div className="flex items-stretch justify-center gap-2 max-md:flex-col max-md:items-center">

                            {/* ETAPA 01 */}
                            <div className="flex flex-1 flex-col gap-2 w-full max-w-[320px] max-md:max-w-full p-7 px-6 border-2 border-[#9A48FF] rounded-3xl transition-colors duration-500 hover:border-white">
                                <span className="font-['Outfit'] font-extrabold text-[32px] leading-normal text-white opacity-95">
                                    01
                                </span>

                                <span className="font-['Outfit'] font-bold text-[13px] uppercase tracking-[0.8px] text-white opacity-85">
                                    O problema
                                </span>

                                <p className="m-0 font-['Outfit'] font-normal text-[15px] leading-[1.5] text-[#DDC4FB]">
                                    Informações sobre seus estudos em muitos lugares diferentes.
                                </p>
                            </div>

                            {/* SETA */}
                            <div
                                aria-hidden="true"
                                className="flex shrink-0 items-center justify-center w-[60px] text-[#8461F4] max-md:w-6 max-md:h-10 max-md:rotate-90"
                            >
                                <svg viewBox="0 0 60 24" className="w-full h-6">
                                    <path
                                        d="M2,12 H50 M40,4 L50,12 L40,20"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            {/* ETAPA 02 */}
                            <div className="flex flex-1 flex-col gap-2 w-full max-w-[320px] max-md:max-w-full p-7 px-6 border-2 border-[#9A48FF] rounded-3xl transition-colors duration-500 hover:border-white">
                                <span className="font-['Outfit'] font-extrabold text-[32px] text-white opacity-95">
                                    02
                                </span>

                                <span className="font-['Outfit'] font-bold text-[13px] uppercase tracking-[0.8px] text-white opacity-85">
                                    A consequência
                                </span>

                                <p className="m-0 font-['Outfit'] font-normal text-[15px] leading-[1.5] text-[#DDC4FB]">
                                    Perda de tempo e organização desordenada.
                                </p>
                            </div>

                            {/* SETA */}
                            <div
                                aria-hidden="true"
                                className="flex shrink-0 items-center justify-center w-[60px] text-[#8461F4] max-md:w-6 max-md:h-10 max-md:rotate-90"
                            >
                                <svg viewBox="0 0 60 24" className="w-full h-6">
                                    <path
                                        d="M2,12 H50 M40,4 L50,12 L40,20"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            {/* ETAPA 03 */}
                            <div className="flex flex-1 flex-col gap-2 w-full max-w-[320px] max-md:max-w-full p-7 px-6 border-2 border-[#81D8E5] rounded-3xl bg-gradient-to-br from-[#39027c] to-[#1c0b3e] shadow-[0_0_40px_rgba(129,216,229,0.25)] transition-colors duration-500 hover:border-white">
                                <span className="font-['Outfit'] font-extrabold text-[32px] text-white opacity-95">
                                    03
                                </span>

                                <span className="font-['Outfit'] font-bold text-[13px] uppercase tracking-[0.8px] text-[#81D8E5]">
                                    A solução
                                </span>

                                <p className="m-0 font-['Outfit'] font-normal text-[15px] leading-[1.5] text-[#DDC4FB]">
                                    Uma plataforma centralizada para gerenciar todas as
                                    informações acadêmicas de forma organizada e eficiente.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    PÚBLICO-ALVO
                ====================================================== */}

                <section
                    id="publico-alvo"
                    className="min-h-screen min-h-[100dvh] flex items-center justify-center scroll-mt-24 py-[120px] max-md:py-[100px]"
                >
                    <div className="flex items-center justify-between gap-16 w-full max-w-[1200px] mx-auto px-5 max-md:flex-col max-md:items-center max-md:gap-6">

                        <h1
                            className={`
                                flex-1
                                m-0
                                font-['Outfit']
                                font-extrabold
                                text-[72px]
                                max-md:text-[48px]
                                leading-[1.1]
                                text-left
                                max-md:text-center
                                ${gradientText}
                            `}
                        >
                            Público-Alvo
                        </h1>

                        <div className="flex-1 max-w-[1000px] font-['Outfit'] font-normal text-[20px] text-[#DDC4FB] text-left max-md:text-center">

                            <p className="mt-0 mb-4">
                                Estudantes em geral, que lidam com uma rotina intensa dividida
                                entre aulas, trabalhos e atividades extracurriculares.
                            </p>

                            <p className="mt-0 mb-4">
                                Possuem renda limitada e são sensíveis a preço, mas estão
                                dispostos a investir em soluções que economizem tempo ou
                                melhorem seu desempenho acadêmico.
                            </p>

                            <p className="mt-0">
                                São nativos digitais, ativos em redes sociais, e costumam
                                buscar praticidade e agilidade nas ferramentas que usam no dia
                                a dia.
                            </p>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    GALERIA
                ====================================================== */}

                <section
                    id="galeria"
                    className="min-h-screen min-h-[100dvh] flex items-center justify-center scroll-mt-24 py-[120px] max-md:py-[100px]"
                >
                    <div className="w-full max-w-[1200px] mx-auto px-6">

                        <h1
                            className={`
                                m-0 mb-2
                                font-['Outfit']
                                font-extrabold
                                text-[72px]
                                max-md:text-[48px]
                                leading-[1.1]
                                text-center
                                ${gradientText}
                            `}
                        >
                            Galeria
                        </h1>

                        <p className="m-0 mb-12 font-['Outfit'] font-normal text-[20px] text-[#DDC4FB] text-center">
                            Algumas telas do aplicativo JoviClass
                        </p>

                        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-6">
                            {[
                                [telaInicial, "Tela inicial do JoviClass", "Tela inicial"],
                                [info, "Tela de atividades do JoviClass", "Informações de suporte"],
                                [conta, "Tela de conteúdos do JoviClass", "Conta pra acesso fácil"],
                                [horarios, "Tela de rotina acadêmica do JoviClass", "Rotina"],
                            ].map(([image, alt, caption]) => (
                                <figure
                                    key={caption}
                                    className="m-0 text-center"
                                >
                                    <div className="w-full overflow-hidden flex items-center justify-center bg-[#39027c] border-2 border-[#9A48FF] rounded-[40px]">
                                        <img
                                            src={image}
                                            alt={alt}
                                            className="block w-full h-auto object-contain bg-[#39027c]"
                                        />
                                    </div>

                                    <figcaption className="mt-3 font-['Outfit'] font-semibold text-base text-[#DDC4FB]">
                                        {caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    EQUIPE
                ====================================================== */}

                <section
                    id="equipe"
                    className="min-h-screen min-h-[100dvh] flex items-center justify-center scroll-mt-24 py-[120px] max-md:py-[100px]"
                >
                    <div className="w-full max-w-[1200px] mx-auto px-6">

                        <h1
                            className={`
                                m-0 mb-2
                                font-['Outfit']
                                font-extrabold
                                text-[72px]
                                max-md:text-[48px]
                                leading-[1.1]
                                text-center
                                ${gradientText}
                            `}
                        >
                            Nossa Equipe
                        </h1>

                        <p className="m-0 mb-12 font-['Outfit'] font-normal text-[20px] text-[#DDC4FB] text-center">
                            Quem desenvolveu o JoviClass
                        </p>

                        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
                            {[
                                [ana, "Ana Beatriz", "Desenvolvedora Front-End"],
                                [paloma, "Paloma", "Desenvolvedora Back-End"],
                                [yasmin, "Yasmin", "Desenvolveu toda a documentação do projeto"],
                            ].map(([image, name, role]) => (
                                <TeamMember
                                    key={name}
                                    image={image}
                                    name={name}
                                    role={role}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CONTATO
                ====================================================== */}

                <section
                    id="contato"
                    className="min-h-screen min-h-[100dvh] flex items-center justify-center scroll-mt-24 py-[120px] max-md:py-[100px]"
                >
                    <div className="w-full max-w-[1200px] mx-auto px-6">

                        <h1
                            className={`
                                m-0 mb-2
                                font-['Outfit']
                                font-extrabold
                                text-[72px]
                                max-md:text-[48px]
                                leading-[1.1]
                                text-center
                                ${gradientText}
                            `}
                        >
                            Contato
                        </h1>

                        <p className="m-0 mb-12 font-['Outfit'] font-normal text-[20px] text-[#DDC4FB] text-center">
                            Fale com a equipe do JoviClass
                        </p>

                        <div className="flex items-stretch justify-between gap-16 max-md:flex-col max-md:gap-10">

                            {/* INFORMAÇÕES */}
                            <div className="flex-1 max-w-[420px] max-md:max-w-full">

                                <p className="m-0 mb-8 font-['Outfit'] font-normal text-[18px] leading-[1.6] text-[#DDC4FB]">
                                    Tem dúvidas, sugestões ou quer saber mais sobre a solução?
                                    Entre em contato conosco pelos canais abaixo ou envie uma
                                    mensagem pelo formulário.
                                </p>

                                <div className="flex flex-col gap-4">

                                    {/* EMAIL */}
                                    <a
                                        href="mailto:contato@joviclass.com"
                                        className="flex flex-col gap-1 px-5 py-4 border-2 border-[#9A48FF] rounded-2xl bg-[#39027c] no-underline transition-colors duration-300 hover:border-[#C99DFF]"
                                    >
                                        <span className="font-['Outfit'] text-[13px] font-semibold uppercase tracking-[0.5px] text-[#C99DFF]">
                                            E-mail
                                        </span>

                                        <span className="font-['Outfit'] text-[18px] font-semibold text-white">
                                            contato@joviclass.com
                                        </span>
                                    </a>

                                    {/* INSTAGRAM */}
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col gap-1 px-5 py-4 border-2 border-[#9A48FF] rounded-2xl bg-[#39027c] no-underline transition-colors duration-300 hover:border-[#C99DFF]"
                                    >
                                        <span className="font-['Outfit'] text-[13px] font-semibold uppercase tracking-[0.5px] text-[#C99DFF]">
                                            Instagram
                                        </span>

                                        <span className="font-['Outfit'] text-[18px] font-semibold text-white">
                                            @joviclass
                                        </span>
                                    </a>

                                    {/* LINKEDIN */}
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col gap-1 px-5 py-4 border-2 border-[#9A48FF] rounded-2xl bg-[#39027c] no-underline transition-colors duration-300 hover:border-[#C99DFF]"
                                    >
                                        <span className="font-['Outfit'] text-[13px] font-semibold uppercase tracking-[0.5px] text-[#C99DFF]">
                                            LinkedIn
                                        </span>

                                        <span className="font-['Outfit'] text-[18px] font-semibold text-white">
                                            JoviClass
                                        </span>
                                    </a>

                                </div>
                            </div>

                            {/* FORMULÁRIO */}
                            <form
                                onSubmit={handleSubmit}
                                noValidate
                                className="flex flex-1 flex-col gap-2 max-w-[560px] max-md:max-w-full"
                            >

                                <label
                                    htmlFor="nome"
                                    className="mt-2 font-['Outfit'] font-semibold text-sm text-[#DDC4FB]"
                                >
                                    Nome
                                </label>

                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    placeholder="Seu nome"
                                    required
                                    className="w-full box-border px-4 py-[14px] font-['Outfit'] text-base text-white bg-[#39027c] border-2 border-[#9A48FF] rounded-xl outline-none placeholder:text-[#8461F4] transition-colors duration-300 focus:border-[#C99DFF]"
                                />

                                <label
                                    htmlFor="email"
                                    className="mt-2 font-['Outfit'] font-semibold text-sm text-[#DDC4FB]"
                                >
                                    E-mail
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="seuemail@exemplo.com"
                                    required
                                    className="w-full box-border px-4 py-[14px] font-['Outfit'] text-base text-white bg-[#39027c] border-2 border-[#9A48FF] rounded-xl outline-none placeholder:text-[#8461F4] transition-colors duration-300 focus:border-[#C99DFF]"
                                />

                                <label
                                    htmlFor="mensagem"
                                    className="mt-2 font-['Outfit'] font-semibold text-sm text-[#DDC4FB]"
                                >
                                    Mensagem
                                </label>

                                <textarea
                                    id="mensagem"
                                    name="mensagem"
                                    rows="5"
                                    placeholder="Escreva sua mensagem..."
                                    required
                                    className="w-full box-border px-4 py-[14px] font-['Outfit'] text-base text-white bg-[#39027c] border-2 border-[#9A48FF] rounded-xl outline-none resize-y placeholder:text-[#8461F4] transition-colors duration-300 focus:border-[#C99DFF]"
                                />

                                {formStatus && (
                                    <p
                                        className={`m-0 mt-2 px-4 py-3 rounded-xl border-2 font-['Outfit'] text-sm font-semibold text-white ${
                                            formStatus.includes("sucesso")
                                                ? "border-[#40916c] bg-[#2d6a4f]"
                                                : "border-[#a83232] bg-[#6a2d2d]"
                                        }`}
                                    >
                                        {formStatus}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={enviando}
                                    className="mt-4 self-start max-md:self-stretch max-md:w-full px-8 py-[14px] rounded-[40px] border-0 bg-[#9A48FF] font-['Outfit'] text-base font-bold text-white cursor-pointer transition-colors duration-300 hover:bg-[#C99DFF] disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {enviando ? "Enviando..." : "Enviar mensagem"}
                                </button>

                            </form>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}

export default Pagina;