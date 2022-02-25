const baseURL = 'https://assets.codepen.io/2538893/';
    const nxt = document.querySelector('.nxt');
    const prev = document.querySelector('.prev');
    const slide = document.querySelector('.pic');
    const cars = ['car1.jpg', 'car2.jpg', 'car3.jpg', 'car4.jpg'];
    let index = 0;
    
    nxt.onclick = function(e) {
      e.preventDefault();
      index = index + 1;
      
      //write a conditional so that the images wrap back to the beginning image.  
      if (index > cars.length - 1) { 
        index = 0; 
      }
      
      slide.src = baseURL + cars[index];
      console.log(slide.src);
    }
    
     
       
    //Add a previous button event listener
    prev.onclick = function(e) {
      e.preventDefault();
      index = index - 1;
      
      //write a conditional so that the images wrap back to the beginning image.  
      if (index < 0) { 
        index = cars.length-1; 
      }
      
      slide.src = baseURL + cars[index];
      console.log(slide.src);
    }