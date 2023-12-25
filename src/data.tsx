

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

const klassenData: { name: string, klasse: string, icon: string }[] = [
    
    {
        name: "PKW",
        klasse: "Fahrerlaubnisklasse: B, BE, B96, B197",
        icon: "https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/PKW.png"
    },
    {
        name: "BUS",
        klasse: "Fahrerlaubnisklasse: D1, D1E, D, DE",
        icon: "https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/bus.png"
    },
    {
        name: "LKW",
        klasse: "Fahrerlaubnisklasse: C1, C1E, C, CE",
        icon: "https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/LKW.png"
    },  
    {
        name: "TRAKTOR",
        klasse: "Fahrerlaubnisklasse: T, L",
        icon: "https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/trecker.png"
    },
    {
        name: "KRAFTRAD",
        klasse: "Fahrerlaubnisklasse: AM, A1, A2, A",
        icon: "https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/motorbike.png"
    },


]

export { personalData, klassenData };
    