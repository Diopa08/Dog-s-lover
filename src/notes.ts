import { Url } from "url";

export interface Note {
    id: number;
    nom: string;
    race: string;
    age: string;
    description: string;
    prix: string;
    img:string
  }
  export const NOTES: Note[] = [
    {
      id: 1,
      nom: "Rex",
      race: "Labrador Retriever",
      age: "2 ans",
      description: "Rex est un chien adorable et bien élevé...",
      prix: "$500",
      img:"assets/blog-1.jpg"
    },
    {
      id: 2,
      nom: "Paul",
      race: "berger allemand",
      age: "1 ans",
      description: "Paul est un chien adorable et bien élevé...",
      prix: "$500",
      img:"assets/blog-2.jpg"
    },
    {
      id: 3,
      nom: "Paul",
      race: "berger allemand",
      age: "2ans",
      description: "Paul est un chien adorable et bien élevé...",
      prix: "$500",
      img:"assets/blog-3.jpg"
    },
    
  ];