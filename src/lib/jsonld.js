const DIA_SCHEMA = {
  seg: "https://schema.org/Monday",
  ter: "https://schema.org/Tuesday",
  qua: "https://schema.org/Wednesday",
  qui: "https://schema.org/Thursday",
  sex: "https://schema.org/Friday",
  sab: "https://schema.org/Saturday",
  dom: "https://schema.org/Sunday",
};

export function schemaOrganization(site) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.nome,
    url: site.urlCanonica,
    logo: `${site.urlCanonica}/assets/img/logo-brabo-menu.png`,
    foundingDate: String(site.fundacao.anoInicio),
    sameAs: [site.redesSociais.instagram, site.redesSociais.facebook, site.redesSociais.youtube],
  };
}

// horarioUnidade: entrada de horarios.json para essa unidade (pode ser undefined).
// Só gera openingHoursSpecification quando a turma tem hora de início E de fim
// confirmadas — não inventamos hora de encerramento que a Brabo não passou.
export function schemaSportsActivityLocation(unidade, site, horarioUnidade) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: `Brabo Jiu-Jitsu — ${unidade.nome}`,
    url: `${site.urlCanonica}/unidades/${unidade.slug}/`,
    telephone: unidade.telefone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${unidade.endereco}, ${unidade.bairro}`,
      addressLocality: unidade.cidade,
      addressRegion: unidade.uf,
      addressCountry: "BR",
      ...(unidade.cep ? { postalCode: unidade.cep } : {}),
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: unidade.geo.lat,
      longitude: unidade.geo.lng,
    },
    parentOrganization: {
      "@type": "Organization",
      name: site.nome,
      url: site.urlCanonica,
    },
  };

  if (unidade.emblema) {
    schema.image = `${site.urlCanonica}${unidade.emblema}`;
  }

  const turmasComHorarioCompleto = horarioUnidade?.turmas?.filter((t) => t.inicio && t.fim) ?? [];
  if (turmasComHorarioCompleto.length > 0) {
    schema.openingHoursSpecification = turmasComHorarioCompleto.map((t) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: t.dias.map((d) => DIA_SCHEMA[d]).filter(Boolean),
      opens: t.inicio,
      closes: t.fim,
    }));
  }

  return schema;
}

export function schemaFaqPage(itens) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: itens.map((i) => ({
      "@type": "Question",
      name: i.pergunta,
      acceptedAnswer: { "@type": "Answer", text: i.resposta },
    })),
  };
}

// itens: [{ nome, url }] em ordem, do topo até a página atual.
export function schemaBreadcrumb(itens) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itens.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.nome,
      item: item.url,
    })),
  };
}
