import type { ReactNode } from "react";

export default function CategorySection(
    {
        category,
        children
    }: {
        category: string,
        children: ReactNode
    }
) {

    const i: number = category.indexOf("-");
    let cat: string;
    if (i !== -1) {
        const f: string = category.charAt(i + 1);
        cat = category.charAt(0)
            .toUpperCase()
            + category.replace(f, f.toUpperCase())
                .slice(1);
    } else {
        const o: string = category.charAt(0).toUpperCase() + category.slice(1);
        cat = o
    }

    return (
        <section>
            <div className="flex justify-between mb-10">
                <span className="text-xl">{cat}</span>
            </div>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{children}</div>
        </section>
    )
}