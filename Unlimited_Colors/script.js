// generate a random number
//    OR
// generate a random hexcode value

const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}


// console.log(randNumber());
let stopColor;

const setbgc = function () {
    if (!stopColor) {
        stopColor = setInterval(changebgc, 1000);
   }
    function changebgc() {
        document.body.style.backgroundColor = randomColor();
    }
};

document.querySelector('#start').addEventListener('click', setbgc);

const stopbgc = function () { 
    clearInterval(stopColor);
    stopColor = null;  // just to make code clean if any variable is not in use so just make it null. 
    // and in line no. 19 we are checking also  .. which makes it efficient.
};

document.querySelector('#stop').addEventListener('click', stopbgc);
