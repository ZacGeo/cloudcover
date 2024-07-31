import {getCurrentTheme} from './TimeTheme';
import Icon from '../../assets/weather_icon.png';

const Sidebar = () => {
    const theme = getCurrentTheme();


    return (
        <div className="w-64 bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4" style={{background:theme.background, color: theme.color}}>
            <img src={Icon} alt="Weather Icon" className="w-10 mb-4" />
            <a href="#" className=" flex items-center gap-2 py-2 hover:text-cyan-500">Home
            </a>
            <a href="#" className=" flex items-center gap-2 py-2 hover:text-cyan-500"> Map
            </a>
        </div>
    );
}

export default Sidebar;
