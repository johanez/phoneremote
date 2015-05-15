// motion detection
gyro.frequency = 500;
gyro.startTracking(function(o) {
	if (o.x > 1) {
		Reveal.right();
	} else if (o.x < -1) {
		Reveal.left();
	}
	var b = document.getElementById('example'),
	var f = document.getElementById('features');
	f.innerHTML = gyro.getFeatures();
	b.innerHTML = 	"<p> x = " + o.x + "</p>" +
					"<p> y = " + o.y + "</p>" +
					"<p> z = " + o.z + "</p>" +
					"<p> alpha = " + o.alpha + "</p>" +
					"<p> beta = " + o.beta + "</p>" +
					"<p> gamma = " + o.gamma + "</p>";
});