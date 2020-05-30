function() {
    
    console.log("I'm Here!");
  
	var imageLinks = document.getElementsByClassName('image-link');
  
	console.log(imageLinks.length)
	

    for (var i = 0; i < imageLinks.length; i++) { 
            console.log(imageLinks[i]); 
    } 			
  
}()