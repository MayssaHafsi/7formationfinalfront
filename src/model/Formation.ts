
import { Domaine } from "./Domaine";

import { Formateur } from "./Formateur";
import { Theme } from "./Theme";





export  class Formation {
    public  id: number;
    public nom: string ;
    public  description:string;
    public duree:string;
    public objectifun:string;
    public objectifd:string;
    public objectift:string;
    public objectifm:string;
    public cibleun:string;
    public cibled:string;

  public  datedebut:Date;
  public datefin:Date ;
  public capacite:number ; 
  public  nbrPlaceReserve :number ; 
  public dateLimiteInscription:Date ; 
  public niveau:string ; 
  public domaine:Domaine ;
  public theme:Theme ; 
  public formateur:Formateur;
  public type:string;
  public cat:string;
  public prix:string;
  //public formateurs:Formateur[] ; 
  

  
  
  }