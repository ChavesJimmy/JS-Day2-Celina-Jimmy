function MinToHours(minutes){

    let hours = Math.floor(minutes/60);
    let min = minutes % 60;

    return `${minutes} minutes is equal to ${hours} hours and ${min} minutes.`
}
console.log(MinToHours(600));
document.write(MinToHours(600));