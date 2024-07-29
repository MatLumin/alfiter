let ALL_SCREEN_SECTIONS = [];



function generate_px_string(value)
	{
	return `${value}px`;
	}




class ScreenSection
 	{
	constructor(x_pos, y_pos, width, height,)
		{

		console.log(`
		'constructor' is called for Screen Section			
			x_pos:${x_pos}
			y_pos:${y_pos}
			width:${width}
			height:${height}		
			`);
		this.x_pos = x_pos;
		this.y_pos = y_pos;
		this.width = width;  	
		this.height = height;
		this.element_pointer  = null;

		ALL_SCREEN_SECTIONS.push(this);
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
			this.width,
			this.height,
			);


		output.style.position = "absolute";
		output.style.backgroundColor = "red";

		output.innerText = ".";





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


	update()
		{
		console.log("calling update");

		if (this.has_already_made_element() === false)
			{
			console.error("updating failed, cause no pointer to element exists");
			return 0;
			}

		this.element_pointer.style.bottom = generate_px_string(this.y_pos); 
		this.element_pointer.style.left = generate_px_string(this.x_pos);
		this.element_pointer.style.width = generate_px_string(this.width);
		this.element_pointer.style.height = generate_px_string(this.height);		
		return 1;
		}
	}





module.exports = 
	{
	ALL_SCREEN_SECTIONS,
	ScreenSection
	};