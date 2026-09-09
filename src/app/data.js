import womens from "../assets/images/womens-bg.jpg";
import mens from "../assets/images/mens-bg.jpg";
import kids from "../assets/images/kids-bg.jpg";
import accessories from "../assets/images/accessries-bg.jpg";
import error from "../assets/images/error/error-bg.jpg";
import error2 from "../assets/images/error/images (2).png"


const i_m = [
    {
        t: "Women",
        s: "Best Clothes from Women",
        i: womens,
        te: "Something about women... Women are devils, they are scorpions, women, they are vampires.😂"
    },
    {
        t: "Men",
        s: "Best Clothes from Men",
        i: mens,
        te: "Something about men... God when will I grow up?",
    },
    {
        t: "Kids",
        s: "Best Clothes from Kids",
        i: kids,
        te: "Something about kids... Should I give birth next year?🤔 But I'll just be 20 by then",
    },
    {
        t: "Accessories",
        s: "Best Trend Accessories",
        i: accessories,
        te: "Something accessoring... Ok, that was nonsense.",
    }
];

const imageSlides = [womens, mens, kids, accessories, error, error2]

export { i_m, imageSlides }