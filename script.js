const dataFinal = new Date("October 1, 2026 00:00:00").getTime();

        const contador = setInterval(function() {

            const agora = new Date().getTime();

            const tempoRestante = dataFinal - agora;

            const dias = Math.floor(
                tempoRestante / (1000 * 60 * 60 * 24)
            );

            const horas = Math.floor(
                (tempoRestante % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );

            const minutos = Math.floor(
                (tempoRestante % (1000 * 60 * 60)) /
                (1000 * 60)
            );

            const segundos = Math.floor(
                (tempoRestante % (1000 * 60)) /
                1000
            );

            document.getElementById("contador").innerHTML =
                dias + " dias " +
                horas + " horas " +
                minutos + " minutos " +
                segundos + " segundos";

            if (tempoRestante < 0) {

                clearInterval(contador);

                document.getElementById("contador").innerHTML =
                "Chegou de mamata né? Me manda o pix aí pfvr:<br>" +
                "152-245-495-70";

            }

        }, 1000);