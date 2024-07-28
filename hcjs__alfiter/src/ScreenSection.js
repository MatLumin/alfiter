ALL_SCRENN_SECTIONS = [];



function generate_px_string(value)
	{
	return `${value}px`;
	}




class ScreenSection
	{
	consructor(x_pos, y_pos, width, height)
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

		ALL_SCRENN_SECTIONS.push(this);
		}


	make_html_component(overide_element_pointer)
		{
		console.log("calling make_html_component");
		console.log(`overide_element_pointer:${this.overide_element_pointer}`);


		if (overide_element_pointer === undefined)
			{
			overide_element_pointer = false;
			}

		console.log(`post type check overide_element_pointer:${this.overide_element_pointer}`);			



		if (this.has_already_made_element() === true & (~overide_element_pointer))
			{
			console.log("already created the element, cant create anymore");
			console.log(`component creation failed`);				
			return 0;
			}


		console.log(`creating the component`);	

		let output = document.createElement("div");

		console.log(`styling the component`);	

		output.style.bottom = generate_px_string(this.y_pos); 
		output.style.left = generate_px_string(this.x_pos);
		output.style.position = "absolute";
		output.style.width = generate_px_string(this.width);
		output.style.height = generate_px_string(this.height);
		output.style.backgroundColor = "red";

		output.innerText = ".";

		console.log(`setting the element pointer`);	

		this.element_pointer = output;

		console.log(`component creation done ok`);	
		return 1;
		}


	has_already_made_element()
		{
		console.log(`calling has_already_made_element`);
		let output = this.element_pointer !== null;
		console.log(`has_already_made_element = ${outputs}`);
		return output;
		}



	make_and_add_to_body(overdie_element_pointer)
		{
		console.log(`calling make_and_add_to_body`);
		

		if (overide_element_pointer === undefined)
			{
			overide_element_pointer = false;
			}



		let status_of_component_making = this.make_html_component(overide_element_pointer);

		if (status_of_component_making === 0)
			{
			console.log("html compnent was already created, aborting adding to body");
			return 0;
			}


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
			console.log("updating failed, cause no pointer to element exists");
			return 0;
			}

		output.style.bottom = generate_px_string(this.y_pos); 
		output.style.left = generate_px_string(this.x_pos);
		output.style.width = generate_px_string(this.width);
		output.style.height = generate_px_string(this.height);		
		return 1;
		}
	}


