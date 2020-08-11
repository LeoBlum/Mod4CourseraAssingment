(function (window){
	var byeSpeaker = {}
	byeSpeaker.gobye = "Good Bye"
	byeSpeaker.speak = function (name) {
    console.log(byeSpeaker.gobye + " " + name);
}
	window.byeSpeaker = byeSpeaker;

})(window);
