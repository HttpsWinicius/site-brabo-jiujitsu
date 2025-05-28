const horarios = {
    BM_CASCATINHA: 'assets/img/horarios/cascatinha-brooklyn.jpeg',
    BM_ENCOSTA_DO_SOL: 'assets/img/horarios/encosta-do-sol.jpeg',
    BM_CENTRO: 'assets/img/horarios/centro-brooklyn.jpeg',
    SIMAO_PEREIRA: [
        [
            "16:00",
            "Jiu-Jitsu Juvenil",
            "",
            "Jiu-Jitsu Adulto",
            "",
            "Jiu-Jitsu Adulto",
            "",
        ],
        [
            "18:00",
            "Jiu-Jitsu Adulto",
            "Jiu-Jitsu Adulto",
            "Jiu-Jitsu Adulto",
            "Jiu-Jitsu Adulto",
            "Jiu-Jitsu Adulto",
            "",
        ],
        [
            "19:30",
            "Jiu-Jitsu Adulto",
            "Jiu-Jitsu Adulto",
            "Jiu-Jitsu Adulto",
            "Jiu-Jitsu Adulto",
            "Jiu-Jitsu Adulto",
            "",
        ],
        // Adicione mais horários conforme necessário
    ],
    SHJF: 'assets/img/horarios/san-house.jpeg',
    SDE: [
        [
            "17:40",
            "Jiu-Jitsu Infantil",
            "",
            "Jiu-Jitsu Infantil",
            "",
            "",
            "",
        ],
        // Adicione mais horários conforme necessário

    ],
    IEQ: [
        [
            "19:00",
            "",
            "Jiu-Jitsu Infantil",
            "",
            "Jiu-Jitsu Infantil",
            "",
            "",
        ],
        // Adicione mais horários conforme necessário

    ],
    // fatality gym
    FG: [
        [
            "21:00",
            "",
            "Jiu-Jitsu",
            "",
            "Jiu-Jitsu",
            "",
            "",
        ],
        // Adicione mais horários conforme necessário

    ],
    // Adicione mais filiais e horários conforme necessário
};

/*function mostrarHorarios(select) {
    const filial = select.value;
    const tabela = document.getElementById("horario_tabela");
    const corpo = document.getElementById("horario_corpo");
    const textoFilial = document.getElementById("texto_filial");

    if (filial === "select") {
        tabela.style.display = "none";
        textoFilial.style.display = "none";
        return;
    }

    const horariosFilial = horarios[filial];
    corpo.innerHTML = "";

    horariosFilial.forEach((linha) => {
        const tr = document.createElement("tr");
        linha.forEach((coluna) => {
            const td = document.createElement("td");
            td.textContent = coluna;
            tr.appendChild(td);
        });
        corpo.appendChild(tr);
    });

    textoFilial.style.display = "block";
    tabela.style.display = "table";
}*/

function mostrarHorarios(select) {
    const filial = select.value;
    const tabela = document.getElementById("horario_tabela");
    const corpo = document.getElementById("horario_corpo");
    const textoFilial = document.getElementById("texto_filial");

    // Container para a imagem (vamos criar um se ainda não existir)
    let imgContainer = document.getElementById("imagem_horarios");
    if (!imgContainer) {
        imgContainer = document.createElement("div");
        imgContainer.id = "imagem_horarios";
        imgContainer.style.textAlign = "center";
        imgContainer.style.marginTop = "20px";
        tabela.parentNode.insertBefore(imgContainer, tabela.nextSibling);
    }

    // Limpa conteúdos anteriores
    corpo.innerHTML = "";
    imgContainer.innerHTML = "";

    if (filial === "select") {
        tabela.style.display = "none";
        textoFilial.style.display = "none";
        imgContainer.style.display = "none";
        return;
    }

    const horariosFilial = horarios[filial];

    if (typeof horariosFilial === 'string') {
        // Se for string, mostramos a imagem
        const img = document.createElement("img");
        img.src = horariosFilial;
        img.alt = `Horários da filial ${filial}`;
        img.style.maxWidth = "100%";
        imgContainer.appendChild(img);

        tabela.style.display = "none";
        imgContainer.style.display = "block";
    } else if (Array.isArray(horariosFilial)) {
        // Se for array, mostramos a tabela normalmente
        horariosFilial.forEach((linha) => {
            const tr = document.createElement("tr");
            linha.forEach((coluna) => {
                const td = document.createElement("td");
                td.textContent = coluna;
                tr.appendChild(td);
            });
            corpo.appendChild(tr);
        });

        tabela.style.display = "table";
        imgContainer.style.display = "none";
    } else {
        tabela.style.display = "none";
        imgContainer.style.display = "none";
    }

    textoFilial.style.display = "block";
}