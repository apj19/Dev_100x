
// setInterval(() => {
//     console.clear();
//     let currentDate = new Date();
//     let hr = currentDate.getHours();
//     let min = currentDate.getMinutes();
//     let sec = currentDate.getSeconds();
//     
// }, 1000);

setInterval(() => {
    console.clear();
    let currentDate = new Date();
    let hr = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();
    console.log(`${hr}:${min}:${sec < 10 ? '0'+sec:sec}`); 
    console.log(`${hr}:${min}:${sec < 10 ? '0'+sec:sec}  ${hr < 12? 'AM':'PM'}`); 
}, 1000);