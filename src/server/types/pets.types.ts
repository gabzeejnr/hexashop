export type Pets = {
    name: string,
    age: number,
    gender: "male" | "female",
    adopted: boolean,
    breed: string,
    vaccinations?: string[],
    sizes: {
        weightInKg: number,
        width: number
    }
}