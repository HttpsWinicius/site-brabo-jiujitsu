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
    { nome: "1&#176;- Pedro Mazzoni", dataGraduacao: "Julho de 2017" },
    { nome: "2&#176;- Jackson Silvério", dataGraduacao: "Dezembro de 2018" },
    { nome: "3&#176;- Cláudio Libra", dataGraduacao: "Julho de 2019" },
    { nome: "4&#176;- Guilherme Carias", dataGraduacao: "Dezembro de 2019" },
    { nome: "5&#176;- Jorge Luis", dataGraduacao: "Dezembro de 2019" },
    { nome: "6&#176;- Felipe Marinho", dataGraduacao: "Dezembro de 2019" },
    { nome: "7&#176;- Wellington Soares", dataGraduacao: "Dezembro de 2020" },
    { nome: "8&#176;- Elerson Moreira", dataGraduacao: "Dezembro de 2020" },
    { nome: "9&#176;- Lorran Fernando", dataGraduacao: "Dezembro de 2021" },
    { nome: "10&#176;- Ricardo Bizotti", dataGraduacao: "Dezembro de 2022" },
    { nome: "11&#176;- Rafael Carapinha", dataGraduacao: "Dezembro de 2023" },
    { nome: "12&#176;- Amanda Debussy", dataGraduacao: "Dezembro de 2023" },
    { nome: "13&#176;- Cláudio Ferreira", dataGraduacao: "Dezembro de 2023" },
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
        { nome: "Jackson Silvério", faixa: "Faixa Preta -  1° Dan", imagem: "/assets/img/imgs-brabo/prof-jackson-foto-kimono.jpeg" },
        { nome: "Maxuel Andrade", faixa: "Faixa Marrom", imagem: "/assets/img/imgs-brabo/prof-maxuel.jpeg" },
        { nome: "Antônio Kurimin", faixa: "Faixa Marrom", imagem: "/assets/img/imgs-brabo/prof-kurumin-foto-kimono.jpeg" },
        { nome: "Claudio Brauna", faixa: "Faixa Preta", imagem: "/assets/img/imgs-brabo/prof-brauna-foto-kimono.jpeg" },
        { nome: "Lucas Santos", faixa: "Faixa Marrom", imagem: "/assets/img/imgs-brabo/prof-lucas-santos-foto-kimono.jpeg" },
        { nome: "Ramon Tabet", faixa: "Faixa Marrom", imagem: "/assets/img/imgs-brabo/prof-tabet-san-foto-kimono.jpeg" },
        { nome: "Iuri Maggi", faixa: "Faixa Marrom", imagem: "/assets/img/imgs-brabo/prof-iuri-foto-kimono.jpeg" },
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
        <img class="card-img-top" src="${professor.imagem}" alt="Card que mostra as fotos dos professores da brabo jiujitsu" />
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