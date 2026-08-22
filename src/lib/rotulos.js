export const NOMES_DIA = {
  seg: "Segunda-feira",
  ter: "Terça-feira",
  qua: "Quarta-feira",
  qui: "Quinta-feira",
  sex: "Sexta-feira",
  sab: "Sábado",
  dom: "Domingo",
};

export const NOMES_MODALIDADE = {
  "jiu-jitsu-adulto": "Jiu-Jitsu Adulto",
  "jiu-jitsu-infantil": "Jiu-Jitsu Infantil",
  "jiu-jitsu-feminino": "Jiu-Jitsu Feminino",
};

export function formatarDias(dias) {
  return dias.map((d) => NOMES_DIA[d] ?? d).join(", ");
}

// Palavra-chave local de uma unidade: bairro quando é em Juiz de Fora, cidade quando não é.
export function alvoLocalDe(unidade) {
  return unidade.cidade === "Juiz de Fora" ? unidade.bairro : unidade.cidade;
}
