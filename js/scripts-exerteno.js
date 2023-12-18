function mostrarHorarios(filial) {
    if (filial.value == "BM_CASCATINHA") {
        document.getElementById("horario_bm_cascatinha").style.display = "block";
        document.getElementById("horario_bm_encosta_sol").style.display = "none";
    } else if (filial.value == "BM_ENCOSTA_DO_SOL") {
        document.getElementById("horario_bm_encosta_sol").style.display = "block";
        document.getElementById("horario_bm_cascatinha").style.display = "none";
    } else {
        document.getElementById("horario_bm_cascatinha").style.display = "none";
        document.getElementById("horario_bm_encosta_sol").style.display = "none";
    }
}