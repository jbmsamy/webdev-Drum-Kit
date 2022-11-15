var buttons = document.querySelectorAll(".drum");
/*for(var i=0; i<buttons.length; i++) {
  buttons[i].addEventListener('click', handleClick);
}*/
/*var i=0;
while(i < buttons.length) {
  buttons[i].addEventListener('click', handleClick);
  i++;
}
*/
buttons[0].addEventListener('click', handleClick);
buttons[1].addEventListener('click', handleClick);
buttons[2].addEventListener('click', handleClick);
buttons[3].addEventListener('click', handleClick);
buttons[4].addEventListener('click', handleClick);
buttons[5].addEventListener('click', handleClick);
buttons[6].addEventListener('click', handleClick);

document.addEventListener('keydown', (event) => playSound(event.key));

function handleClick() {
  playSound(this.innerText);
}
function playSound(letter) {
console.log('key = ' + letter);

  var audioFile = '';
  if(letter == 'w') {
    audioFile = 'tom-1.mp3';
  }else if( letter == 'a') {
    audioFile = 'tom-2.mp3';
  }else if(letter == 's') {
    audioFile = 'tom-3.mp3';
  }else if(letter == 'd') {
    audioFile = 'tom-4.mp3';
  }else if(letter == 'j') {
    audioFile = 'snare.mp3';
  }else if(letter == 'k') {
    audioFile = 'kick-bass.mp3';
  }else if(letter == 'l') {
    audioFile = 'crash.mp3';
  }
  console.log('audio File: ' + audioFile);
  if(audioFile!='') {
    var audio = new Audio('sounds/' + audioFile);
    audio.play();
    buttonAnimation(letter);
  }

}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  //activeButton.setAttribute('class','pressed');
  activeButton.classList.add('pressed');
  setTimeout(function() {
    activeButton.classList.remove('pressed');
  },100);
}
