export async function getAnimals() {
    if (typeof window !== "undefined") {
        const res = await fetch("/data.json", { cache: "no-store" });
        if (!res.ok) {
            throw new Error("Failed to fetch animals data");
        }
        return res.json();
    }
    const fs = await import("node:fs/promises");
    const path = await import("node:path");
    const filePath = path.join(process.cwd(), "public", "data.json");
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw);
}

export async function getAnimalDetailsById(id) {
    const animals = await getAnimals();
    const animal = animals.find(
        (item) => item.id.toString() === id.toString()
    );
    return animal;
}

export async function getFeaturedAnimals() {
    const animals = await getAnimals();
    return animals.slice(0, 6);
}