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
    <div className="flex min-h-screen flex-col">
      <main className="container flex-grow">
        <h1 className="py-4 text-center font-serif text-3xl">
          <span className="font-cinzel text-rose-600">Sameerion</span>
          <span className="font-cinzel text-base text-purple-600">.com</span>
        </h1>
        <h2 className="text-gradient pb-8 pt-4 text-center text-lg font-semibold font-cinzel md:pb-16 md:pt-8 md:text-xl">
          Games and strategy titles that shape how I think about systems
        </h2>
        <div>
          <ul className="mx-10 mb-20 list-disc md:mx-40 md:mb-40">
            {items.map((item, index) => (
              <li key={index} className="text-base font-semibold md:text-lg lg:text-xl">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
