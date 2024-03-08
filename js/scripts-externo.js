function mostrarHorarios(filial) {
    const elementosExibir = {
        "BM_CASCATINHA": ["texto_cascatinha", "horario_bm_cascatinha"],
        "BM_ENCOSTA_DO_SOL": ["texto_cascatinha", "horario_bm_encosta_sol"],
        "SIMAO_PEREIRA": ["texto_cascatinha", "horario_simao_pereira"],
        "SDE": ["texto_cascatinha", "horario_sistema_degraus"],
        "IEQ": ["texto_cascatinha", "horario_igreja"],
        "SHJF": ["texto_cascatinha", "horario_san_house"],
        "HIM": ["texto_cascatinha", "horario_iurimaggi"],
        "IPF": ["texto_cascatinha", "horario_igreja_palavra_fe"]
    };

    const elementosOcultar = [
        "horario_bm_cascatinha",
        "horario_bm_encosta_sol",
        "horario_simao_pereira",
        "horario_sistema_degraus",
        "horario_igreja",
        "horario_san_house",
        "horario_iurimaggi",
        "horario_igreja_palavra_fe"
    ];

    // Oculta todos os elementos
    elementosOcultar.forEach(elemento => ocultarElemento(elemento));

    // Exibe os elementos correspondentes à filial selecionada
    if (elementosExibir.hasOwnProperty(filial.value)) {
        elementosExibir[filial.value].forEach(elemento => exibirElemento(elemento));
    }
}

function exibirElemento(id) {
    document.getElementById(id).style.display = "block";
}

function ocultarElemento(id) {
    document.getElementById(id).style.display = "none";
}


//###############################################################################################
function exibeMetodologias(metodologia) {
    const metodologiaAdulto = document.querySelector('.metodologia_adulto');
    const metodologiaInfantil = document.querySelector('.metodologia_infantil');

    metodologiaAdulto.style.display = metodologia.value === "jj_adulto" ? "block" : "none";
    metodologiaInfantil.style.display = metodologia.value === "jj_infantil" ? "block" : "none";
}

/// faixas pretas

/**Loop para exibir os alunos-- >
< !--Cada aluno é representado por um objeto com nome e data de graduação-- >
< !--Você pode adicionar ou remover alunos facilmente neste array-- >
*/

//-Array de faixa preta
const alunos = [
    { nome: "Ramon Medeiros", dataGraduacao: "Dezembro de 2013" },
    { nome: "Pedro Mazzoni", dataGraduacao: "Julho de 2017" },
    { nome: "Jacksson Silvério", dataGraduacao: "Dezembro de 2018" },
    { nome: "Cláudio Libra", dataGraduacao: "Julho de 2019" },
    { nome: "Guilherme Carias", dataGraduacao: "Dezembro de 2019" },
    { nome: "Jorge Luis", dataGraduacao: "Dezembro de 2019" },
    { nome: "Felipe Marinho", dataGraduacao: "Dezembro de 2019" },
    { nome: "Wellington Soares", dataGraduacao: "Dezembro de 2020" },
    { nome: "Elerson Moreira", dataGraduacao: "Dezembro de 2020" },
    { nome: "Lorran Fernando", dataGraduacao: "Dezembro de 2021" },
    { nome: "Ricardo Bizotti", dataGraduacao: "Dezembro de 2022" },
    { nome: "Rafael Carapinha", dataGraduacao: "Dezembro de 2023" },
    { nome: "Amanda Debussy", dataGraduacao: "Dezembro de 2023" },
    { nome: "Cláudio Ferreira", dataGraduacao: "Dezembro de 2023" },
];

// Função para exibir os alunos
function exibirAlunos() {
    alunos.forEach((aluno) => {
        document.write(`
                <div class="text-center d-flex flex-column flex-wrap justify-content-center aluno-faixa-preta mb-4">
                    <h5 class="aluno-faixa-preta-nome mt-2 mb-1">${aluno.nome}</h5>
                    <p class="card-text mb-2">Graduado em ${aluno.dataGraduacao}</p>
                </div>
            `);
    });
}

//PROFESSORES
// Array de objetos representando os professores
// Função para gerar os elementos dos professores
function gerarProfessores() {
    // Array de objetos representando os professores
    const professores = [
        { nome: "Jackson Silvério", faixa: "Faixa Preta", imagem: "/assets/img/imgs-brabo/prof-jackson.jpeg" },
        { nome: "Maxuel Andrade", faixa: "Faixa Marrom", imagem: "/assets/img/imgs-brabo/prof-maxuel.jpeg" },
        { nome: "Antônio Kurimin", faixa: "Faixa Marrom", imagem: "/assets/img/imgs-brabo/prof-kurumin.jpeg" },
        { nome: "Claudio Brauna", faixa: "Faixa Preta", imagem: "/assets/img/imgs-brabo/prof-brauna.jpeg" },
        { nome: "Lucas Santos", faixa: "Faixa Marrom", imagem: "/assets/img/imgs-brabo/prof-lucas-santos.jpeg" },
        { nome: "Ramon Tabet", faixa: "Faixa Marrom", imagem: "/assets/img/imgs-brabo/prof-tabet.jpeg" },
        { nome: "Iuri Maggi", faixa: "Faixa Marrom", imagem: "/assets/img/imgs-brabo/prof-iuri.jpeg" },
        { nome: "Jodelis Lima", faixa: "Faixa Marrom", imagem: "/assets/img/imgs-brabo/prof-jodelis.jpg" },
        { nome: "Yasmin Zamblute", faixa: "Faixa Roxa", imagem: "/assets/img/imgs-brabo/prof-yasmin.jpeg" }
    ];

    const container = document.getElementById("professores-container");

    // Função para criar um elemento HTML para cada professor
    function criarElementoProfessor(professor) {
        const div = document.createElement("div");
        div.className = "card d-flex";
        div.style.width = "18rem";

        div.innerHTML = `
        <img class="card-img-top" src="${professor.imagem}" alt="Card image cap" />
        <div class="card-body">
          <h5>${professor.nome}</h5>
          <p class="card-text">${professor.faixa}</p>
        </div>
      `;

        container.appendChild(div);
    }

    // Chamando a função para criar os elementos HTML dos professores
    professores.forEach(criarElementoProfessor);
}