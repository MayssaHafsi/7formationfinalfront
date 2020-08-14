import { Demandeur } from "./Demandeur";

export class Proposition{
public id:number; 
public dateProposition:Date ; 
public demandeur:Demandeur;
public etat:string ='';
public description:string ='';
public entreprise :string;
public type:string ;



}