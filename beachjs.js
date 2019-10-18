
var x1 = 0;
var x2 = 5;
var r2 = 5;
var mw=screen.availWidth;
var r1 = 0;

function go(){
	var shipElement = document.getElementById("ship");
	shipElement.style.marginRight = x1+"px";
	if(x1>820){
		x2 = -5;
	}else if(x1<0){
		x2 = 5;
	}
	x1 +=x2;
	setTimeout("go();",150);
}

function run(){
	var girlElement = document.getElementById("girl");
	girlElement.style.marginLeft = r1+"px";
	if(r1>=1250){
		r1 = 0;
		girlElement.style.visibility = 'hidden'; 
	}
	r1 +=r2;
	setTimeout("run();",100);
}

function sayHello(){
				alert("Don't tough me");
}
