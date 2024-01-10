
let text = document.querySelector('.container h1')

let num1 = Math.floor(Math.random() * 6 + 1);
let num2 = Math.floor(Math.random() * 6 + 1);

let img1 = document.querySelector('.img1').setAttribute('src', `images/dice${num1}.png`)
let img2 = document.querySelector('.img2').setAttribute('src', `images/dice${num2}.png`)

num1 > num2 ? text.innerHTML = 'Player 1 won!' : text.innerHTML = 'Player 2 won!'

// assuming the values are never equal...