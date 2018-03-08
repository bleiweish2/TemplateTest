$(window).ready(function() {
	var currentURL = window.location.origin;
	$.ajax({url: currentURL + "/text.json", method: "GET"})
	.done(function(result) {
		console.log(result.val);
	});
});