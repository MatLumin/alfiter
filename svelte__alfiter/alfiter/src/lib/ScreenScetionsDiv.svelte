<style>

.main_div	
	{
	height: 100%;
	width: 100%;
	background-color: wheat;
	}

</style>


<script>
let main_div;



function request_posing_and_sizing_for_each_screen_scetion()
	{
	
	for (let child of main_div.children)
		{
		console.log(child);
		child.apply_dem_and_pos_vars_to_style();
		}
	}

</script>


<div  class="main_div" id="main_div" bind:this={main_div}>
	<slot/>
</div>

<div on:load={request_posing_and_sizing_for_each_screen_scetion}>
</div>

