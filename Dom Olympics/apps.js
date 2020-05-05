// Qualifier 
var h1 = document.createElement('h1');
h1.textContent = "Javascript Made This!!!";
h1.className = 'header';
document.getElementById('header').appendChild(h1);


const subTitle = document.createElement('p')
subTitle.innerHTML = '<span class = "name"> Benji </span> wrote the Javascript';
document.getElementById('header').appendChild(subTitle);

// Bronze


const message = document.getElementsByClassName('message');

message[0].textContent = 'Will the Green Bay Packers win it all this year?'
message[1].textContent = 'I would like to think so.'
message[2].textContent = 'What about the draft? Everyone hates no WR picked.'
message[3].textContent = 'We have a great WR corp and picked up two veteran WR in free agency.'


// can't figure out the clear button

const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', function(e){
    for (var i = 0; i < message.length; i++) {
        messages[i].textContent = '';
    }
});


