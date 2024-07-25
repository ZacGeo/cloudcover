import Image from "../../assets/Cold.png";
export  function ColdNight() {
    return (
      <div
        style={{
            background: "radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), radial-gradient(at 0% 64%, hsl(189, 99%, 26%) 0px, transparent 85%), radial-gradient(at 41% 94%, hsl(189, 97%, 36%) 0px, transparent 85%), radial-gradient(at 100% 99%, hsl(188, 94%, 13%) 0px, transparent 85%)"
        }}
        className=" flex rounded-xl shadow-md overflow-hidden md:max-w-2xl h-full mt-12"
      >
        <div className="p-8 flex flex-col">
          <ul className="list-disc space-y-2">
            <li className="text-sm text-gray-300 font-sans font-bold">
              Wear multiple layers of loose-fitting, lightweight clothing. Layering helps trap warm air and provides better insulation.
            </li>
            <li className="text-sm text-gray-300 font-sans font-bold">
               Ensure your bedroom is adequately heated. Use a space heater if necessary
            </li>
            <li className="text-sm text-gray-300 font-sans font-bold">
               Close doors and use draft stoppers to keep cold air out. Ensure windows are properly sealed.
            </li>
            <li className="text-sm text-gray-300 font-sans font-bold">
               Use flannel sheets, heavy blankets, and down comforters to keep warm. Consider using an electric blanket, but ensure it’s safe and in good condition.
            </li>
            <li className="text-sm text-gray-300 font-sans font-bold">
              Insulate windows and doors to prevent drafts. Use heavy curtains to retain heat.
            </li>
            <li className="text-sm text-gray-300 font-sans font-bold">
              Shivering, slurred speech, slow breathing, and confusion. If you suspect hypothermia, seek medical attention immediately.
            </li>
          </ul>
          <div className="mt-4 relative flex items-center">
            <img src={Image} className="h-20 w-20"/>
            <span className="absolute right-0 pr-6 font-bold text-7xl  leading-none text-[#e1e1e1]">5°</span>
          </div>
          
        </div>
      </div>
    );
  }
  

export function Cold() {
    return (
      <div
        style={{
            background: "radial-gradient(at 88% 40%, hsla(240, 15%, 20%, 1) 0px, transparent 85%), radial-gradient(at 49% 30%, hsla(240, 15%, 20%, 1) 0px, transparent 85%), radial-gradient(at 14% 26%, hsla(240, 15%, 20%, 1) 0px, transparent 85%), radial-gradient(at 0% 64%, hsl(189, 99%, 36%) 0px, transparent 85%), radial-gradient(at 41% 94%, hsl(189, 97%, 46%) 0px, transparent 85%), radial-gradient(at 100% 99%, hsl(188, 94%, 23%) 0px, transparent 85%)"
        }}
        className=" flex rounded-xl shadow-md overflow-hidden md:max-w-2xl h-full mt-12"
      >
        <div className="p-8 flex flex-col">
          <ul className="list-disc space-y-2">
            <li className="text-sm text-gray-300 font-sans font-bold">
              Wear multiple layers of loose-fitting, lightweight clothing. Layering helps trap warm air and provides better insulation.
            </li>
            <li className="text-sm text-gray-300 font-sans font-bold">
              Use a waterproof and windproof outer layer to protect against wind and moisture.
            </li>
            <li className="text-sm text-gray-300 font-sans font-bold">
               Try to minimize your time outdoors, especially during the coldest parts of the day.
            </li>
            <li className="text-sm text-gray-300 font-sans font-bold">
              Drive slowly and keep a safe distance from other vehicles. Watch out for ice on the roads.
            </li>
            <li className="text-sm text-gray-300 font-sans font-bold">
              Insulate windows and doors to prevent drafts. Use heavy curtains to retain heat.
            </li>
            <li className="text-sm text-gray-300 font-sans font-bold">
              Keep your home and office heated to a comfortable temperature. Use space heaters safely if needed.
            </li>
          </ul>
          <div className="mt-4 relative flex items-center">
            <img src={Image} className="h-20 w-20"/>
            <span className="absolute right-0 pr-6 font-bold text-7xl  leading-none text-[#e1e1e1]">5°</span>
          </div>
          
        </div>
      </div>
    );
  }