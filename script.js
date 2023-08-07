/* bydefalt voice lava mate aa  firt line and direct niche*/
let speech = new SpeechSynthesisUtterance();

/* multiple voice drop down ma lavva mate*/
let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, j) => (voiceSelect.options[j] = new Option(voice.name, j)));
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});


/*bydefult voice mate niche no chode*/

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});