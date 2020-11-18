// -- 31
var acceptIntoMovie = (age,isSupervised) => { return age>=15 || isSupervised == true ? true : false;}
console.log("calling acceptIntoMovie = " + acceptIntoMovie(14,false));


// -- 32
var eq = (exp) => { return eval(exp); }
console.log("calling rq = " + eq("6/(9-7)"));


// -- 33
var concatName = (first_name,last_name) => {
	return `${"\"" + last_name + "," + first_name + "\""}`; }
console.log("calling concatName = " + concatName('sahil','khan'));

// -- 34
// var = () => {}


// -- 35
var areaShape = (a,b,shape) => {
	if ( shape.toLowerCase() == 'triangle') {
		return ( a * b ) / 2;
	}
	else if ( shape.toLowerCase() == 'parallelogram' ){
		return ( a * b );
	}
	else{
		return false;
	}
}
console.log("calling areaShape = " + areaShape(2.9,1.3,'parallelogram'));


// -- 36
var reverse = (arr) => {
	if ( Array.isArray(arr) ) {
		let reverse_arr = [];
		for(let i = arr.length - 1; i>= 0; i--){
			reverse_arr.push(arr[i]);
		}
		return reverse_arr;
	}
}
console.log("calling reverse = " + reverse([1,2,3,4]) );


// -- 37
const arr = [1,2,3,4,5,6];
var [a,b,c,d,e,f] = arr;
console.log("destructuring = " + a,b,c,d,e,f);


// -- 38
var yeah_nope = (val) => { 
	return val === true ? true : val === false ? false : 'inavlid argument';
}
console.log("calling yeah_nope = " + yeah_nope(true));


// -- 39
var arrayToString = (arr) => {
	return arr.join('');
}
console.log("calling arrayToString = " + arrayToString([1,2,3]));


// -- 40
var getLastItem = (arr) => { return arr[arr.length - 1];}
console.log("calling getLastItem = " + getLastItem([1,2,3]));