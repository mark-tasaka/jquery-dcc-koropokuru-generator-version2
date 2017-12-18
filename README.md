# jquery-dcc-koropokuru-generator-version2
A second iteration of the random Koropokuru Character Generator for the Dungeon Crawl Classics game system.  The changes made to this iteration are the replacement of the JavaScript DOM tags with JQuery tags and the use of external JavaScript functions.  By moving a number of the JavaScript functions outside of the main generators achieves the following objective: 1) reduces the sizes of the generator files; 2) makes updating the functions easier as the external functions are shared by many generators; 3) increaes cohesion and lowers coupling - an aim in program design. 
