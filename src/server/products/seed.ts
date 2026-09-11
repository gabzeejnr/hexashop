export interface Seed {
    name: string,
    description: string,
    category: string[],
    price: number,
    image: string[]
}

// name: "Just the name of the product... No put full stop",
// description: "Short text about the product, if na shoe, just say something like Breathable mesh shoes, designed for all purposes...",
// category: ["If e many just separate them with comma."],
// price: Na number just type am as number, no put "",
// image: Na array sef, just the link to the images

/* {
    name: ".............",
    description: "............",
    category: ["....", ".......", "....."],
    price: 100000,
    image: [
        "....",
        "...........",
        "......"
    ]
} */

export const seed: Seed[] = [
    {
        name: "Just the name of the product... No put full stop",
        description: "Short text about the product, if na shoe, just say something like Breathable mesh shoes, designed for all purposes...",
        category: ["shoes", "mens", "mens-wear", "all-purpose"],
        price: 17500,
        image: [
            "https://www.fisfjkhbnfj.com/dsf/iimage",
            "https://jhwrbfuiwfb.com/image"
        ]
    }
]

seed.forEach(function(s){
    const {name, description} = s
})