import Moon from "../../assets/MoonH.png";

export  function Hot() {
  return (
    <div
      style={{
        background:
          "radial-gradient(178.94% 106.41% at 26.42% 106.41%, #97d8e2 0%, rgba(255, 255, 255, 0) 71.88%), #FFFFFF",
      }}
      className=" flex rounded-xl shadow-md overflow-hidden md:max-w-2xl h-full mt-5"
    >
      <div className="p-8 flex flex-col">
        <ul className="list-disc space-y-2">
          <li className="text-sm text-black font-sans font-bold">
            Avoid strenuous activities, especially during the hottest part of
            the day.
          </li>
          <li className="text-sm text-black font-sans font-bold">
            If you need to be outside, take frequent breaks in the shade or
            indoors and wear lightweight, light-colored, and loose-fitting
            clothing.
          </li>
          <li className="text-sm text-black font-sans font-bold">
            Wear a wide-brimmed hat, sunglasses, and sunscreen with a high SPF.
          </li>
          <li className="text-sm text-black font-sans font-bold">
            Be aware of symptoms of heat exhaustion (heavy sweating, weakness,
            cold, pale and clammy skin, fast and weak pulse, nausea, or
            fainting) and heat stroke (high body temperature, hot, red, dry or
            moist skin, rapid and strong pulse, confusion, or unconsciousness).
          </li>
          <li className="text-sm text-black font-sans font-bold">
            Drink plenty of water throughout the day. Aim for at least 8-10
            glasses.
          </li>
          <li className="text-sm text-black font-sans font-bold">
            Avoid alcohol, caffeine, and sugary drinks as they can dehydrate
            you.
          </li>
        </ul>
        
        
      </div>
    </div>
  );
}

export function HotNight() { 
  return (
    <div
      style={{
        background: "radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 0% 64%, hsl(189, 99%, 26%) 0px, transparent 85%), radial-gradient(at 41% 94%, hsl(189, 97%, 36%) 0px, transparent 85%), radial-gradient(at 100% 99%, hsl(188, 94%, 13%) 0px, transparent 85%)"
        
      }}
      className=" flex rounded-xl shadow-md overflow-hidden md:max-w-2xl h-full mt-5"
    >
      <div className="p-8 flex flex-col">
        <ul className="list-disc space-y-2">
          <li className="text-sm text-white font-sans font-bold">
            Use air conditioning if available, or use fans to circulate air.
          </li>
          <li className="text-sm text-white font-sans font-bold">
            Open windows to allow for cross-ventilation, provided it’s safe and cooler outside.
          </li>
          <li className="text-sm text-white font-sans font-bold">
            Use light-colored, breathable bed linens made from natural fibers like cotton or linen.
          </li>
          <li className="text-sm text-white font-sans font-bold">
             Take a cool shower or bath before bed to lower your body temperature.
          </li>
          <li className="text-sm text-white font-sans font-bold">
            Drink plenty of water. Aim for at least 8-10
            glasses.
          </li>
          <li className="text-sm text-white font-sans font-bold">
             If feasible, sleep outdoors on a balcony or porch where it might be cooler.
          </li>
        </ul>
        
        
      </div>
    </div>
  );
};