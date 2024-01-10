//select one
// $('h1').css('color','red');

// select all
// $('button')

// adding one or more class to a element
// $('h1').addClass('big-title margin-50');

//returns true or false
// $('h1').hasClass('margin-50');

// change the text
// $('h1').text('Bye');

// the same as innerHTML
// $('button').html;

// gets the atributes
// $('img').attr('src')

// set an atribute
// $('a').attr('href', 'https://www.google.com');

// addEventListener on jquery (click event)
// $('h1').click(function () { 
//     alert('vc eh gay');
//     $('h1').css('color','green');
// })


// instead of using for loops to add event to more than one thing that have the same class
// $('button').click(function() {
//     $('h1').css('color','purple')
// })

//show the key that is pressed on the h1
// $(document).keypress(function(e) {
//     $('h1').text(e.key);
// })

//easiest way to add events
// $('h1').on('click', function() {
//     alert('mt facil');
// })

//animate
// $('h1').animate({opacity: 0.5})