const firstIten = document.querySelector('.menu-nav li:first-of-type');
const list = document.querySelectorAll(".menu-nav li");
firstIten.classList.add('active');

for (let i = 0; i < list.length; i++) {
    list[i].onmouseover = function() {
        let i2 = 0;
        while (i2 < list.length) {
            list[i2++].classList.remove('active');
        } 
        list[i].classList.add('active');
    }

}