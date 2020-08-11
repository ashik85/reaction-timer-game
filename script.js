                     var start = new Date().getTime();
           var bestTime=200;
            
            function getRandomColor() {
                
                var letters = '0123456789ABCDEF'.split('');
    
                var color = '#';
    
                for (var i = 0; i < 6; i++ ) {
        
                    color += letters[Math.floor(Math.random() * 16)];
    
                }
    
                return color;

            }
            
            function makeShapeAppear() {
                
                var top = Math.random() * 300;
                
                var left = Math.random() * 400;
                
                var width = (Math.random() * 200) + 100;
                
                if (Math.random() > 0.5) {
                    
                    document.getElementById("shape").style.borderRadius = "50%";
                    
                } else {
                    
                    document.getElementById("shape").style.borderRadius = "0";
                    
                }
                
                document.getElementById("shape").style.backgroundColor = getRandomColor();
                
                document.getElementById("shape").style.width = width + "px";
                
                document.getElementById("shape").style.height = width + "px";
                
                document.getElementById("shape").style.top = top + "px";
                
                document.getElementById("shape").style.left = left + "px";
    
                document.getElementById("shape").style.display = "block";
                
                start = new Date().getTime();

            }
            
            function appearAfterDelay() {
                
                setTimeout(makeShapeAppear, Math.random() * 2000);
                
            }
            
            appearAfterDelay();
            
            document.getElementById("shape").onclick = function() {
                
                document.getElementById("shape").style.display = "none";
                
                var end = new Date().getTime();
                
                var timeTaken = (end - start) / 1000;

                if(timeTaken<bestTime){
                    bestTime=timeTaken;
                    document.getElementById("comment").innerText ="Congrats! This is ur best score:-)";
                    document.getElementById("comment").style.color="green";
                }
                else{
                    document.getElementById("comment").innerText ="Come on! U can do much better:-(";
                    document.getElementById("comment").style.color="red";
                }

                document.getElementById("best").style.display="block";

                document.getElementById("time").style.display="block";
                
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
                
                document.getElementById("bestTime").innerHTML = bestTime + "s";
                
                appearAfterDelay();
                
            }
            
