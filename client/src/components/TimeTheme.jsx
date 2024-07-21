export function getCurrentTheme() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
        return {
            background: 'lightblue',
            color: 'black'
        };
    } else {
        return {
            background: 'darkblue',
            color: 'white'
        };
    }
}