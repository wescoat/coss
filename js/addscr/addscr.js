var CoSS = (function (my, window) {
    "use strict";

	my.addScript = function (src) {
		var script = window.document.createElement("script");

		script.type = "text/javascript";
		script.src = src;
		window.document.body.appendChild(script);
	};

	return my;

}(this.CoSS || {}, this));
