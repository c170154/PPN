// script.js
const inputs = document.getElementById("inputs");

inputs.addEventListener("input", function (e) {
	const target = e.target;
	const val = target.value;

	if (isNaN(val)) {
		target.value = "";
		return;
	}

	if (val != "") {
		const next = target.nextElementSibling;
		if (next) {
			next.focus();
		}
	}
});

inputs.addEventListener("keyup", function (e) {
	const target = e.target;
	const key = e.key.toLowerCase();

	if (key == "backspace" || key == "delete") {
		target.value = "";
		const prev = target.previousElementSibling;
		if (prev) {
			prev.focus();
		}
		return;
	}
});

 function foo() {
    //shakeForm();
    //alert("Submit button clicked!");
    login();
    return true;
 }

 function login(e){
	e.preventDefault();
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
	const input4 = document.getElementById("input4");
    const inputValue1 = input1.value;
    const inputValue2 = input2.value;
    const inputValue3 = input3.value;
	const inputValue4 = input4.value;
    if (inputValue1 == 1 && inputValue2 == 2 && inputValue3 == 3 && inputValue4 == 4){
		window.open('pic2.html', '_self');
    } else {
		alert("error!");
    }
 }

 


