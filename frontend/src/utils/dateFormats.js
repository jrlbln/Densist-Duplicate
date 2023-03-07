
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
export default function getDayNameToday()
{
    today.toLocaleDateString();
    var date = new Date(today);
    return date.toLocaleDateString('en-ph', {weekday:'long'});        
}