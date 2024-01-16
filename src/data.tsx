  export interface PersonalData {
    name: string;
    profil: string;
    title: string;
    description: string;
    email: string;
    phone: string;
  }
  [];
  
  export interface KlasseData {
    name: string;
    description: { typ: string, description: string }[];
    voraussetzungen?: string;
    befristung?: string;
    vorbesitz?: string;
    erwerb?: string;
    mindestalter: string;
    einschluss: string;
  }

  export type Klasse = {
    name: string,
    klasse: string,
    icon: string,
    details: KlasseData[]
  }[]
  
  const personalData: PersonalData[] = [
    {
      name: "Andreas Walk",
      profil:
        "https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/andy.jpg",
      title: "Fahrlehrer aller Klassen",
      description:
        "Fahrlehrer seit 1989, ausgebildete Fahrschüler mehr als 2000.",
      email: "info@a-walk.de",
      phone: "0171/1261672"
    },
    {
      name: "Tim Behnke",
      title: "Fahrlehrer aller Klassen",
      description:
        "Fahrlehrer seit 2000, ausgebildete Fahrschüler mehr als 1500.",
      profil:
        "https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/tim.jpg",
      email: "info@a-walk.de",
      phone: "0172/4558297"
    },
    {
      name: "Jochen Bavon",
      profil:
        "https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/lehrer.jpg",
      title: "Fahrlehrer",
      description: "",
      email: "",
      phone: "04361/494108"
    }
  ];
  
  const klassenData: Klasse = [
    {
      name: "PKW",
      klasse: "Fahrerlaubnisklasse: B, BE, B96, B197",
      icon:
        "https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/PKW.png",
      details: [
        {
          name: "B, B197 - Fahrerlaubnis der Kl. B mit Schlüssel 196",
          description: [
            {
              typ: "Kraftfahrzeuge",
              description:
                "- außer Kraftfahrzeugen der Klassen AM, A1, A2 und A - bis 3500 kg zGM, die zur Beförderung von nicht mehr als 8 Personen außer dem Fahrzeugführer ausgelegt und gebaut sind. "
            },
            {
              typ: "Anhänger",
              description:
                "bis 750 kg zGM bzw. Anhänger über 750 kg zGM, sofern die zGM der Kombination 3500 kg nicht übersteigt."
            }
          ],
          erwerb: "B",
          mindestalter: "18 Jahre / 17 Jahre bei begleitetem Fahren",
          einschluss: "AM, L"
        },
        {
          name: "B96 - Fahrerlaubnis der Kl. B mit Schlüssel 96",
          description: [
            {
              typ: "Fahrzeugkombinationen",
              description:
                "die aus einem Zugfahrzeug der Klasse B und einem Anhänger über 750 kg zGM bestehen, sofern die zGM der Kombination 3500 kg überschreitet, aber 4250 kg nicht übersteigt. "
            },
            {
              typ: "Spezielle Schulung",
              description: "in der Fahrschule erforderlich"
            }
          ],
          erwerb: "B",
          mindestalter: "18 Jahre / 17 Jahre bei begleitetem Fahren",
          einschluss: "keine"
        },
        {
          name: "BE",
          description: [
            {
              typ: "Fahrzeugkombinationen",
              description:
                "die aus einem Zugfahrzeug der Klasse B und einem Anhänger bzw. Sattelanhänger bestehen, sofern die zGM des Anhängers bzw. Sattelanhängers 3500 kg nicht Übersteigt. "
            },
            {
              typ: "Anhänger",
              description:
                "bis 750 kg zGM bzw. Anhänger über 750 kg zGM, sofern die zGM der Kombination 3500 kg nicht übersteigt. "
            }
          ],
          erwerb: "B",
          mindestalter: "18 Jahre",
          einschluss: "keine"
        }
      ]
    },
    {
      name: "BUS",
      klasse: "Fahrerlaubnisklasse: D1, D1E, D, DE",
      icon:
        "https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/bus.png",
      details: [
        {
          name: "D1",
          description: [
            {
              typ: "Kraftfahrzeuge",
              description:
                "- außer Kraftfahrzeugen der Klassen AM, A1, A2, A - die zur Beförderung von mehr als 8 Personen aber nicht mehr als 16 Personen außer dem Fahrzeugführer ausgelegt und gebaut sind, Länge nicht mehr als 8 m. "
            }
          ],
          voraussetzungen: "ärztliches Gutachten",
          befristung: "5 Jahre, danach alle 5 Jahre erneute ärztliche Untersuchung. Ab dem 50. Lebensjahres ist ein erneutes ärztliche Gutachten erforderlich. ",
          vorbesitz: "B",
          mindestalter: "21 Jahre / 18 Jahre (unter bestimmten Voraussetzungen, siehe Anmerkung 1)",
          einschluss: "keine"
        },
        {
          name: "D1E",
          description: [
            {
              typ: "Fahrzeugkombinationen",
              description:
                "aus Zugfahrzeug der Kl. D1 und einem Anhänger über 750 kg zGM. "
            },
            {
              typ: "Spezielle Schulung",
              description: "in der Fahrschule erforderlich."
            }
          ],
          voraussetzungen: "ärztliches Gutachten",
          befristung: "5 Jahre, danach alle 5 Jahre erneute ärztliche Untersuchung. Ab dem 50. Lebensjahres ist ein erneutes ärztliche Gutachten erforderlich. ",
          vorbesitz: "D1",
          mindestalter: "21 Jahre / 18 Jahre (unter bestimmten Voraussetzungen, siehe Anmerkung 1)",
          einschluss: "BE, und C1E bei Vorbesitz von C1"
        },
        {
          name: "D",
          description: [
            {
              typ: "Kraftfahrzeuge",
              description:
                "- außer Kraftfahrzeugen der Klassen AM, A1, A2, A - die zur Beförderung von mehr als 8 Personen außer dem Fahrzeugführer ausgelegt und gebaut sind. "
            },
            {
              typ: "Anhänger",
              description:
                "bis zu 750 kg zGM."
            }
          ],
          voraussetzungen: "ärztliches Gutachten",
          befristung: "5 Jahre, danach alle 5 Jahre erneute ärztliche Untersuchung. Ab dem 50. Lebensjahres ist ein erneutes ärztliche Gutachten erforderlich.",
          vorbesitz: "B",
          mindestalter: "24 Jahre / 23, 21, 20, 18 Jahre (unter bestimmten Voraussetzungen, siehe Anmerkung 3)",
          einschluss: "D1"
        },
        {
            name: "DE",
            description: [
              {
                typ: "Fahrzeugkombinationen",
                description:
                  "aus Zugfahrzeug der Kl. D und einem Anhänger über 750 kg zGM. "
              }
            ],
            voraussetzungen: "ärztliches Gutachten",
            befristung: "5 Jahre, danach alle 5 Jahre erneute ärztliche Untersuchung. Ab dem 50. Lebensjahres ist ein erneutes ärztliche Gutachten erforderlich.",
            vorbesitz: "D",
            mindestalter: "24 Jahre / 23, 21, 20, 18 Jahre (unter bestimmten Voraussetzungen, siehe Anmerkung 3)",
            einschluss: "BE, D1E sowie C1E sofern C1 bereits im Vorbesitz. "
          }
      ]
    },
    {
      name: "LKW",
      klasse: "Fahrerlaubnisklasse: C1, C1E, C, CE",
      icon:
        "https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/LKW.png",
      details: [
        {
          name: "C1",
          description: [
            {
              typ: "Kraftfahrzeuge",
              description:
                "- außer Kraftfahrzeugen der Klassen AM, A1, A2, A - mit mehr als 3500 kg zGM aber nicht mehr als 7500 kg zGM, die zur Beförderung von nicht mehr als 8 Personen außer dem Fahrzeugführer ausgelegt und gebaut sind. "
            },
            {
              typ: "Anhänger",
              description:
                "bis 750 kg zGM bzw. "
            }
          ],
          vorbesitz: "B",
          mindestalter: "18 Jahre",
          einschluss: "keine"
        },
        {
            name: "C1E",
            description: [
              {
                typ: "Fahrzeugkombinationen",
                description:
                  "aus Zugfahrzeug der Kl. C1 und Anhänger oder Sattelanhänger über 750 kg zGM, sofern die zGM der Kombination 12000 kg nicht übersteigt. "
              }
            ],
            befristung: "bis zur Vollendung des 50. Lebensjahres, danach alle 5 Jahre erneute ärztliche Untersuchung. ",
            vorbesitz: "C1",
            mindestalter: "18 Jahre",
            einschluss: "BE sowie D1E, sofern D1 vorhanden"
          },
          {
            name: "C",
            description: [
              {
                typ: "Kraftfahrzeuge",
                description:
                  "- außer Kraftfahrzeugen der Klassen AM, A1, A2 , A - mit mehr als 3500 kg zGM, die zur Beförderung von nicht mehr als 8 Personen außer dem Fahrzeugführer ausgelegt und gebaut sind. "
              },
              {
                typ: "Anhänger",
                description:
                  "bis 750 kg zGM bzw. "
              }
            ],
            befristung: "auf 5 Jahre, danach alle 5 Jahre neue ärztliche Untersuchung. ",
            vorbesitz: "B",
            mindestalter: "21 Jahre / 18 Jahre (unter bestimmten Voraussetzungen, siehe Anmerkung 1)",
            einschluss: "C1"
          },
          {
            name: "CE",
            description: [
              {
                typ: "Fahrzeugkombinationen",
                description:
                  "aus Zugfahrzeug der Kl. C und Anhänger oder Sattelanhänger über 750 kg zGM. "
              }
            ],
            vorbesitz: "C1",
            mindestalter: "21 Jahre / 18 Jahre (unter bestimmten Voraussetzungen, siehe Anmerkung 1)",
            einschluss: "BE, C1E, T sowie D1E (bei Vorbesitz D1) und DE (bei Vorbesitz D)."
          },
      ]
    },
    {
      name: "TRAKTOR",
      klasse: "Fahrerlaubnisklasse: L, T",
      icon:
        "https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/trecker.png",
      details: [
        {
          name: "L",
          description: [
            {
              typ: "Zugmaschinen",
              description:
                "die nach ihrer Bauart für land- oder forstwirtschaftliche Zwecke bestimmt sind, mit einer bbH bis zu 40 km/h und Kombinationen aus diesen Fahrzeugen und Anhängern  bis 25 km/h. "
            },
            {
              typ: "Selbstfahrende Arbeitsmaschinen oder selbstfahrende Futtermischwagen, Stapler und andere Flurförderfahrzeuge. ",
              description:
                "jeweils bis 25 km/h bbH und Kombinationen aus diesen Fahrzeugen und Anhängern."
            }
          ],
          erwerb: "direkt",
          mindestalter: "16 Jahre",
          einschluss: "keine"
        },
        {
          name: "T",
          description: [
            {
              typ: "Zugmaschinen und selbstfahrende Arbeitsmaschinen",
              description:
                "die nach ihrer Bauart für land- oder forstwirtschaftliche Zwecke bestimmt sind. "
            },
            {
              typ: "Bauartbestimmte Höchstgeschwindigkeit",
              description:
                "die nach ihrer Bauart für land- oder forstwirtschaftliche Zwecke bestimmt sind. Ab 18 Jahren bis 60 km/h für Zugmaschinen sowie bis 40 km/h für selbstfahrende Arbeitsmaschinen oder selbstfahrende Futtermischwagen (jeweils auch mit Anhängern). "
            }
          ],
          erwerb: "direkt",
          mindestalter: "16 Jahre",
          einschluss: "L"
        }
      ]
    },
    {
      name: "KRAFTRAD",
      klasse: "Fahrerlaubnisklasse: MOFA, AM, A1, A2, A",
      icon:
        "https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/motorbike.png",
      details: [
        {
          name: "MOFA",
          description: [
            {
              typ: "Mofa 25 und Segway",
              description:
                "Mofafahrer (Fahrräder mit Hilfsmotor bis 25 km/h bbH) und Segway-Fahrer (zweirädrige Elektroroller) benötigen eine Prüfbescheinigung. Jede Fahrerlaubnis ersetzt die Prüfbescheinigung. "          
            }
          ],
          erwerb: "direkt",
          befristung: "Befristung auf 5 Jahre, danach alle 5 Jahre erneute ärztliche Untersuchung. Ab dem 50. Lebensjahr ist ein erneutes ärztliches Gutachten erforderlich. ",
          mindestalter: "15 Jahre",
          einschluss: "keine"
        },
        {
            name: "AM",
            description: [
              {
                typ: "Zweirädrige Kleinkrafträder (auch mit Beiwagen) und Fahrräder mit Hilfsmotor",
                description:
                  "Max. 50 ccm Hubraum (Verbrennungsmotor) bzw. Max. 4kW Nenndauerleistung (Elektromotor)"         
              },
              {
                typ: "Dreirädrige Kleinkrafträder bzw. vierrädrige Leichtkraftfahrzeuge",
                description:
                  "bis 45 km/h bbH. Bei Fremdzündungsmotoren (z.B. Ottomotor) max. 50 ccm Hubraum; bei anderen Verbrennungsmotoren (z.B. Dieselmotoren) max. 4 kW Nutzleistung; bei Elekromotoren max. 4 kW Nenndauerleistung. Vierrädige Leichtkraftfahrzeuge nur bis 350 kg Leermasse (bei Elektrofahrzeugen ohne die Masse der Batterien). "
              }
            ],
            erwerb: "direkt",
            mindestalter: "15 Jahre",
            einschluss: "keine"
          },
          {
            name: "A1",
            description: [
              {
                typ: "Krafträder",
                description:
                  "(auch mit Beiwagen) mit bis zu 125 ccm Hubraum und max. 11 kW Motorleistung, bei denen das Verhältnis der Leistung zum Gewicht 0,1 kW/kg nicht übersteigt. "              
              },
              {
                typ: "Dreirädrige Kraftfahrzeuge",
                description:
                  "mit symmetrisch angeordneten Rädern und einem Hubraum von mehr als 50 ccm bei Verbrennungsmotoren oder mehr als 45 km/h bbH und mit einer max. Motorleistung bis zu 15 kW. "
              }
            ],
            erwerb: "direkt",
            mindestalter: "16 Jahre",
            einschluss: "AM"
          },
          {
            name: "A2",
            description: [
              {
                typ: "Krafträder",
                description:
                  "(auch mit Beiwagen) mit einer Motorleistung von nicht mehr als 35 kW, bei denen das Verhältnis der Leistung zum Gewicht 0,2 kW/kg nicht übersteigt. "            
              },
              {
                typ: " ",
                description:
                  "Bei zweijährigem Vorbesitz der Klasse A1 ist zum Erwerb nur eine praktische Prüfung erforderlich. "
              }
            ],
            erwerb: "direkt",
            mindestalter: "18 Jahre",
            einschluss: "AM, A1"
          },
          {
            name: "A",
            description: [
              {
                typ: "Krafträder",
                description:
                  "Krafträder (auch mit Beiwagen) mit einem Hubraum von mehr als 50 ccm oder mit einer bbH von mehr als 45 km/h. "        
              },
              {
                typ: "Dreirädrige Kraftfahrzeuge",
                description:
                  "mit symmetrisch angeordneten Rädern und einem Hubraum von mehr als 50 ccm bei Verbrennungsmotoren oder einer bbH von mehr als 45 km/h und mit einer Motorleistung über 15 kW. "
              }
            ],
            erwerb: "direkt",
            mindestalter: "24 Jahre für Krafträder bei Direkteinstie; 20 Jahre für Krafträder bei zweijährigem Vorbesitz der Klasse A2; 21 Jahre für dreirädrige Kfz mit mehr als 15 kW; 20 Jahre für Krafträder bei zweijährigem Vorbesitz der Klasse A2, nur praktische Prüfung erforderlich. ",
            einschluss: "AM, A1, A2"
          },
      ],

    }
  ];
  
  export { personalData, klassenData };
  