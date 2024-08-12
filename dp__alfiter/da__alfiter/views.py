from django.shortcuts import render;
from django.http import HttpRequest, HttpResponse;
from django.conf import settings
from . import models;
import os;
from typing import *;
import json;
from django.db.models.query import QuerySet;
import os;

CONTENT_PLUGINS_FOLDER_NAME = "content_plugin";


def bilboard_diaply(request:HttpRequest)->HttpResponse:
	return HttpResponse(
		settings.SECTIONS_CONTNET_PLUGINS_HTML_FILES_DIR,
		);



#sections crud

def form_json_response(data:Dict[str,Any]|List[Dict])->HttpResponse:
	dump:str = json.dumps(data);
	res:HttpResponse = HttpResponse(dump, content_type="application/json");
	return res;


def form_html_response(data:str)->HttpResponse:
	return HttpResponse(data, content_type="text/html");


def get_json_from_http_request(input:HttpResponse)->Dict[str,Any]:
	print("++++++", input.content.decode());
	return json.loads(input.content.decode());



def get_content_plugin_by_uti(request:HttpRequest)->HttpResponse:
	
	pre_output:Dict[str:Any] = {
		"is_ok":False,
		"error_msg":None,
		"data":None,
		};	


	given_uti:str|None = request.GET.get("uti");
	is_given_uti_invalid = given_uti == None;

	if (is_given_uti_invalid == True):
		pre_output["error_msg"] = "given uti is invalid or missing";
		res:HttpResponse = form_json_response(pre_output);
		return res;






	query_output:QuerySet = models.ContentPlugin.objects.filter(uti=given_uti);



	no_content_plugin_by_uti_found:bool = query_output.count() == 0;
	
	if (no_content_plugin_by_uti_found):
		pre_output["error_msg"] = f"no content plugin was found with uti of {given_uti}";

	else:
		pre_output["is_ok"] = True;
		pre_output["data"] = query_output[0].generate_dict();


	res:HttpResponse = form_json_response(pre_output);
	return res;




def get_all_screens_uti(request:HttpRequest)->HttpResponse:

	pre_output:Dict[str, Any] = {

		"is_ok":False,
		"error_msg":None,
		"data":None,
		};


	sub_pre_output:List[str] = [];


	for i1 in models.Screen.objects.all():
		sub_pre_output.append(i1.uti);



	pre_output["is_ok"] = True;
	pre_output["data"] = sub_pre_output;

	return form_json_response(pre_output);





def get_screen_by_uti(request:HttpRequest)->HttpResponse:

	pre_output:Dict[str, Any] = {

		"is_ok":False,
		"error_msg":None,
		"data":None,
		};


	given_uti:str|None = request.GET.get("uti");
	given_uti_is_missing:bool = given_uti == None;

	if (given_uti_is_missing == True):

		pre_output["error_msg"] = "no uti is given";
		return form_json_response(pre_output);


	query_output:QuerySet = models.Screen.objects.filter(uti=given_uti);


	
	no_screen_found:bool = query_output.count() == 0;

	if (no_screen_found == True):
		pre_output["error_msg"] = f"no screen was found for uti of {given_uti}";	

	else:
		pre_output["data"] = query_output[0].generate_dict();
		pre_output["is_ok"] = True;
		pre_output["data"]["host"] = request.get_host();
	return form_json_response(pre_output);





def get_screen_section_data_by_uti(request:HttpRequest)->HttpResponse:
	pre_output:Dict[str,Any] = {
		"is_ok":False,
		"error_msg":None,
		"data":None,
		};




	given_uti:str|None = request.GET.get("uti");
	given_uti_is_missing:bool = given_uti == None;
	if (given_uti_is_missing == True):

		pre_output["error_msg"] = "no uti is given";
		return form_json_response(pre_output);

	query_output:QuerySet = models.ScreenSection.objects.filter(uti=given_uti);
	no_screen_found:bool = query_output.count() == 0;

	if (no_screen_found == True):
		pre_output["error_msg"] = f"no screen was found for uti of {given_uti}";	
	
	else:
		pre_output["data"] = query_output[0].generate_dict();pre_output["data"]["host"] = request.get_host();
		pre_output["is_ok"] = True;

	return form_json_response(pre_output);	



def get_iamge_colelction_by_uti(request):
	pre_output = {
		"is_ok":False,
		"error_msg":None,
		"data":None,
		};

	given_uti = request.GET.get("uti");
	given_uti_is_missing = given_uti == None;
	if (given_uti_is_missing == True):
		pre_output["error_msg"] = "given uti is missing";
		return form_json_response(pre_output);

	query:QuerySet = models.ImageCollection.objects.filter(uti=given_uti);
	no_image_collection_was_found = query.count() == 0;
	if (no_image_collection_was_found == True):
		pre_output["error_msg"] = f"no uti was found with given uti of {given_uti}" ;
		return form_json_response(pre_output);

	pre_output["data"] = query[0].generate_dict();
	pre_output["is_ok"] = True;

	return form_json_response(pre_output);



def return_file_content(path)->str:
	with open(path) as f1:
		return f1.read();


def index(request):
	html_file_content = return_file_content("./static/webpack/index.html");
	return HttpResponse(html_file_content,content_type="text/html");

def mainjs(request):
	html_file_content = return_file_content("./static/webpack/main.js");
	return HttpResponse(html_file_content,content_type="text/javascript ");