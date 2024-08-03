import { getCurrentTheme } from "../usefulFunctions/TimeTheme";

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
        <div className="rounded-lg shadow-lg p-6 mt-4 ml-4" style={{background: theme.secondary, color: theme.color}}>
        <h2 className="text-xl font-semibold mb-4">7-Day Forecast</h2>
        <div className="grid grid-cols-1 gap-4">
            <table className="min-w-full divide-y divide-gray-200">
                <thead >
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Day</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Temperature</th>
                    </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200" style={{background: theme.secondary}}>
                    {days.map((day, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
                                <span className="material-icons text-3xl">{day.icon}</span>
                                <span>{day.day}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">{day.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{day.tempHigh}° / {day.tempLow}°</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    
    );
};