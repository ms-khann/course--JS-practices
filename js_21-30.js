// console.log("calling = " + );

// -- 21
var profitableGamble = (prob,prize,pay) => { 
	return ( ( prob * prize )  > pay ) ? true : false;
}
console.log("calling profitableGamble = " + profitableGamble(0.2,50,9));


// -- 22
var frames = (num1,num2) => { return num1 * num2 * 60; }
console.log("calling frames " + frames(10,25));


// -- 23
var shouldServeDrink = (age,on_break) => {
	return ( age >= 18 && !on_break ) ? true : false;
}
console.log("shouldServeDrink = " + shouldServeDrink(30,false) );


// -- 24
var isEmpty = (str) => { return !str ? true : false }
console.log("isEmpty = " + isEmpty(''));
console.log("isEmpty = " + isEmpty('a'));


// -- 25
var comp = (str1,str2) => { return str1.length === str2.length ? true : false;}
console.log( "calling comp = " + comp('ab','cda') );


// -- 26
var divisible = (num) => { return ( num % 100 == 0 ) ? true : false;}
console.log("calling divisible = " + divisible(10) );


// -- 27
var divisibleByFive = (num) => { return ( num % 5 == 0 ) ? true : false;}
console.log("calling divisibleByFive = " + divisibleByFive(37) );


// -- 28
var count = count || 0;
var length = (str) => {
	var arr = str.split("");
	if (arr[0]) {
		count++;
		arr.shift();
		var rest_str = arr.join('');
		length(rest_str);
	}
	return count;
}
console.log("calling length = " + length('has') );


// -- 29
var stringInt = (str) => { return Math.round( Number(str) );}
console.log("calling stringInt = " + stringInt('4') );


// -- 30
var devidesEvenly =  (a,b) => {
	if (a > b) {
		return (a / b) % 2 == 0 ? true : false;
	}
	else{
		return " A should be grater than B ";
	}
}
console.log("calling devidesEvenly = " + devidesEvenly(85,4) );
