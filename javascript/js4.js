
//these need to be global vars for now
  var length = 0;
  var BackCorner = 0;
  var DownWall = 0;
  var TheTee = 0;
  var WatchBall = 0;
  var MakeOppRun = 0;
  var VolleyWhenPoss = 0;
  var DelayWhenPoss = 0;
  var ChangePace = 0;
  var GoShortInitiative = 0;
  
  
  document.getElementById('badTotal').style.background = "";
  
  //process whichever button that is pressed
  document.getElementById("LengthBtn").onclick = process;
  document.getElementById("BackCornerBtn").onclick = process;
  document.getElementById("DownWallBtn").onclick = process;
  document.getElementById("TBtn").onclick = process;
  document.getElementById("WatchBallBtn").onclick = process;
  document.getElementById("MakeOppRunBtn").onclick = process;
  document.getElementById("VolleyWhenPossBtn").onclick = process;
  document.getElementById("DelayWhenPossBtn").onclick = process;
  document.getElementById("ChangePaceBtn").onclick = process;
  document.getElementById("GoShortInitiativeBtn").onclick = process;

function myReloadFunction() {
    location.reload();
}
  
   function process() {
     
      var Total = 0;
     
      const perfectTotal = 690
      const HigherTotal = 670;
      const EqualTotal = 550;
      const BetterTotal = 420;

                         if(document.getElementById(this.id).style.background == ""){
                           setTextToDisplay(this.id);
                           document.getElementById(this.id).style.background = "green";                         
                           setButtonVarVal(this.id);
                         
                         }else if (document.getElementById(this.id).style.background == "green"){                           
                           
                           document.getElementById(this.id).style.background = "";
                            setTextToDisplay(this.id);
                           resetSkillValIfAlreadyClicked(this.id);
                         
                         }
     
                        Total = AddUpAllTheValues();
     
                        setIndicator(Total, perfectTotal, HigherTotal, EqualTotal, BetterTotal);
     
            }//end of function Process
  
  function setTextToDisplay(){
    
                          if(arguments[0] == 'LengthBtn'){   
                              textToDisplay.textContent = "Your highest priority good length is"; 
                            
                          }
                         else if(arguments[0] == 'BackCornerBtn'){   
                              textToDisplay.textContent = "Keep your opponent on the defensive and restrict his options you must";
                                     
                         }

                         else if(arguments[0] == 'DownWallBtn'){       
                                    textToDisplay.textContent = "Keep ball tight you must";
                                    
                         }
                         else if(arguments[0] == 'TBtn'){
                                    textToDisplay.textContent = "The T must be covered ... always";
                           
                         }
                         else if(arguments[0] == 'WatchBallBtn'){
                                    textToDisplay.textContent = "Focus on the ball at all times";
                           
                         }
                         else if(arguments[0] == 'MakeOppRunBtn'){
                                    textToDisplay.textContent = "Opponent run he must";
                           
                         }
                         else if(arguments[0] == 'VolleyWhenPossBtn'){
                                    textToDisplay.textContent = "Use the volley";
                           
                         }
                         else if(arguments[0] == 'DelayWhenPossBtn'){
                                   textToDisplay.textContent = "Delay you can";
                           
                         }
                         else if(arguments[0] == 'ChangePaceBtn'){
                                    textToDisplay.textContent = "Pace change you can";
                           
                         }
                         else if(arguments[0] == 'GoShortInitiativeBtn'){
                                    textToDisplay.textContent = "When initiative you have, go short you must";
                           
                         }
    
  }
  
   
  function setButtonVarVal(){
                         
                         if(arguments[0] == 'LengthBtn'){   
                              length = length + 100;  
                            
                          }
                         else if(arguments[0] == 'BackCornerBtn'){   
                              BackCorner = BackCorner + 90;
                                     
                         }

                         else if(arguments[0] == 'DownWallBtn'){       
                                    DownWall = DownWall + 80;
                                    
                         }
                         else if(arguments[0] == 'TBtn'){
                                    TheTee = TheTee + 80;
                           
                         }
                         else if(arguments[0] == 'WatchBallBtn'){
                                    WatchBall = WatchBall + 70;
                           
                         }
                         else if(arguments[0] == 'MakeOppRunBtn'){
                                    MakeOppRun = MakeOppRun + 70;
                           
                         }
                         else if(arguments[0] == 'VolleyWhenPossBtn'){
                                    VolleyWhenPoss = VolleyWhenPoss + 60;
                           
                         }
                         else if(arguments[0] == 'DelayWhenPossBtn'){
                                    DelayWhenPoss = DelayWhenPoss + 60;
                           
                         }
                         else if(arguments[0] == 'ChangePaceBtn'){
                                    ChangePace = ChangePace + 60;
                           
                         }
                         else if(arguments[0] == 'GoShortInitiativeBtn'){
                                    GoShortInitiative = GoShortInitiative + 50;
                           
                         }
    
  }//end of function setButtonVarVal
  
  
  function resetSkillValIfAlreadyClicked(){
    
                         if(arguments[0] == 'LengthBtn'){
                          length = 0;                       
                          }
                         else if(arguments[0] == 'BackCornerBtn'){
                                    BackCorner = 0;                                 
                         }
                         else if(arguments[0] == 'DownWallBtn'){
                                    DownWall = 0;                         
                         }
                         else if(arguments[0] == 'TBtn'){
                                    TheTee = 0;                         
                         }
                         else if(arguments[0] == 'WatchBallBtn'){
                                    WatchBall = 0;                          
                         }
                         else if(arguments[0] == 'MakeOppRunBtn'){
                                    MakeOppRun = 0;                           
                         }
                         else if(arguments[0] == 'VolleyWhenPossBtn'){
                                    VolleyWhenPoss = 0;                          
                         }
                         else if(arguments[0] == 'DelayWhenPossBtn'){
                                    DelayWhenPoss = 0;
                         }
                         else if(arguments[0] == 'ChangePaceBtn'){
                                    ChangePace = 0;                          
                         }
                         else if(arguments[0] == 'GoShortInitiativeBtn'){
                                    GoShortInitiative = 0;                          
                         }

}//end of function resetSkillValIfAlreadyClicked
 
  
  function AddUpAllTheValues(){

    var AddUpAllTheValues = length +
          BackCorner +
          DownWall +
          TheTee +
          WatchBall +
          MakeOppRun +
          VolleyWhenPoss +
          DelayWhenPoss +
          ChangePace +
          GoShortInitiative;
     
    return AddUpAllTheValues;
    
  }
 
 
   function setIndicator(Total, perfectTotal, HigherTotal, EqualTotal, BetterTotal){
     
     //check if any of top three are 0 in which case indicator will show 'bad'
     
     
     
     if(length == 0 || BackCorner == 0 || DownWall == 0){
      //alert('length' + length + 'bc'+ BackCorner + 'dw' + DownWall);
              document.getElementById("displayImage").src = 'https://storage.googleapis.com/squashpassiontools/images/jabba the hut 150.jpg';
              document.getElementById("PerfectBtn").style.background = "";
              document.getElementById("HigherTotal").style.background = "";
              document.getElementById("EqualTotal").style.background = "";
              document.getElementById("BetterTotal").style.background = "";
              document.getElementById('badTotal').style.background = "";
              document.getElementById('badTotal').style.background = "pink";
              document.getElementById('badTotal').innerHTML = "Good length, the back corners and down the wall essential they are ... ";
     }else
     
            if (Total < BetterTotal ){
              document.getElementById("displayImage").src = 'https://storage.googleapis.com/squashpassiontools/images/bb8 150.jpg';
              document.getElementById("PerfectBtn").style.background = "";
              document.getElementById("HigherTotal").style.background = "";
              document.getElementById("EqualTotal").style.background = "";
              document.getElementById("BetterTotal").style.background = "tomato";
              document.getElementById('badTotal').style.background = "";
              document.getElementById('badTotal').innerHTML = "";
            
            } else if (Total >= BetterTotal && Total < EqualTotal){
              
              document.getElementById("displayImage").src = 'https://storage.googleapis.com/squashpassiontools/images/rey 150.jpg';
              document.getElementById("PerfectBtn").style.background = "";
              document.getElementById("HigherTotal").style.background = "";
              document.getElementById("EqualTotal").style.background = "";
              document.getElementById("BetterTotal").style.background = "YellowGreen";
              document.getElementById('badTotal').style.background = "";
              document.getElementById('badTotal').innerHTML = "";
            
            }else if (Total >= EqualTotal && Total < HigherTotal){ 
              document.getElementById("displayImage").src = 'https://storage.googleapis.com/squashpassiontools/images/obi wan 150.jpg';
              document.getElementById("PerfectBtn").style.background = "";
              document.getElementById("HigherTotal").style.background = "";
              document.getElementById("EqualTotal").style.background = "LimeGreen";
              document.getElementById("BetterTotal").style.background = "YellowGreen";
              document.getElementById('badTotal').style.background = "";
              document.getElementById('badTotal').innerHTML = "";
            } 
     
        	else if (Total >= HigherTotal && Total < perfectTotal){

              document.getElementById("displayImage").src = 'https://storage.googleapis.com/squashpassiontools/images/anakin 150.png';
              document.getElementById("PerfectBtn").style.background = "";
              document.getElementById("HigherTotal").style.background = "green";
              document.getElementById("EqualTotal").style.background = "LimeGreen";
              document.getElementById("BetterTotal").style.background = "YellowGreen";
              document.getElementById('badTotal').style.background = "";
              document.getElementById('badTotal').innerHTML = "";
            }
     
        	else{
              document.getElementById("displayImage").src = 'https://storage.googleapis.com/squashpassiontools/images/yoda lightsaber 150.jpg';
              document.getElementById("PerfectBtn").style.background = "purple";
              document.getElementById("HigherTotal").style.background = "green";
              document.getElementById("EqualTotal").style.background = "LimeGreen";
              document.getElementById("BetterTotal").style.background = "YellowGreen";
              document.getElementById('badTotal').style.background = "";
              document.getElementById('badTotal').innerHTML = "";
            }
     
          }//end of function checkTotal

