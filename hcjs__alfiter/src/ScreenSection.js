let ALL_SCREEN_SECTIONS = [];



function generate_px_string(value)
	{
	return `${value}px`;
	}

const URL__GET_CONTENT_PLUGIN_BY_UI = "http://127.0.0.1:8000/da__alfiter/get_content_plugin_by_uti/?uti=";
const URL__GET_SCREEN_SECTION_BY_UTI = "http://127.0.0.1:8000/da__alfiter/get_screen_section_data_by_uti?uti=";

class ScreenSection
 	{
 	//design rule, get everyting from the server
	constructor(x_pos, y_pos, height, width, uti, content_uti)
		{

		this.uti = uti;


		this.x_pos = x_pos;
		this.y_pos = y_pos;
		this.width = width;  	
		this.height = height;

		this.content = "NONE";
		this.content_uti = content_uti;

		this.element_pointer  = null;

		}


	async get_data_from_server()
		{
		console.log("called get_data_from_server");
		let url = URL__GET_SCREEN_SECTION_BY_UTI+this.uti;
		console.log(`url = ${url}`)
		let response = await fetch
			(
				url,
				{
				"headers":
					{
					//"Access-Control-Allow-Origin":"127.0.0.1",
					}
				
				}
			);

		let response_json = await response.json();
		console.log(`response json`);
		console.log(response_json);		
		return response_json;
		}


	async get_data_from_server_and_assign_to_self()
		{
		let response_json = await this.get_data_from_server();
		let data = response_json["data"];
		console.log("data:");
		console.log(data);
		let start_x = data["start_x"];
		let start_y = data["start_y"];
		let height = data["height"];
		let width = data["width"];
		let content_uti = data["content_plugin"]["uti"];
		let content = data["content_plugin"]["related_file"]["content"];

		this.x_pos = start_x;
		this.y_pos = start_y;

		this.height = height;
		this.width = width;

		this.content_uti = content_uti;
		this.content = content;
		}


	update()
		{			
		this.get_data_from_server_and_assign_to_self().then
			(
			this.render
			);
		}


	set_style(x_pos, y_pos, height, width)
		{
		console.log("setting the style...")
		if (this.has_already_made_element() === false)
			{
			console.error("style setting failed due to absence of element_pointer")
			return 0;
			}
		
		this.element_pointer.style.top = generate_px_string(y_pos);
		this.element_pointer.style.left = generate_px_string(x_pos);
		this.element_pointer.style.height = generate_px_string(height);
		this.element_pointer.style.width = generate_px_string(width);

		console.log("set the style with no error :)")
		return 1;
		}


	set_content(content)
		{
		console.log("set_inner_html is called");
		if (this.has_already_made_element() === false)
			{
			console.error("content setting failed due to absence of element_pointer");
			return 0
			}

		this.element_pointer.innerHTML = content;
		return 1;
		}


	get_needed_css_values()
		{
		console.log("calling the get_needed_css_values");
		if (this.has_already_made_element() === false)
			{
			console.error("element_pointer is null so cant return any css values");
			return null;
			}

		let output = {
				"top":this.element_pointer.style.top,
				"left":this.element_pointer.style.left,
				"height":this.element_pointer.style.height,
				"width":this.element_pointer.style.width,			
				};
		return output;
		}


	make_html_component()
		{
		console.log("calling make_html_component");

		if (this.has_already_made_element() === true)
			{
			console.error("already created the element, cant create anymore");
			console.log(`component creation failed`);				
			return 0;
			}
			
		console.log(`creating the component`);	

		let output = document.createElement("div");
		console.log(`setting the element pointer`);			
		this.element_pointer = output;		


		this.set_style(
			this.x_pos,
			this.y_pos,
			this.height,
			this.width,
			);

		this.set_content(this.content);

		output.style.position = "absolute";
		output.style.backgroundColor = "red";

		console.log(`component creation done ok`);	
		return 1;
		}


	has_already_made_element()
		{
		console.log(`calling has_already_made_element`);
		console.log(`element_pointer = ${this.element_pointer}`)
		let output = this.element_pointer !== null;
		console.log(`has_already_made_element = ${output}`);
		return output;
		}


	put_on_screen(document)
		{
		console.log(`calling put_on_screen`);
		console.log('creating the component')
		let status_of_component_making = this.make_html_component();

		if (status_of_component_making === 0)
			{
			console.error("html compnent was already created, aborting adding to body");
			return 0;
			}

		console.log(`has_already_made_element = ${this.has_already_made_element()}`);
		document.body.appendChild(
			this.element_pointer
			);



		return 1;
		}


	render()
		{
		console.log("calling render");
		if (this.has_already_made_element() === false)
			{
			console.error("rendering failed, cause no pointer to element exists");
			return 0;
			}

		console.log("updating the style")
		this.set_style(
			this.x_pos,
			this.y_pos,
			this.height,
			this.width
			);


		this.set_content(
			this.content
			);


		return 1;
		}


	}










module.exports = 
	{
	ALL_SCREEN_SECTIONS,
	ScreenSection
	};