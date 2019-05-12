/*              路~=鈮犫墵x#鈮犫墵=-                         路=鈮堚墵xxx鈮犫増~-路              
            路~鈮�#%&$$$$&%x鈮垀路                        ~=鈮�#%$$$$$&%x鈮�-           
          ~x&$$$$$$$x~路  -%~                        #鈮�   -鈮�&$$$$$$$#鈮埪�        
        =%$$$$$$$$$$-  -鈮�$$-                        x$%=路  x$$$$$$$$$&鈮�-      
      -%$$$$$$$$$$$$$%%$$$鈮�                         路&$$&%&$$$$$$$$$$$$&鈮�     
     路&$$$$$$$$$$$$$$$$$&=                           路#$$$$$$$$$$$$$$$$$$鈮�    
     鈮�$$$$$$$$$$$$$$$$$#-                              鈮�&$$$$$$$$$$$$$$$$$    
     鈮�$$$$$$$$$$$$$$$$$                                 鈮�$$$$$$$$$$$$$$$$$    
     路%$$$$$$$$$$$$$$$鈮�                                  &$$$$$$$$$$$$$$$=    
      ~#$$$$$$$$$$$$&鈮�                                   路#$$$$$$$$$$$$&x     
      #%%%&&$$$$$&%鈮�-     =-   路-=鈮堚増xxxxxx鈮犫墵=~-路  -=       =x%$$$$$$&&%%&-    
      鈮�$$&&%###鈮爚-       路$&鈮坸%&$$$$$$$$$$$$$$$%#鈮�&$-        路-鈮�###%&&$$%     
       #$$$$$$$x        路鈮�$$$$$$$$$$$$$$$$$$$$$$$$$$%鈮�-        -$$$$$$$$~     
       路x&$$&&%##鈮�-   ~x&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$#=路  路=x#%&&&$&%=      
         -%&$$$$$$$鈮�=%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&x鈮�%$$$$$$$&鈮�        
           -=鈮爔#%&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%#鈮�=~路         
             路~鈮�%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%鈮�=-路          
鈮�====鈮堚墵鈮犫墵xx#%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&%%#xx鈮犫墵鈮�=鈮�
%&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&%
 路路-=x%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%x=-路路 
       -鈮�#&$$$$$$$$$$$$$$$$$$$$&$$$$$$$$$$$$$$&$$$$$$$$$$$$$$$$$$$$&#鈮�-       
          路=%$$$$$$$$$$$$$$$$$$%=x%$$$$$$$$%鈮爚%$$$$$$$$$$$$$$$$$$%=路          
     路-~鈮堚墵x#%$$$$$$$$$$$$$$$$$$$x  -x$$$$鈮犅�  x$$$$$$$$$$$$$$$$$$$%#x鈮犫増~-路     
   =鈮�&$$$$$%%%&$&%$$$$$$$$$$$$$$$%鈮犫墵%$$$$%鈮犫墵&$$$$$$$$$$$$$$$%&$&%%%$$$$$&鈮爚   
  -$&$&#鈮�==x&$$%%$$~~鈮�#&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&#鈮爚~$$%%$$&x==鈮�#%$%$=  
  鈮�$$$~  鈮�%$$#x&$$~    路-=鈮�#%&&$$$$$$$$$$$$$$$$&%%#鈮�=-路    ~$$&x#$$%鈮�  -$$$x  
  鈮�$$鈮�  #$$%-~%$#~           路路-~~==========~~-路路           ~#$%~路%$$#  =$$#  
  鈮�$%  路$$#路-$&鈮�                                              鈮�&$-路#$$路  #$#  
  鈮�$=  ~$%  -$&                                                &$路  %$~  -$x  
  -&   ~$~   &鈮�                                                #%   ~$~   #=*/




/*


	TWIST NOTATION

	UPPERCASE = Clockwise to next 90 degree peg
	lowercase = Anticlockwise to next 90 degree peg



	FACE & SLICE ROTATION COMMANDS

	F	Front
	S 	Standing (rotate according to Front Face's orientation)
	B 	Back
	
	L 	Left
	M 	Middle (rotate according to Left Face's orientation)
	R 	Right
	
	U 	Up
	E 	Equator (rotate according to Up Face's orientation)
	D 	Down



	ENTIRE CUBE ROTATION COMMANDS
	
	X   Rotate entire cube according to Right Face's orientation
	Y   Rotate entire cube according to Up Face's orientation
	Z   Rotate entire cube according to Front Face's orientation



	NOTATION REFERENCES

	http://en.wikipedia.org/wiki/Rubik's_Cube#Move_notation
	http://en.wikibooks.org/wiki/Template:Rubik's_cube_notation


*/




$(document).ready( function(){ 


	var useLockedControls = true,
		controls = useLockedControls ? ERNO.Locked : ERNO.Freeform;

	var ua = navigator.userAgent,
		isIe = ua.indexOf('MSIE') > -1 || ua.indexOf('Trident/') > -1;

	window.cube = new ERNO.Cube({
		hideInvisibleFaces: true,
		controls: controls,
		renderer: isIe ? ERNO.renderers.IeCSS3D : null
	});


	var container = document.getElementById( 'container' );
	container.appendChild( cube.domElement );



	if( controls === ERNO.Locked ){
		var fixedOrientation = new THREE.Euler(  Math.PI * 0.1, Math.PI * -0.25, 0 );
		cube.object3D.lookAt( cube.camera.position );
		cube.rotation.x += fixedOrientation.x;
		cube.rotation.y += fixedOrientation.y;
		cube.rotation.z += fixedOrientation.z;
	}


	// The deviceMotion function provide some subtle mouse based motion
	// The effect can be used with the Freeform and Locked controls.
	// This could also integrate device orientation on mobile

	// var motion = deviceMotion( cube, container );

	// motion.decay = 0.1; 				// The drag effect
	// motion.range.x = Math.PI * 0.06;	// The range of rotation 
	// motion.range.y = Math.PI * 0.06;
	// motion.range.z = 0;
	// motion.paused = false;				// disables the effect

	console.log(window.cube);
	

})