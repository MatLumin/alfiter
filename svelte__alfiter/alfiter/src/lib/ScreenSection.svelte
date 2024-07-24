<style>

.ScreenSection
	{
	position:absolute;
	background-color: wheat;

	height: 50px;
	width: 50px;

	height: 60PX;
	width: 60PX;

	box-sizing: border-box;
	}


:is(.HighLight)
	{
	border-color: red;
	border-width: 3px;
	border-style: solid;
	}

</style>


<script>
import {currently_selected_sections} from "../stores.js";
import dont_delecte_this_css_rule from "./dont_delecte_this_css_rule.svelte"

export let x_pos;
export let y_pos;
export let height;
export let width;

let is_seclted = false;





function get_section_div()
	{
	return document.getElementById("section_div");
	}



export function go_up()
	{
	y_pos += 1;
	get_section_div().style.top = `${y_pos}px`;
	}


export function go_down()
	{
	y_pos -= 1;
	get_section_div().style.top = `${y_pos}px`;

	}


export function go_left()
	{
	x_pos += 1;
	get_section_div().style.left = `${x_pos}px`

	}


export function go_right()
	{
	x_pos += -1;
	get_section_div().style.left = `${x_pos}px`
	}


export function height_up()
	{
	height += -1;
	get_section_div().style.height = `${height}px`;

	}


export function height_down()
	{
	height += 1;
	get_section_div().style.height = `${height}px`;

	}


export function width_up()
	{
	width += 1;
	get_section_div().style.width = `${width}px`;

	}


export function width_down()
	{
	width += -1;
	get_section_div().style.width = `${width}px`;
	}


function select_self()
	{
	currently_selected_sections.set(proxial_method_carrier);		
	get_section_div().classList.add("HighLight");
	is_seclted=true;
	console.log("got selected");
	apply_dem_and_pos_vars_to_style();
	}


function de_select_self()
	{
	currently_selected_sections.set(null);		
	get_section_div().classList.remove("HighLight");
	is_seclted=false;
	console.log("got de-sected");
	apply_dem_and_pos_vars_to_style();
	}


let proxial_method_carrier = new Object();
proxial_method_carrier["go_up"]=go_up;
proxial_method_carrier["go_down"]=go_down;
proxial_method_carrier["go_left"]=go_left;
proxial_method_carrier["go_right"]=go_right;
proxial_method_carrier["height_up"]=height_up;
proxial_method_carrier["height_down"]=height_down;
proxial_method_carrier["width_up"]=width_up;
proxial_method_carrier["width_down"]=width_down;


	
	
	
	
function apply_dem_and_pos_vars_to_style()
	{
	get_section_div().style.top = `${y_pos}px`;
	get_section_div().style.left = `${x_pos}px`;
	get_section_div().style.height = `${height}px`;
	get_section_div().style.width = `${width}px`;
	}	
	

	
			


function on_click()
	{
	if (is_seclted === true)
		{
		de_select_self();	
		}
	else if(is_seclted === false)
		{
		select_self();
		}
	}



</script>


<div class="ScreenSection"  id="section_div" on:click={on_click} >

</div>

