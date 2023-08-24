let string = "";
let errorMessage = "";

let buttons = document.querySelectorAll('.bt');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                if (!isFinite(string)) {
                    errorMessage = "Error";
                    string = "";
                }
                document.querySelector('input').value = errorMessage || string;
            } catch (error) {
                errorMessage = "Error";
                string = "";
                document.querySelector('input').value = errorMessage;
            }
        } else if (e.target.innerHTML == 'C') {
            string = "";
            errorMessage = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'D') {
            string = string.slice(0, -1);
            errorMessage = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == '%') {
            string = parseFloat(string);
            string *= 0.01;
            errorMessage = "";
            document.querySelector('input').value = string;
        } else {
            errorMessage = "";
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
