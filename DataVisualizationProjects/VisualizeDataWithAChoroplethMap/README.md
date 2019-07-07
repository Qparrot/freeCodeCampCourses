# Visualize Data With A Map

##Log

(01.07.2019):
	- Try to implement the choropleth map with d3.v5.min...
(02.07.2019):
	- Follow the tuto from _link. 6_
	- DOESNOTWORK dl ogr2ogr to convert geographical files. _(link 8)_
	- Check which data with mapshaper. _(link 9)_
	- dl gdal-bin to use ogr2ogr $ sudo apt-get install gdal-bin. _(link 10)_
	- I need to add "-f geojson" to the command ogr2ogr. The final command is: _(link 11)_
		 sudo ogr2ogr -f geojson -where "FID in ('ES', 'FR', 'DE', 'CH', 'BE', 'UK', 'AD', 'LU', 'IT')" countries.geojson ~/Documents/countries/CNTR_RG_10M_2016_4326.geojson

	Milestone: I show the map thanks to the geojson file and the cities thanks to the csv file.
(04.07.2019):
	- Integrate the map of the North American counties. To do so I needed to change the coordonates of the center and add the file found in the _(link 12)_
(07.07.2019):
	- Integrate the gradient color, thank to colorhexa.com _(link 14)_. 
	- Integrate the use of the data from the education array _(link 15)_.
	
##Difficulties

1. Q(30.06.2019) - how to show the map?
	A(30.06.2019 - 21:23) - you need to use a geojson, shapefile, topo file. 
2. Q(30.06.2019) - How to use geojson?
	A(30.06.2019 - 21:23) - you need to use d3.queue projection and geoPath, etc. 
				_(link 3)_
3. what is a geojson file, shapefile, or topo file? 
4. Should I use a geojson, shapefile, or topo? 
5. Q(30.06.2019) - Where should I find the geojson of the usa counties?
	A(30.06.2019 - 21:23) 	
				_(link 2)_
6. Q(01.07.2019)How can I Show a map with the last version of d3? 
	A() 			
				_(link 4,5 & 6)_
7. Q(07.07.2019) How to compare the to file?
	A( use the fips, county, State numbers)
8. Q(07.07.2019) How to make the process faster? It is currently laggy...
	A()
#### Useful links
1. **Project on codepen:** https://codepen.io/freeCodeCamp/pen/EZKqza
2. **US GEOJSON** https://eric.clst.org/tech/usgeojson/
3. **tuto how to show a map with d3:** https://mono.software/2017/08/10/d3-js-map-of-croatia/
4. **D3 for a Choropleth maps:** http://synthesis.sbecker.net/articles/2012/07/18/learning-d3-part-7-choropleth-maps
5. **Let's make a Map:** https://bost.ocks.org/mike/map/
6. **Good guide to follow for doing choropleth map!:**http://datawanderings.com/2018/10/28/making-a-map-in-d3-js-v-5/
7. tutorial for choropleth map(doesn't work)https://www.d3-graph-gallery.com/graph/choropleth_basic.html
8. **Download npm(DOESNOTWORK):** https://www.npmjs.com/package/ogr2ogr
9. **a tool that display the geo data as a map:** https://mapshaper.org/
10. **Download gdal-bin:** http://www.sarasafavi.com/installing-gdalogr-on-ubuntu.html
11. **Thread - Merging CSV and KML in ogr2ogr?:** https://gis.stackexchange.com/questions/265161/merging-csv-and-kml-in-ogr2ogr
12. **counties:** https://eric.clst.org/tech/usgeojson/
13. **Accomplished project:** https://www.highcharts.com/maps/demo/us-counties/dark-unica 
14. **colorhexa gradient:** https://www.colorhexa.com/5dcfc0

