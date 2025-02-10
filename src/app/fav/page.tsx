import { Footer } from "@/sections/Footer";

export default function FavPage() {
    const items = [
        "Minecraft",
        "Minecraft Dungeons",
        "Assassin's Creed Franchise",
        "Far Cry 5",
        "Far Cry 6",
        "Red Dead Redemption 2",
        "Death Stranding",
        "Elden Ring",
        "L.A Noire",
        "Max Payne 3",
        "Just Cause Franchise",
        "FIFA Franchise",
        "Pro Evolution Soccer Franchise",
        "Cyberpunk 2077",
        "Detroit: Become Human",
        "Hogwarts Legacy",
        "Watch Dogs 2",
        "Watch Dogs: Legion",
        "Manor Lords",
        "Mafia Franchise",
        "Saints Row 3",
        "Uncharted 4: A Thief's End",
        "Tomb Raider Franchise",
        "Cities Skylines 2",
        "Ghost of Tsushima",
        "Microsoft Flight Simulator 2020",
        "Anno 1800",
        "God of War",
        "Need for Speed: Most Wanted",
        "Hitman Franchise",
        "Grand Theft Auto Franchise",
        "Big Ambitions",
        "Europa Universalis IV",
        "Police Simulator: Patrol Officers",
        "Euro Truck Simulator 2",
        "The Storage Hunter Simulator",
      ];

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow container">
                <h1 className="font-serif text-center text-3xl py-4"><span className="text-rose-600 font-cinzel">Sameerion</span><span className="text-base text-purple-600 font-cinzel">.com</span></h1>
                <h2 className="font-semibold text-center pt-4 pb-8 md:pt-8 md:pb-16 text-lg md:text-xl text-gradient font-cinzel">A Collection of My Gaming Moments</h2>
                <div>
                    <ul className="mx-10 md:mx-40 mb-20 md:mb-40 list-disc">
                        {items.map((item, index) => (
                            <li key={index} className="text-base md:text-lg lg:text-xl font-semibold">{item}</li>
                        ))}
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
}
