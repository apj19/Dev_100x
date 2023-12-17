/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(t);
        }, t*1000);
    })

}

function wait2(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(t);
        }, t*1000);
    })

}

function wait3(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(t);
        }, t*1000);
    })

}

function calculateTime(t1, t2, t3) {
    let p = new Promise((ansRes, rej) => {
        wait1(t1).then((r1) => {

            wait2(t2).then((r2) => {
                wait3(t3).then((r3) => {
                    ansRes((r1 + r2 + r3) * 1000);
                })
            })

        })
    })

    return p;

}

module.exports = calculateTime;
