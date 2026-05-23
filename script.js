// AOS ANIMATION

AOS.init({
  duration:1000,
  once:false
});


// COUNTDOWN TIMER

const targetDate =
new Date("May 27, 2026 18:00:00").getTime();


setInterval(() => {

  const now =
  new Date().getTime();

  const distance =
  targetDate - now;


  const days =
  Math.floor(
    distance /
    (1000 * 60 * 60 * 24)
  );


  const hours =
  Math.floor(
    (
      distance %
      (1000 * 60 * 60 * 24)
    ) /
    (1000 * 60 * 60)
  );


  const minutes =
  Math.floor(
    (
      distance %
      (1000 * 60 * 60)
    ) /
    (1000 * 60)
  );


  const seconds =
  Math.floor(
    (
      distance %
      (1000 * 60)
    ) /
    1000
  );


  document.getElementById("days").innerHTML =
  days;

  document.getElementById("hours").innerHTML =
  hours;

  document.getElementById("minutes").innerHTML =
  minutes;

  document.getElementById("seconds").innerHTML =
  seconds;

},1000);



// MUSIC PLAYER

const music =
document.getElementById("music");

let isPlaying = false;


function toggleMusic(){

  if(isPlaying){

    music.pause();

  }else{

    music.play();

  }

  isPlaying = !isPlaying;

}

function sendToWA(event){

  event.preventDefault();

  let name =
  document.getElementById("name").value;

  let wish =
  document.getElementById("wish").value;

  let text =
  `Halo Frista 🎀
Nama: ${name}
Ucapan: ${wish}`;

  window.open(
    `https://wa.me/6285793491824?text=${encodeURIComponent(text)}`,
    "_blank"
  );

}