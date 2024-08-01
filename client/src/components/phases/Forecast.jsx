import { getCurrentTheme } from "../usefulFunctions/TimeTheme";
import cloudy from "../../assets/weather_icon.png";
import rain from "../../assets/rain.png";
import sunny from "../../assets/sunny.png";

export default function Forecast({weatherData}) {

    const theme = getCurrentTheme();
    const days = [
        { day: 'Today', description: 'Sunny', tempHigh:weatherData.daily.temperature_2m_max[0], tempLow: weatherData.daily.temperature_2m_min[0] },
        { day: 'Tue',  description: 'Sunny', tempHigh:weatherData.daily.temperature_2m_max[1], tempLow: weatherData.daily.temperature_2m_min[1] },
        { day: 'Wed',  description: 'Sunny', tempHigh:weatherData.daily.temperature_2m_max[2], tempLow: weatherData.daily.temperature_2m_min[2]},
        { day: 'Thu',  description: 'Cloudy', tempHigh:weatherData.daily.temperature_2m_max[3], tempLow: weatherData.daily.temperature_2m_min[3] },
        { day: 'Fri',  description: 'Cloudy', tempHigh:weatherData.daily.temperature_2m_max[4], tempLow: weatherData.daily.temperature_2m_min[4] },
        { day: 'Sat',  description: 'Rainy', tempHigh:weatherData.daily.temperature_2m_max[5], tempLow: weatherData.daily.temperature_2m_min[5] },
        { day: 'Sun',  description: 'Storm', tempHigh:weatherData.daily.temperature_2m_max[6], tempLow: weatherData.daily.temperature_2m_min[6] },
   
    ]

    return (
        <div className=" rounded-lg shadow-lg p-6 flex flex-col gap-4 self-start mt-4 ml-4" style={{background: theme.secondary, color: theme.color}}>
            <h2 className="text-xl font-semibold">7-Day Forecast</h2>
            <div className="flex flex-col gap-2">
                {days.map((day, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-3xl">{day.icon}</span> <span>{day.day}</span>
                        </div>
                        <div className="flex gap-2">
                            <span>{day.description}</span> <span>{day.tempHigh}° / {day.tempLow}°</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};