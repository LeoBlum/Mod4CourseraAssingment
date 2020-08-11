(function () {

const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

names.forEach( name => {
	let firstLetter = name.charAt(0).toLowerCase();

	firstLetter === "j" ?
	byeSpeaker.speak(name):
	helloSpeaker.speak(name);
  })

})();
