

$(document).ready(function() {
	 function generateColor() {
		 console.log("Generating...");
		 var randomColor = "#";
		 var hexArr = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
		 for (i=0;i<6;i++) {
			 var index = Math.floor(Math.random()*15);
			 console.log("Index... : "+index);
			 randomColor+= hexArr[index];
		 }
		 return randomColor;
	 }
	 $('.secondary').css('background-color',generateColor()); 
});