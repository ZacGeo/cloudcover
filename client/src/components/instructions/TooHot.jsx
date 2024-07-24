export default function Hot() {
  return (
    <div
      style={{
        background:
          "radial-gradient(178.94% 106.41% at 26.42% 106.41%, #FFF7B1 0%, rgba(255, 255, 255, 0) 71.88%), #FFFFFF",
      }}
      className=" flex rounded-xl shadow-md overflow-hidden md:max-w-2xl h-full"
    >
      <div className="p-8 flex flex-col">
        <ul className="list-disc space-y-2">
          <li className="text-sm text-yellow-950 font-sans font-bold">
            Avoid strenuous activities, especially during the hottest part of
            the day.
          </li>
          <li className="text-sm text-yellow-950 font-sans font-bold">
            If you need to be outside, take frequent breaks in the shade or
            indoors and wear lightweight, light-colored, and loose-fitting
            clothing.
          </li>
          <li className="text-sm text-yellow-950 font-sans font-bold">
            Wear a wide-brimmed hat, sunglasses, and sunscreen with a high SPF.
          </li>
          <li className="text-sm text-yellow-950 font-sans font-bold">
            Be aware of symptoms of heat exhaustion (heavy sweating, weakness,
            cold, pale and clammy skin, fast and weak pulse, nausea, or
            fainting) and heat stroke (high body temperature, hot, red, dry or
            moist skin, rapid and strong pulse, confusion, or unconsciousness).
          </li>
          <li className="text-sm text-yellow-950 font-sans font-bold">
            Drink plenty of water throughout the day. Aim for at least 8-10
            glasses.
          </li>
          <li className="text-sm text-yellow-950 font-sans font-bold">
            Avoid alcohol, caffeine, and sugary drinks as they can dehydrate
            you.
          </li>
        </ul>
        <div className="mt-4 relative h-28">
          <span className="sun sunshine"></span>
          <span className="sun"></span>
          <span className="absolute right-0 pr-6 font-bold text-7xl leading-none text-[rgba(87,77,51,1)]">30°</span>
        </div>
        
      </div>
    </div>
  );
}
