 function makeGreen()
    {
       document.getElementById("caturday-body").className = "green";
    }

function makeBlue()
    {
       document.getElementById("caturday-body").className = "blue";
    }

 function makeSurprise()
    {
       document.getElementById("caturday-body").className = "surprise";
    }

 window.onload = function()
    {
        document.getElementById("greenbutton").addEventListener( 'click' , makeGreen );
        document.getElementById("blue").addEventListener( 'click' , makeBlue );
        document.getElementById("surprise").addEventListener( 'click' , makeSurprise );
    }

