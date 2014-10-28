/**************************************
 TITLE:queenShips.js
 AUTHOR: Shane Griffin(SG)
 CREATE DATE: 10-6-2014
 PURPOSE: to rename ships
 LAST MODIFIED ON: 10-6-2014
 LAST MODIFIED BY: SG
 MODIFICATION HISTORY:
10-6-2014: created

 */
 
 $("document").ready(function() {
	 //rock=1 paper=2 scissor=3 so 
	var btnRock=document.getElementById("btnRock");
	var btnPaper=document.getElementById("btnPaper");
	var btnScissors=document.getElementById("btnScissors");
	
	var playerChoice=new Number(0);

	btnRock.addEventListener("click", function(){
		alert("clicked rock");
		playerChoice=1;
		compChoose(playerChoice);
		}, 
		false);
		
	btnPaper.addEventListener("click", function(){
		alert("clicked paper");
		playerChoice=2;
		compChoose(playerChoice);
		}, 
		false);
		
	btnScissors.addEventListener("click", function(){
		alert("clicked scissor");
		playerChoice=3;
		compChoose(playerChoice);
		playerChoice=0;
		}, 
		false);


	function compChoose(playerChoose){
		//alert("enters compChoose function");
		
		var choice=new Number(0);
		choice=Math.floor((Math.random())*3+1);
		
		if(choice==1){alert("computer picks rock");}
		else if(choice==2){alert("computer picks paper");}
		else if(choice==3){alert("computer picks scissors");}
		
		
		if(playerChoose==1){
			if(choice==1){alert("you tie!");}
			else if(choice==2){alert("you lose!");}
			else{alert("you win!");}
		}
		
		else if(playerChoose==2){
			if(choice==2){alert("you tie!");}
			else if(choice==3){alert("you lose!");}
			else{alert("you win!");}
		}
		
		else if(playerChoose==3){
			if(choice==3){alert("you tie!");}
			else if(choice==1){alert("you lose!");}
			else{alert("you win!");}
		}
		//else{alert("didn't work");}
		
		choice=0;
	}
});