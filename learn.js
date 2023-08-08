const box = document.querySelector('.box');
const btn = document.querySelector('.btn');


function myAnimation() {
    let poll = 0;

    const id = setInterval(goBox, 10);
    function goBox() {
        if (poll == 300) {
            clearInterval(id);
        } else {
            poll++
            box.style.top = poll + 'px';
            box.style.left = poll + 'px';
        }
    }    
}


btn.addEventListener('click', myAnimation)