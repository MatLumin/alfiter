<script>
import ScreenSection from './lib/ScreenSection.svelte';
import {currently_selected_sections} from "./stores.js";
import ScreenScetionsDiv from "./lib/ScreenScetionsDiv.svelte";

let selected_screen_section = null;


addEventListener
  (
  "keypress",
  function move_and_resize_selected_section(event)
    {
    let go_up = event.code == 'KeyT';
    let go_down = event.code == 'KeyG';
    let go_left = event.code == 'KeyH';
    let go_right = event.code == 'KeyF';

    let height_up= event.code == 'KeyW';
    let height_down = event.code == 'KeyS';

    let width_up= event.code == 'KeyD';
    let width_down = event.code == 'KeyA';

    if (selected_screen_section !== null)
      {

        if (go_up === true)
          {    
          selected_screen_section.go_up();
          }

        if (go_down === true)
          {      
          selected_screen_section.go_down();
          }

        if (go_left === true)
          {      
          selected_screen_section.go_left();
          }

        if (go_right === true)
          {      
          selected_screen_section.go_right();
          }


        if (height_up === true)
          {        
          selected_screen_section.height_up();
          }

        if (height_down === true)
          {          
          selected_screen_section.height_down();
          }

        if (width_up === true)
          {      
          selected_screen_section.width_up();
          }

        if (width_down === true)
          {        
          selected_screen_section.width_down();
          }
      }
    }
  );


currently_selected_sections.subscribe
  (
  function uf1(current_section)
    {
    selected_screen_section=current_section;
    console.log(selected_screen_section);
    }
  );
</script>


<ScreenScetionsDiv >
  <ScreenSection x_pos=0 y_pos=0 height=194 width=114 />
  <ScreenSection x_pos=228 y_pos=-2 height=242 width=117 />
  <ScreenSection x_pos=114 y_pos=-2 height=194 width=114 />
  <ScreenSection x_pos=568 y_pos=370 height=369 width=115 />
  <ScreenSection x_pos=791 y_pos=0 height=96 width=122 />
  <ScreenSection x_pos=797 y_pos=90 height=135 width=229 />
  <ScreenSection x_pos=1105 y_pos=-36 height=298 width=172 />
  <ScreenSection x_pos=679 y_pos=0 height=172 width=116 />
  <ScreenSection x_pos=454 y_pos=90 height=270 width=343 />
  <ScreenSection x_pos=344 y_pos=0 height=342 width=113 />
  <ScreenSection x_pos=455 y_pos=407 height=384 width=115 />
  <ScreenSection x_pos=683 y_pos=359 height=430 width=114 />
</ScreenScetionsDiv>



