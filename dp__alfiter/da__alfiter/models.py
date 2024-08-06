from django.db import models
from random import randint;
from django.conf import settings;
import os;
from typing import *;


def unnanmed_function(instance:models.FileField, filename:str)->str:
	return settings.CONTENT_PLUGINS_DIR_NAME + "/" + filename;



class ContentPlugin(models.Model):
	uti = models.CharField(max_length=64, unique=True) #unique textual id 
	title = models.CharField(max_length=200); #simply a title

	related_file = models.FileField(); #the html file related to


	def __str__(self)->str:
		return f"ContentPlugin: uti:{self.uti}";


	def save(self, *args, **kwargs)->None:


		super().save(*args, **kwargs);

		current_file_path:str = self.related_file.path;
		target_dir:str = os.path.split(self.related_file.path)[0];
		new_file_name:str = f"content_plugin__{self.uti}.html";
		new_file_path:str = os.path.join(target_dir, new_file_name);

		os.rename(
			current_file_path,
			new_file_path,
			);

		self.related_file.name = new_file_name;
		
		super().save(*args, **kwargs);



	def generate_dict(self)->Dict[str,Any]:
		output:Dict[str,Any] = dict();

		output["uti"] = self.uti;
		output["title"] = self.title;
		output["related_file"] = {
			"name":self.related_file.name,
			"url":self.related_file.url,
			#"content": self.get_content(),		
			};

		return output;


	def get_content(self):
		with open(self.related_file.path, "r") as f1:
			return f1.read();
			f1.close();







def randint_c_1()->int:
	return randint(50, 300);


def randint_c_2()->int:
	return randint(0,1000);









class ScreenSection(models.Model):

	uti = models.CharField(max_length=64, unique=True); #unique textual id
	title = models.CharField(default="No title", max_length=200);

	start_x = models.IntegerField(default=randint_c_2);
	start_y = models.IntegerField(default=randint_c_2);

	height = models.IntegerField(default=randint_c_1);
	width = models.IntegerField(default=randint_c_1);


	content_plugin = models.ForeignKey(ContentPlugin, on_delete=models.CASCADE);


	def generate_dict(self)->Dict[str,Any]:
		return {
			"uti":self.uti,
			"title":self.title,
			"start_x":self.start_x,
			"start_y":self.start_y,
			"height":self.height,
			"width":self.width,
			"content_plugin":self.content_plugin.generate_dict()
			}





class Screen(models.Model):
	uti = models.CharField(max_length=64, unique=True);
	title = models.CharField(default="no title", max_length=200);
	sections = models.ManyToManyField(ScreenSection);



	def generate_dict(self)->Dict[str, Any]:
		sections:List[str] = list();
		for i1 in self.sections.all():
			sections.append(i1.generate_dict());

		return {
			"uti":self.uti,
			"title"	:self.title,
			"sections":sections,
			};













