import ClockCard from "../usefulFunctions/ClockCard";

export default function Weather_Overview() {

    return (
        <div class= " rounded-lg  p-6 flex gap-4 " >
            <div class="flex-col items-center justify-between">
                <h1 class="text-4xl font-bold">Xanthi</h1>
                <div class="text-8xl font-bold">31°</div>
                <div>Chance of rain: 0%</div>

            </div>
            <ClockCard />
            </div>
    );
};