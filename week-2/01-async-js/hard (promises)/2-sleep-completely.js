/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    let end=milliseconds*milliseconds;

    return new Promise((res,rej)=>{
        let a=0;
        let end=milliseconds*1000000
        for (let i = 0; i < end; i++) {
            a++;
            
        }

        res();
        
    })
}

module.exports = sleep;
