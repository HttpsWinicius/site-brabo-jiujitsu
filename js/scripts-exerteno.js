function mostrarHorarios(filial) {
    if (filial.value == "BM_CASCATINHA") {
        document.getElementById("texto_cascatinha").style.display = "block";
        document.getElementById("horario_bm_cascatinha").style.display = "block";
        document.getElementById("horario_bm_encosta_sol").style.display = "none";
        document.getElementById("horario_simao_pereira").style.display = "none";
        document.getElementById("horario_san_house").style.display = "none";
        document.getElementById("horario_igreja").style.display = "none";
        document.getElementById("horario_sistema_degraus").style.display = "none";
    } else if (filial.value == "BM_ENCOSTA_DO_SOL") {
        document.getElementById("horario_bm_encosta_sol").style.display = "block";
        document.getElementById("texto_cascatinha").style.display = "block";
        document.getElementById("horario_bm_cascatinha").style.display = "none";
        document.getElementById("horario_simao_pereira").style.display = "none";
        document.getElementById("horario_san_house").style.display = "none";
        document.getElementById("horario_igreja").style.display = "none";
        document.getElementById("horario_sistema_degraus").style.display = "none";
    } else if (filial.value == "SIMAO_PEREIRA") {
        document.getElementById("horario_simao_pereira").style.display = "block";
        document.getElementById("texto_cascatinha").style.display = "block";
        document.getElementById("horario_bm_cascatinha").style.display = "none";
        document.getElementById("horario_bm_encosta_sol").style.display = "none";
        document.getElementById("horario_san_house").style.display = "none";
        document.getElementById("horario_igreja").style.display = "none";
        document.getElementById("horario_sistema_degraus").style.display = "none";
    } else if (filial.value == "SDE") {
        document.getElementById("horario_sistema_degraus").style.display = "block";
        document.getElementById("texto_cascatinha").style.display = "block";
        document.getElementById("horario_bm_cascatinha").style.display = "none";
        document.getElementById("horario_bm_encosta_sol").style.display = "none";
        document.getElementById("horario_simao_pereira").style.display = "none";
        document.getElementById("horario_san_house").style.display = "none";
        document.getElementById("horario_igreja").style.display = "none";
    } else if (filial.value == "IEQ") {
        document.getElementById("horario_igreja").style.display = "block";
        document.getElementById("texto_cascatinha").style.display = "block";
        document.getElementById("horario_bm_cascatinha").style.display = "none";
        document.getElementById("horario_bm_encosta_sol").style.display = "none";
        document.getElementById("horario_simao_pereira").style.display = "none";
        document.getElementById("horario_san_house").style.display = "none";
        document.getElementById("horario_sistema_degraus").style.display = "none";
    } else if (filial.value == "SHJF") {
        document.getElementById("horario_san_house").style.display = "block";
        document.getElementById("texto_cascatinha").style.display = "block";
        document.getElementById("horario_bm_cascatinha").style.display = "none";
        document.getElementById("horario_bm_encosta_sol").style.display = "none";
        document.getElementById("horario_simao_pereira").style.display = "none";
        document.getElementById("horario_igreja").style.display = "none";
        document.getElementById("horario_sistema_degraus").style.display = "none";
    } else {
        document.getElementById("horario_bm_cascatinha").style.display = "none";
        document.getElementById("horario_bm_encosta_sol").style.display = "none";
        document.getElementById("horario_simao_pereira").style.display = "none";
        document.getElementById("horario_san_house").style.display = "none";
        document.getElementById("horario_igreja").style.display = "none";
        document.getElementById("horario_sistema_degraus").style.display = "none";
        document.getElementById("texto_cascatinha").style.display = "none";
    }
}

//###############################################################################################
function exibeMetodologias(metodologia) {
    if (metodologia.value == "jj_adulto") {
        document.querySelector('.metodologia_adulto').style.display = "block";
        document.querySelector('.metodologia_infantil').style.display = "none";

    } else if (metodologia.value == "jj_infantil") {
        document.querySelector('.metodologia_adulto').style.display = "none";
        document.querySelector('.metodologia_infantil').style.display = "block";
    } else {
        document.querySelector('.metodologia_adulto').style.display = "none";
        document.querySelector('.metodologia_infantil').style.display = "none";
    }
}