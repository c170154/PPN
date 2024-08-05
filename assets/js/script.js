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

 function login(){
    const input1 = document.getElementById("1");
    const input2 = document.getElementById("2");
    const input3 = document.getElementById("3");
    const inputValue1 = input1.value;
    const inputValue2 = input2.value;
    const inputValue3 = input3.value;
    if (inputValue1 != 1 || inputValue2 != 2 || inputValue3 != 3){
        alert("error!");
    } else {
        document.location = 'main.html'
    }
 }


