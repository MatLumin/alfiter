from django.urls import path;
from . import views;



urlpatterns = [
	path("bilboard_diaply/", views.bilboard_diaply),
	path("get_content_plugin_by_uti/", views.get_content_plugin_by_uti),

	path("get_all_screens_uti/", views.get_all_screens_uti),
	path("get_screen_by_uti/", views.get_screen_by_uti),
	path("get_screen_section_data_by_uti", views.get_screen_section_data_by_uti),

	path("get_iamge_colelction_by_uti", views.get_iamge_colelction_by_uti),

	path("index", views.index),
	path("main.js", views.mainjs),
	#path("render_screen_by_uti/", views.render_screen_by_uti),
	];