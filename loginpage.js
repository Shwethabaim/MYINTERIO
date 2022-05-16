// reset function
const resetButton = document.querySelector('#btn1');
const a = document.querySelectorAll('input');

resetButton.addEventListener('click', function reset() {
    for (let i; i < a.length; i++) {
        a[i].innerText = '';
    }
})

// welcome alert
const alt = document.querySelector('#login1');
const name1 = document.querySelector('#names');

alt.addEventListener('click', function (welcome) {
    if (a === 'null') {
        console.log("hello")
        console.log(name1.innerText)
        alert(`Welcome ${name1.innerText},you are logged in successfully`)
    }
})

//login validation
// const b = document.querySelectorAll('input');
// for (let i; i < b.length; ++) {
//     if (b === null) {
//         alert("enter credentials");
//     }
// }

