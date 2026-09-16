import type { Pets } from "../server/types/pets.types";

const randVaccinations: string[] = [
    "rabies", "lyme disease", "rattlesnake toxoid", "canine distemper", "leptospirosis",
    "canine influenza", "bordetella", "canine parvovirus", "canine adenovirus", "canine parainfluenza",
    "typhoid", "flu"
]

function getRandomVaccinations(): string[] {
    const vaccinations: string[] = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * randVaccinations.length) + 1;

        vaccinations.push(randVaccinations[randomIndex])
    }

    return vaccinations
}

export const pets: Pets[] = [
    {
        name: "Rocky",
        species: "dog",
        breed: "German Shepherd",
        age: 6,
        gender: "male",
        adopted: false,
        vaccinations: ["rabies"],
        sizes: {
            weightInKg: 56.8,
        }
    },
    {
        name: "Bobby",
        species: "dog",
        breed: "Colgish Welsh",
        age: 8,
        gender: "male",
        adopted: true,
        vaccinations: [],
        sizes: {
            weightInKg: 45.7,
        }
    },
    {
        name: "Donna",
        species: "dog",
        breed: "Belgian Shepherd",
        age: 4,
        gender: "female",
        adopted: false,
        vaccinations: ["malaria", "typhoid", "fever", "rabies", "Dont_mind_me😂"],
        sizes: {
            weightInKg: 57.2,
        }
    },
    {
        name: "Lucy",
        species: "dog",
        breed: "Labrador Retriever",
        age: 3,
        gender: "female",
        adopted: false,
        vaccinations: getRandomVaccinations(),
        sizes: {
            weightInKg: 53.5
        }
    },
    {
        name: "Rusty",
        species: "dog",
        breed: "Beagle",
        age: 8,
        gender: "male",
        adopted: false,
        vaccinations: getRandomVaccinations(),
        sizes: {
            weightInKg: 56.9
        }
    },
    {
        name: "Milo",
        species: "dog",
        breed: "Labrador Retriever",
        age: 15,
        gender: "male",
        adopted: true,
        vaccinations: getRandomVaccinations(),
        sizes: {
            weightInKg: 6.4
        }
    },
    {
        name: "Hazel",
        species: "dog",
        breed: "Border Collie",
        age: 5,
        gender: "female",
        adopted: false,
        vaccinations: getRandomVaccinations(),
        sizes: {
            weightInKg: 10.3
        }
    },
    {
        name: "Zeus",
        species: "dog",
        breed: "French Bulldog",
        age: 2,
        gender: "male",
        adopted: true,
        vaccinations: getRandomVaccinations(),
        sizes: {
            weightInKg: 11.3
        }
    },
    {
        name: "Bella",
        species: "dog",
        breed: "Siberian Husky",
        age: 12,
        gender: "female",
        adopted: true,
        vaccinations: getRandomVaccinations(),
        sizes: {
            weightInKg: 48.5
        }
    }
]