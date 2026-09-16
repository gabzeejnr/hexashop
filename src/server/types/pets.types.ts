type Sizes = {
    weightInKg: number
}

export type Pets = {
    name: string,
    age: number,
    gender: "male" | "female",
    adopted: boolean,
    species: string,
    breed: string,
    vaccinations?: string[],
    sizes: Sizes
}