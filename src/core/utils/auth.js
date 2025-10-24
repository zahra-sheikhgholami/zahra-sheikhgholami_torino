// Converts seconds into a "MM : SS" formatted string
const formatTime = (time) => {
    if (typeof time !== "number" || time < 0) return "00 : 00";
    
    const minutes = Math.floor(time / 60)
    const seconds = time % 60;
    return `${minutes} : ${seconds.toString().padStart(2, "0")}`
}

export {formatTime}