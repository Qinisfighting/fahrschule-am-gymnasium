

interface PersonalData {
    name: string;
    profil:string;
    title: string;
    email: string;
    phone: string;
}[]

const personalData: PersonalData[] = [
    {
        name: "Andreas Walk",
        profil:"https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/andy.jpg",
        title: "Fahrlehrer",
        email: "info@a-walk.de",
        phone: "0171/1261672",
    },
    {
        name: "Tim Behnke",
        title: "Fahrlehrer",
        profil:"https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/tim.jpg",
        email: "info@a-walk.de",
        phone: "0171/1261672",
    },
    {
        name: "Lehrer 3",
        profil:"https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/lehrer.jpg",
        title: "Fahrlehrer",
        email: "info@a-walk.de",
        phone: "0171/1261672",
    }
   
];

const leistungenData: { name: string, kenngrößen: string[] }[] = [
    
    {
        name: "Fahrerlaubnisklasse A",
        kenngrößen: [
            "Krafträder (auch mit Beiwagen) mit einem Hubraum von mehr als 50cm3",
            "Einer bauartbedingten Höchstgeschwindkeit von mehr als 45km/h",
            "Motorleistung mehr als 35kW bzw. 48PS",
            "Leistungsgewicht mehr als 0,2kW/kg",
        ]   
    },
    {
        name: "Fahrerlaubnisklasse A1",
        kenngrößen: [
            "Krafträder mit einem Hubraum nicht mehr als 125cm3",
            "Motorleistung nicht mehr als 11kW / 15PS",
            "Leistungsgewicht nicht mehr als 0,1kW/kg",
        ]   
    },
    {
        name: "Fahrerlaubnisklasse A2",
        kenngrößen: [
            "Krafträder mit einem Hubraum von mehr als 50cm3",
            "Einer bauartbedingten Höchstgeschwindigkeit von mehr als 45km/h",
            "Motorleistung nicht mehr als 35kW bzw. 48PS",
            "Leistungsgewicht nicht mehr als 0,2kW/kg",
        ]   
    },
    {
        name: "Fahrerlaubnisklasse B",
        kenngrößen: [
            "Kraftfahrzeuge bis einer zulässigen Gesamtmasse von max. 3500 kg",
            "Beförderung von max. 8 Personen zuzüglich Fahrer",
        ]   
    },
    {
        name: "Schlüsselzahl B196",
        kenngrößen: [
            "Krafträder mit einem Hubraum nicht mehr als 125cm3",
            "Motorleistung nicht mehr als 11kW / 15PS",
            "Leistungsgewicht nicht mehr als 0,1kW/kg",
            "Achtung: B196 ist nur in Deutschland gültig!",
        ]   
    },


]

export {personalData, leistungenData};
    