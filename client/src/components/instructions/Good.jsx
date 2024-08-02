import { getCurrentTheme } from "../usefulFunctions/TimeTheme";

const theme = getCurrentTheme();


export function GoodNight() {

    return (
      <div
        style={{
            background: theme.secondary, color: theme.color}}
        className="flex rounded-xl shadow-md overflow-hidden md:max-w-2xl h-full mt-12 justify-center items-center"
      >
        <div className="p-8">
          <p className="text-lg font-sans font-bold">
            The weather is good.
          </p>
        </div>
      </div>
    );
}

export function Good() {
    return (
      <div
        style={{
           background: theme.secondary, color: theme.color
        }}
        className="flex rounded-xl shadow-md overflow-hidden md:max-w-2xl h-full mt-12 justify-center items-center"
      >
        <div className="p-8">
          <p className="text-lg  font-sans font-bold">
            The weather is good.
          </p>
        </div>
      </div>
    );
}
