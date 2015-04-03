//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
var isTyler = function(name) {
	if (name === "Tyler") {
		return true;
	}
	else {
		return false;
	}
}
isTyler(name);


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
var getName = function() {
	return prompt("What's your first name?");
}
getName();

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
var welcome = function() {
	alert("Welcome, " + getName());
}
welcome();

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here

//--- An argument is used at function invokation, while a parameter is used at function declaration. 
//--- Essentially, when a function is invoked with an argument, that argument will correspond to 
//--- the declared function's parameter.
//--- For example:
//--- var hello = function(num1, num2) { <--- num1 and num2 on this line are parameters
//--- }
//--- hello(2, 5); <--- 2 and 5 on this line are arguments

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

//--- falsy values:
//--- -- Nan
//--- -- null
//--- -- undefined
//--- -- 0
//--- -- '' (empty string)
//--- -- false

//--- To check if something is falsy, the shorthand way to do that is:
//--- if (!something) {
//---   return "this is falsy";
//--- }
//--- On line 80, the '!' says if 'something' does NOT contain a truthy value, then on 
//--- line 81, it wil return "this is falsy".


//Next Problem



//Create a function called myName that returns your name

  //Code Here

var myName = function(name) {
  	return name;
}

//Now save the function definition of myName into a new variable called newMyName

  //Code Here

var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName("Whitney"));

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.
