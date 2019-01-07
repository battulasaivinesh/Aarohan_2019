<div class="spacer s2"></div>
<div id="trigger" class="spacer s0"></div>
<div id="customactions">
	<label>scroll direction</label>
	<code id="scrollDirection"></code>
	<br>
	<label>state</label>
	<code id="state">outside</code>
	<br>
	<label>last hit</label>
	<code id="lastHit">nothing</code>
	<br>
	<label>progress</label>
	<code id="progress">0</code>
	<br>
	<a href="#" class="viewsource">view source</a>
</div>
<div class="spacer s2"></div>
<script>
	// init controller
	var controller = new ScrollMagic.Controller();

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 200})
					.addTo(controller)
					.addIndicators() // add indicators (requires plugin)
					.on("update", function (e) {
						$("#scrollDirection").text(e.target.controller().info("scrollDirection"));
					})
					.on("enter leave", function (e) {
						$("#state").text(e.type == "enter" ? "inside" : "outside");
					})
					.on("start end", function (e) {
						$("#lastHit").text(e.type == "start" ? "top" : "bottom");
					})
					.on("progress", function (e) {
						$("#progress").text(e.progress.toFixed(3));
					});
</script>