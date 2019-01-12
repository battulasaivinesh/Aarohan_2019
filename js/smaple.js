<style type="text/css">
	.active {
		background-color: #307FB5;
	}
</style>
<form class="move">
	<fieldset>
		<p id="high1">One</p>
		<p id="high2">Two</p>
		<p id="high3">Three</p>
		<p id="high4">Four</p>
	</fieldset>
</form>
<div class="spacer s1" id="sec1">
	<div class="box2" style="background-color: #8DBBE0;">
		<p>One</p>
		<a href="#" class="viewsource">view source</a>
	</div>
</div>
<div class="spacer s1" id="sec2">
	<div class="box2" style="background-color: #6AA6D8;">
		<p>Two</p>
		<a href="#" class="viewsource">view source</a>
	</div>
</div>
<div class="spacer s1" id="sec3">
	<div class="box2" style="background-color: #4E96D1;">
		<p>Three</p>
		<a href="#" class="viewsource">view source</a>
	</div>
</div>
<div class="spacer s1" id="sec4">
	<div class="box2" style="background-color: #307FB5;">
		<p>Four</p>
		<a href="#" class="viewsource">view source</a>
	</div>
</div>
<div class="spacer s2"></div>
<script>
	// init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#sec1"})
					.setClassToggle("#high1", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#sec2"})
					.setClassToggle("#high2", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#sec3"})
					.setClassToggle("#high3", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#sec4"})
					.setClassToggle("#high4", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
</script>