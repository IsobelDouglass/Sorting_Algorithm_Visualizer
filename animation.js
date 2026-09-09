

function playSubtleClick() {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';           // smoothest, least "electronic" waveform
  osc.frequency.value = 800;   // higher = feels lighter/softer than low tones

  gain.gain.setValueAtTime(0, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 0.005); // very low volume
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.05); // fast fade, ~50ms total

  osc.connect(gain).connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.05);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export { playSubtleClick, sleep };