
const ID_OF_MAIN_SECTION_HOLDER = alfiter_main_section_holder;

function make_section(uti, title, content_uti, content_to_use)
	{
	let alfiter_main_section_holder = docuemnt.getElementById(ID_OF_MAIN_SECTION_HOLDER);


	let output = docuemnt.createElement("div");
	output.classList.add("alfiter_screen_section");
	output.innerText = content_to_use();
	}