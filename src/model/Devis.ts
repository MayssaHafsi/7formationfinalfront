
import { Demandeur } from "./Demandeur";
import { Formation } from "./Formation";
export class Devis{
public id:number; 
public formationRecherche:Formation ; 
public nb_participants:number; 
public demandeur:Demandeur;
public etat:string ='';
public entreprise:string ='';



}

