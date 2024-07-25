import Sun from './sun/Sun';
import Moon from './moon/Moon';

export function getCurrentTheme() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 19) {
        return {
            background: 'lightblue',
            color: 'black'
        };
    } else {
        return {
            background: '#212f3c',
            color: 'white'
        };
    }
}

export function welcomeTimeTheme() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 19) {
        return (
            <div className="">
                <Sun className="absolute top-0 left-0 w-full h-full" />
            </div>
        ); 
    } else {
        return (
            <div className="">
                <Moon className="absolute top-0 left-0 w-full h-full" />
            </div>
        );
    }
}


export function getInformationTheme(){
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 19) {
        return {
            background: "beige",
            color: 'brown'
        };
    } else {
        return {
            background: '#212f3c',
            color: 'white'
        };
    }
}