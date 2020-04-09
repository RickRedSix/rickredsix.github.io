//Menu Buttons
/*
function bindMenuButtons() {
    
    var linkElements = document.querySelectorAll('.scroll-link');    
    
    for(var i = 0; i < linkElements.length; i++) {
                
        linkElements[i].addEventListener("click", function () {            
            
            var elementToScrollTo = this.dataset.scrollto;            
                        
            document.querySelector('.' + elementToScrollTo).scrollIntoView({ 
              behavior: 'smooth' 
            });
            
        });
        
    } 
                                  
};

bindMenuButtons();
*/

function init() {  
  
    var checkbox1 = document.querySelector('#checkbox-1'),
        checkbox2 = document.querySelector('#checkbox-2'),
        checkbox3 = document.querySelector('#checkbox-3'),
        checkbox4 = document.querySelector('#checkbox-4'),
        submitButton = document.querySelector('#button');    
        
        
    submitButton.addEventListener('click', function () {
        
        var tweetURLBase = 'https://twitter.com/intent/tweet?text='
        
        var tweetText = 'I chose '
        
        if(checkNumberOfChoices() === 0) {
            alert('Please choose at least one option')
            return
        }
        
        if(checkbox1.checked)
            tweetText += '#Option1 '
            
        if(checkbox2.checked)
            tweetText += '#Option2 '
            
        if(checkbox3.checked)
            tweetText += '#Option3 '
            
        if(checkbox4.checked)
            tweetText += '#Option4 '                   
            
        tweetText += 'https://cards.twitter.com/cards/3jhkt3/9c4jz'
        
        tweetURLBase += encodeURIComponent(tweetText)
        
        window.open(tweetURLBase, '_blank');
                        
    })  
    
    function checkNumberOfChoices() {
        
        var count = 0;
        
        if(checkbox1.checked)
            count++
            
        if(checkbox2.checked)
            count++
            
        if(checkbox3.checked)
            count++
            
        if(checkbox4.checked)
            count++                                    
            
        return count             
    }               
};

init();



