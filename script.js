import { createClient } from
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = "https://buzqgvjiwlynccuhvjhk.supabase.co";

const SUPABASE_KEY = "sb_publishable_N9IpuSU0QDgEmVvKBVoofQ_QxXZEfjV";

const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const btnEstive = document.getElementById("btnEstive");

btnEstive.addEventListener("click", async () => {

    btnEstive.disabled = true;
    btnEstive.textContent = "Registrando...";

    const { error } = await supabase
        .from("registros_visita")
        .insert({
            evento: "visitou_site"
        });

    if (error) {
        console.error("Erro ao registrar visita:", error);

        btnEstive.textContent = "Tente novamente.";
        btnEstive.disabled = false;

        return;
    }

    btnEstive.textContent = "Registro concluido.";
    btnEstive.classList.add("registrado");

    console.log("Visita registrada com sucesso!");

});