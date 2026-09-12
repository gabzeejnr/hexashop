import type { Pets } from "../types/pets.types";


export const pets: Pets[] = [
    {
        name: "Rocky",
        age: 6,
        gender: "male",
        adopted: false,
        breed: "German Shepherd",
        vaccinations: ["rabies"],
        sizes: {
            weightInKg: 12,
            width: 30
        }
    },
    {
        name: "Bobby",
        age: 8,
        gender: "male",
        adopted: true,
        breed: "Colgish Welsh",
        vaccinations: [],
        sizes: {
            weightInKg: 15,
            width: 25
        }
    },
    {
        name: "Donna",
        age: 4,
        gender: "female",
        adopted: false,
        breed: "Belgian Shepherd",
        vaccinations: ["malaria", "typhoid", "fever", "rabies", "Dont_mind_me😂"],
        sizes: {
            weightInKg: 8,
            width: 10
        }
    }
]