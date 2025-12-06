const w = new Audio("./audio/whistle.mp4");
const s = new Audio("./audio/sneeze.mp4");
const r = new Audio("./audio/roar.mp4");
const h = new Audio("./audio/horn.mp4");
const si = new Audio("./audio/siren.mp4");
const l = new Audio("./audio/laugh.mp4");


const buttons = document.querySelectorAll('button');
console.log(buttons)
for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener('click', function(e){
        
        
        if(e.target.className === "whistle") w.play();
        else if(e.target.className === "sneeze") s.play();
        else if(e.target.className === "roar") r.play();
        else if(e.target.className === "clown_horn") h.play();
        else if(e.target.className === "siren") si.play();
        else if(e.target.className === "laugh") l.play();
    });
}

let slider = document.querySelector('.volume');
let globalVolume = 1;

slider.addEventListener('input',function(){
          globalVolume = slider.value/100;
          w.volume = globalVolume;
          s.volume = globalVolume;
          r.volume = globalVolume;
          h.volume = globalVolume;
          si.volume = globalVolume;
          l.volume = globalVolume;

})

let savedVolume = 1;   
let isMuted = false;   

const muteBtn = document.querySelector('.mute');
muteBtn.addEventListener('click', function () {
    if (isMuted == false) {
       savedVolume = globalVolume;
       globalVolume = 0;
       muteBtn.innerText = 'Unmute'
       muteBtn.classList.add('muted')
       isMuted = true;
    } else {
       globalVolume = savedVolume;
       muteBtn.innerText = 'Mute'
       muteBtn.classList.remove('muted')
       isMuted = false;
    }
    w.volume = globalVolume;
    s.volume = globalVolume;
    r.volume = globalVolume;
    h.volume = globalVolume;
    si.volume = globalVolume;
    l.volume = globalVolume;

});




