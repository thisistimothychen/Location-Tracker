function initialize() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		center: new google.maps.LatLng(39.2145129, -76.931868),
		zoom: 19,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);


document.addEventListener("DOMContentLoaded", function() {

	document.querySelector("#starter").addEventListener("click", startTimer);

	var timer;
	var interval;
	function startTimer() {
		timer = Date.now();
		interval = setInterval(updateTime, 100);
		document.querySelector("#starter").innerHTML = "Cancel Trouble Timer";
		document.querySelector("#starter").removeEventListener("click", startTimer);
		document.querySelector("#starter").addEventListener("click", stopTimer);
	}

	function stopTimer() {
		clearInterval(interval);
		document.querySelector("#countdown").innerHTML = "10 seconds";
		document.querySelector("#starter").innerHTML = "Start Trouble Timer";
		document.querySelector("#starter").removeEventListener("click", stopTimer);
		document.querySelector("#starter").addEventListener("click", startTimer);
	}

	function updateTime() {
		var left = 10 - (Date.now() - timer) / 1000;
		left = Math.round(10*left)/10;
		if (left < 0) {
			document.querySelector("#countdown").innerHTML = "0 seconds";
			timeIsUp();
		} else {
			document.querySelector("#countdown").innerHTML = left + " seconds";
		}
		
	}

	function timeIsUp() {
		document.querySelector("#countdown").innerHTML = "0 seconds";
		clearInterval(interval);
		alert("Bad Things");
	}
});


