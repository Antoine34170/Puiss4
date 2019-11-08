window.onload = function()
{
    var canvasWidth = 420;
    var canvasHeight = 360;
    var blocSize = 60;
    var ctx;
    var delay = 100;
    var widthInBlocks = canvasWidth/blocSize;
    var HeightInBlocks = canvasHeight/blocSize;
    var monTableau;
    var delay = 1000;
    

        
    init();
    
    function init()
    {
        
        var canvas = document.createElement('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "1px solid" ;
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        monTableau = new Tableau();
        monTableau.cadrillageTableau();
            
      
        monTableau.build();
        
       // refreshCanvas();
    }
    
    function refreshCanvas()
    {
        monTableau.cadrillageTableau();
        monTableau.build();
        
        monTableau.rangee();
        
        ctx.clearRect(0,0,canvasWidth, canvasHeight);
        snakee.draw(); 
        applee.draw();
        setTimeout(refreshCanvas,delay)
    
    
    }
    // TABLEAU    ----------------------------------------------------
function Tableau(body)
    {
        this.body = body;
        this.cadrillageTableau = function()
        {
        ctx.save();
        ctx.fillStyle = "#000000";
        for (x=0; x< canvasWidth; x=x+blocSize)
        {
            ctx.fillRect(x,0, 1, canvasHeight);
        }
        for (y=0; y< canvasWidth; y=y+blocSize)
        {
            ctx.fillRect(0,y, canvasWidth, 1);
                }
        ctx.restore();
        
        this.draw = function()
        {
                
        }
             
        }
        
           
    }

// TRANSMISSION INFO TOUCHE > JEU    
    document.onkeydown = function handleKeyDown(e)
    {
        var key = e.keyCode
        var position;
        switch(key)
            {
                case 97: 
                    rangee = "1";     
                    break;
                case 98:  
                    rangee = "2"; 
                    break;
                case 99: 
                    rangee = "3"; 
                    break;
                case 100:     
                    rangee = "4"; 
                    break;
                case 101:     
                    rangee = "5"; 
                    break;
                case 102:     
                    rangee = "6"; 
                    break;
                case 103:     
                    rangee = "7"; 
                    break;
                default:
                     return;
            }
        monTableau.rangee(newDirection);
    }

}