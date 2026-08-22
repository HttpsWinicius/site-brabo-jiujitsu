// Monta um link wa.me com mensagem pré-preenchida e URL-encoded.
export function linkWhatsapp(numero, mensagem) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}
