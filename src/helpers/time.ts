export const timeSince = (date: string) => {
    const baseDate = new Date(date);

    const seconds = Math.floor((new Date().getTime() - baseDate.getTime()) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval === 1 ? interval + " year" : interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval === 1 ? interval + " month" : interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval === 1 ? interval + " day" : interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval === 1 ? interval + " hour" : interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval === 1 ? interval + " minute" : interval + " minutes";
    }
    const sec = Math.floor(seconds) 
    return sec === 1 ? sec + " second" : sec + " seconds";
    
};