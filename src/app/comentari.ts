export class Comentari {
    id: number;
    nom_recepta: String;
    starts: number;
    description: String;
    date: String;
}

export const COMENTARI: Comentari [] = [{id:1, nom_recepta:"Almendras",starts: 1,description:"Haha",date:"15/03/2020"},
                                    {id:2, nom_recepta:"Estofat rebossat",starts: 3,description:"Hehe",date:"17/10/2020"},
                                    {id:2, nom_recepta:"Pastís de poma",starts: 5,description:"Hihi",date:"31/12/2020"}];
