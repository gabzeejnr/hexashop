import { getPets } from "../../../server/pets/pets";

export async function GET() {
    const pets = await getPets();
    return Response.json(pets)
}