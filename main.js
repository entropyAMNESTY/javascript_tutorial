// EXTERNAL JAVASCRIPT | 
//     -config
//     -models
//     -routes
//     -views
//     -public 
//         -index.html 
//         -package.json 

let t1 = +new Date;
console.log('script started at', t1);
console.log('element', document.getElementById('order-matters'))
while((new Date) < t1 + 5000) {
    //do nothing
}
console.log('script has finished running at', +new Date)