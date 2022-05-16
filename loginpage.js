// reset function
const resetButton = document.querySelector('#btn1');
const a = document.querySelectorAll('input');

resetButton.addEventListener('click', function reset() {
    for (let i; i < a.length; i++) {
        a[i].innerText = '';
    }
})

// welcome alert
// const alt = document.querySelector('#login1');
// const name1 = document.querySelector('#names');

// alt.addEventListener('click', function (welcome) {
//     console.log("hello")
//     console.log(name1.innerText)
//     alert(`Welcome ${name1.innerText},you are logged in successfully`)

// })

//login validation


const x = document.querySelector('#shwetha');

x.addEventListener('click', () => {
    let b = document.querySelectorAll("input")
    let count = 0;
    console.log(b[0].value)
    for (let i = 0; i < b.length; i++) {
        if (b[i].value === '') {

            count++
        }
    }
    console.log(count)
    if (count > 1) {
        alert("enter details")
    } else {
        console.log(count)
        Window.location.href = "home.html";
        //HOME PAGE LINK- C:\Users\Admin\Desktop\Bootcamp\PROJECT\home.html
    }

})




//doubt: welcome shwetha,you are loggedin
// login validation- home page