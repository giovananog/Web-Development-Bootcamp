let colorsArray = ['green', 'red', 'yellow', 'blue'];
let gameArray = [];
let i = 0;
let j = 0;

$(document).keydown(function() {
    start();
})

function start() {
    let actualColor = colorsArray[Math.floor(Math.random() * 4)];
    gameArray.push(actualColor);
    $('h1').text("level " + i++);
    
    playSound(actualColor);
    shineButton(actualColor);

    checkAnswer();
}


function checkAnswer() {

    $(document).off('click').on('click', function(e) {
       let color = (e.target.className).split(' ')[1];
       shineButton(color);
       
       if (gameArray[j] == color) {
           j++;
           playSound(color);
           if (j == gameArray.length) {
             j = 0;
             setTimeout(start, 1000);
           }
       } else {
           $('h1').text("you lose, press any key to restart!");
           gameArray = [];
           i = 0;
           j = 0;
           playSound('wrong');
           $('body').addClass('game-over');
           setTimeout(function() {
                $('body').removeClass('game-over');
            }, 100);
        }
    });
    
}

function playSound(color) {
    let audio = new Audio(`sounds/${color}.mp3`);
    audio.play();
}

function shineButton(color) {
    $(`#${color}`).addClass('pressed');
    setTimeout(function() {
        $(`#${color}`).removeClass('pressed');
    }, 100);
}