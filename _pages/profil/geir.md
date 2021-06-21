---
layout: profil
title: Geir
permalink: /profil/geir
---

import ProfileComponent from "@/components/ProfileComponent.vue";
export default {
  name: "GeirProfile",
  data() {
    return {
      introDescription: ["Lærer i nøkkelkompetanse"],
      location: "Stavern",
      links: null,
      disc: ["Geir#4082"],
      contacts: ["geir@getacademy.no", "92621638"],
      books: null,
      description: [
        "Geir er utdannet allmennlærer fra Eik lærerhøyskole og har en videreutdanning i trening av sosial kompetanse fra Diakonhjemmet Høgskole Rogaland.",
        "Han har jobbet som lærer i grunnskole og voksenopplæring, kursholder samt veileder i arbeid med læringsmiljø i grunnskolen.",
      ],
      pointHeader: "Geir brenner også for: ",
      points: [
        "Å gi folk mulighet til å bidra i fellesskapet",
        "At enkeltmennesker skal føle seg sett",
      ],
    };
  },