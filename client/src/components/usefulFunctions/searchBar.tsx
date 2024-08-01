import { fetchData } from "../../pages/welcome";
import { getCurrentTheme } from "./TimeTheme";
import React, { FormEvent, useState, KeyboardEvent } from "react";

export default function SearchBar({
    onLocation
}: {
    onLocation: (data: { data: any, location: string }) => void;
}) {
    const theme = getCurrentTheme();
    const [searchData, setSearchData] = useState('');
    const [error, setError] = useState(false);


    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        setSearchData(e.currentTarget.value);
    };

    const handleOnEnter = async (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            const weatherData = await fetchData(searchData);
            if(weatherData) {
                onLocation({ data: { ...weatherData, locationData: searchData }, location: searchData });
            } else {
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 6000);
            }
        }
    }


    return (
        <div className="rounded-lg p-4 flex justify-center relative">
            <input
                type="text"
                placeholder="Search for cities"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-500"
                style={{ background: theme.secondary, color: theme.color }}
                value={searchData}
                onInput={handleInputChange}
                onKeyPress={handleOnEnter}
            />
            {error && <div className="absolute border border-red-600 top-[77px] left-0 w-full h-fit rounded-md bg-red-400 p-4 color-white text-base">
                Error: Location not found
            </div>}
        </div>
    );
}