import { Url } from "url";

export interface Chien {
    id: number;
    nom: string;
    race: string;
    age: string;
    description: string;
    prix: string;
    img:string
  }
  export const CHIENS: Chien[] = [
    {
      id: 1,
      nom: "Rex",
      race: "Berger Allemand",
      age: "2 ans",
      description: "Rex est un chien adorable et bien élevé...",
      prix: "$500",
      img:"assets/Berger1.jpeg"
    },
    {
      id: 2,
      nom: "Paul",
      race: "Boerbool",
      age: "1 ans",
      description: "Paul est un chien adorable et bien élevé...",
      prix: "$500",
      img:"assets/boerbool1.jpeg"
    },
    {
      id: 3,
      nom: "Rock",
      race: "Malinois",
      age: "2ans",
      description: "Paul est un chien adorable et bien élevé...",
      prix: "$500",
      img:"assets/Malionois1.jpeg"
    },
    {
      id: 4,
      nom: "Tusi",
      race: "Rottwailer",
      age: "2ans",
      description: "Paul est un chien adorable et bien élevé...",
      prix: "$500",
      img:"assets/Rottwailer1.jpeg"
    },
    
  ];