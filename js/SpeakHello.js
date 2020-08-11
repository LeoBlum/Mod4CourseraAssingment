(function (window) {
  	var helloSpeaker = {}
  	helloSpeaker.hello = "Hello"
  	helloSpeaker.speak = function (name) {
  	console.log(helloSpeaker.hello + " " + name);
}
	window.helloSpeaker = helloSpeaker;

})(window);