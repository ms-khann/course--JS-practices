function addition(a,b){
	return 'addition = ' + Number(a) + Number(b);
}
console.log( addition(3,2) );
console.log( addition(-3,-6) );
console.log( addition(7,3) );
console.log( addition('7',3) );
console.log( addition(7,'3') );

function convert(val){
	return ( Number(val) * 60 );
}
console.log( convert(5) );

function addition(val){
	return Number(val)+"is incrmented by 1 = "+ ( Number(val) + 1 ) ;
}
console.log( addition(0) );


function giveMeSomething(str){
	return 'somthing '+str ;
}
giveMeSomething('is better than nothing');

function areaOfTriangle(height,width){
	return ( 1/2*height*width );
}
console.log( areaOfTriangle(7,4) );

function howManySeconds(hrs){
	return ( hrs * 60 *60 );
}
console.log( howManySeconds(2) );
console.log();


function getFirstValue(arr){
	return arr[0];
}
console.log(getFirstValue([0,2,3]));


function remainder(a,b){
	return a%b;
}
console.log( remainder(-9,45) );

console.log( 8**2 - 10**2);