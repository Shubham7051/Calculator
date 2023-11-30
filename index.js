let input = document.querySelector('input')
let shubu = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {


        if (e.target.innerHTML == '=') {
            shubu = eval(shubu);
            input.value = shubu;
        }

        else if (e.target.innerHTML == 'AC') {
            shubu = "";
            input.value = shubu;
        }

        else if(e.target.innerHTML == 'c'){
            shubu="#";
            input.value = shubu;

        }

        else {
            // console.log('Listner work');
            shubu = shubu + e.target.innerHTML;
            input.value = shubu;
        }
    })
})