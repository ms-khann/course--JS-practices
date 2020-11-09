// -- 11
function square(num){
	return ( num * num );
}
console.log("square = " + square(5));

// -- 12
function and(a,b){
	if( a && b ){
		return true;
	}
	else
	{
		return false;
	}
}
console.log( "calling and " + and(true,true) );
console.log( "calling and " + and(false,true) );
console.log( "calling and " + and(true,false) );

// -- 13
function lessThanOrEqualToZero(num){
	if ( num <= 0) {
		return true;
	}
	else{
		return false;
	}
}
console.log("calling lessThanOrEqualToZero "+lessThanOrEqualToZero(5));
console.log("calling lessThanOrEqualToZero "+lessThanOrEqualToZero(0));
console.log("calling lessThanOrEqualToZero "+lessThanOrEqualToZero(-1));

// -- 14
function lessThan100(a,b){
	let sum = a + b;
	if( sum < 100 ){
		return true;
	}
	else{
		return false;
	}
}
console.log("calling lessThan100 "+lessThan100(20,30));

// -- 15
function footballPoints(win,draws,loss){
	let win_points = win * 3;
	let draw_points = draws * 1;
	let loss_points = loss * 0;
	return ( win_points + draw_points + loss_points );
}
console.log("callign footballPoints "+footballPoints(3,4,2));

// -- 16
function isSameNum(num1,num2){
	if( num1 == num2 ){
		return true;
	}
	else{
		return false;
	}
}
console.log("calling isSameNum "+isSameNum(2,2));
console.log("calling isSameNum "+isSameNum(2,3));

// -- 17
function isEven(n){
	if ( n%2 == 0 ){
		return true;
	}
	else{
		return false;
	}
}
console.log("isEven = "+isEven(6));

// -- 18
function animals(chickens,cows,pigs){
	let chickens_leg = chickens * 2;
	let cows_leg = cows * 4;
	let pig_legs = pigs * 4;
	return ( chickens_leg + cows_leg + pig_legs );
}
console.log("calling animals "+animals(2,3,5));

// -- 19
function convert(hours,minuts){
	let sec = 60 * 60;
	let hours_sec = hours * 60 * 60;
	let minuts_sec = minuts /sec ;
	return Math.round( hours_sec + minuts_sec );
}
console.log("calling convert "+convert(1,3));

// -- 20
function checkEquality(a,b){
	if ( a === b) {
		return true;
	}
	else{
		return false;
	}
}
console.log("calling checkEquality "+checkEquality('1','1'));