// var obj = {
// 	name: "marla",
// 	kategorija: "kratkodlaka",
// 	age: "7"
// }
// var ar = [1,2,3,4]

// // console.log(obj.age);
// // console.log(ar[0]);

// var btn = document.getElementById("one");
// btn.addEventListener("click",nesto);
// function nesto(){
// 	console.log(ar[0]);
// }
// nesto();


// var weaponDmg = 100;
// setInterval(upgradeWeapon,5000);
// function upgradeWeapon(){
// 	weaponDmg = weaponDmg+100;
// 	console.log(weaponDmg);
// }
// console.log(weaponDmg);

var start = document.getElementById("btnStart");
var stop = document.getElementById("btnStop");
var h4 = document.getElementById("naslov");
var miliSec = 0;
var sec = 0;
var min = 0;
var timer;
var restart = document.getElementById("reset")
var mp4 = new Audio();
mp4.src = "button-10.mp3"
var mp3 = new Audio();
mp3.src = "button-3.mp3"
var mp5 = new Audio();
mp5.src = "button-8.mp3"


start.addEventListener("click",nesto);
function nesto(){
	timer = setInterval(function(){
		miliSec = miliSec + 1;
		if(miliSec==99){
			miliSec=0;
			sec=sec+1;
		}
	
		if(sec==60){
			sec=0;
			min=min+1;
		}
		h4.innerHTML = min+":"+sec+":"+miliSec;
	},10);
}
stop.addEventListener("click",zaustavi);
function zaustavi(){
	clearInterval(timer);
}
restart.addEventListener("click",reset);
function reset(){
	h4.innerHTML="00:00:00";
	min=0;
	sec=0;
	miliSec=0;
}

// function he() {
// 	var sve = document.getElementById("sve");
// 	if (start.clicked == true) {
// 		sve.style.background = "red";
// }
// he();

var danNoc = document.getElementById("a");
var bc = document.getElementById("as");
danNoc.addEventListener("click" , dn);
function dn(){
	as.style.background="white";

}
var nocDan = document.getElementById("b");
nocDan.addEventListener("click" , nd);
function nd(){
	as.style.background="black";

}
