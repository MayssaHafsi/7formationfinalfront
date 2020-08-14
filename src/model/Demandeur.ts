
import { InscriptionFormation } from "./InscriptionFormation";

export class Demandeur{
public id:number;
public cin:string='' ; 
public nom:string='' ; 
public prenom:string='' ; 
public email:string ='';
public password:string ='';
public sexe:string ='';
public adresse:string ='';

public numeroTelephone:string='' ;
public inscriptionsFormation:InscriptionFormation[] ;

}