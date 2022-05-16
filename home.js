const x = document.querySelector('#marquees')

function delayColorChange(newColor, delay, doNext) {
    setTimeout(() => {
        x.style = `background-Color:${newColor}`;
        doNext && doNext();
    }, delay);
}


for (let i = 1; i < 10; i++) {
    delayColorChange('red', 1000, () => {
        delayColorChange('yellow', 1000, () => {
            delayColorChange('green', 1000, () => {
                delayColorChange('blue', 1000, () => {
                    delayColorChange('violet', 1000, () => {

                    })
                })
            })
        })
    })
}

