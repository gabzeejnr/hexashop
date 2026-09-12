import { pets } from "../data/pets";
import type { Pets } from "../types/pets.types";

export async function getPets() {
    return { pets }
}

