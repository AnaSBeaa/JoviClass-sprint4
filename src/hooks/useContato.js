import { useState } from "react";

const CONTATOS_API = "https://6aaaebc1ff4dd5698b4f2a7a.mockapi.io/contatos";

export function useContato() {
    const [formStatus, setFormStatus] = useState("");
    const [enviando, setEnviando] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const dados = {
            nome: form.nome.value,
            email: form.email.value,
            mensagem: form.mensagem.value,
            data: new Date().toISOString(),
        };

        setEnviando(true);
        setFormStatus("");

        try {
            const response = await fetch(CONTATOS_API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dados),
            });

            if (!response.ok) throw new Error("Erro ao enviar mensagem");

            setFormStatus("Mensagem enviada com sucesso!");
            form.reset();
        } catch (error) {
            console.error("Erro ao enviar contato:", error);
            setFormStatus("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
        } finally {
            setEnviando(false);
        }
    };

    return { formStatus, enviando, handleSubmit };
}
