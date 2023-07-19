let sound = new Audio('https://stream-151.zeno.fm/vcvelc3wn4xuv?zs=psDwoMLGSGGBTZ9x0rZx2Q');

playBtn.addEventListener('click', () => {
  sound.play();
});

pauseBtn.addEventListener('click', () => {
  sound.pause();
});