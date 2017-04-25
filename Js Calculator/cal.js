var firstnum, secondnum, num1, num2, sum, opt;
	firstnum = window.prompt("enter first number");
	secondnum = window.prompt("enter second number");
	opt = window.prompt("Type (+, -, /, *) in the box");
	num1 = parseInt(firstnum);
	num2 = parseInt(secondnum);
	sum = num1+num2;
	mul = num1*num2;
	div =num1/num2;
	sub = num1 - num2;
	if (opt == "+") {
			document.writeln("<h1> the Sum is : "+ sum +" </h1>");
	};
	if (opt == "-") {
			document.writeln("<h1> the Sub is : "+ sub +" </h1>");
		};
	if (opt == "/") {
			document.writeln("<h1> the div is : "+ div +" </h1>");
		};
	if (opt == "*") {
			document.writeln("<h1> the mul is : "+ mul +" </h1>");
		};