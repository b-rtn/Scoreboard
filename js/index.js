var addScore, deductScore, finalScore1, finalScore2
init ()
   
   document.querySelector(".btnPlus1").addEventListener('click', function(){
    addScore = 10;
    finalScore1 += addScore;
    document.querySelector('#Score1').textContent = finalScore1;
   })
   
   document.querySelector(".btnPlus2").addEventListener('click', function(){
    addScore = 10;
    finalScore2 += addScore;
    document.querySelector('#Score2').textContent = finalScore2;
   })

   function on() {
        document.getElementById("overlay").style.display = "block";

        setTimeout(on, 3000);
    }

    function off() {
        document.getElementById("overlay").style.display = "none";

    }

    function enableButton(){
        document.getElementById("teamName").disabled = true;
    }

    function init (){

        finalScore1 = 0;
        finalScore2 = 0;

        // Team name
        document.getElementById('Team1').textContent = 'Team 1';
        document.getElementById('Team2').textContent = 'Team 2';
        
        //Team score
        document.getElementById('Score1').textContent = '0';
        document.getElementById('Score2').textContent = '0';

    }