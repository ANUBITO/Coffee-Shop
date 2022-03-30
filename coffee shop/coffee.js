window.onload = setTimeout(function () {
    document.querySelector('.loading').style.opacity = '0';
    setTimeout(function() {
        document.body.style.overflowY = 'scroll';
        document.querySelector('.loading').style.display = 'none';
    reveal();
    }, 500);
}, 4000);

const hiden = document.querySelectorAll(".hide");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(entry.target)
        })
    },
    {
        rootMargin: "-200px",
    }
)

hiden.forEach(element => {
    observer.observe(element)
})

function reveal() {
    document.querySelectorAll('.mainanimation').forEach(Element => {
        Element.style.opacity = '1';
    });
}

var nav = document.querySelector('.nav');

window.onscroll = function() {
    var top = window.scrollY;
    if(top <= 150 && burger == 0) {
        nav.style.backgroundColor = 'transparent';
    } else {
        nav.style.backgroundColor = 'black';
    }
}

const burgerbtn = document.querySelector('.burger');
const burgermenu = document.querySelector('.burgermenu');

var burger = 0;

var root = document.documentElement;

burgerbtn.addEventListener('click', function () {
    if(burgermenu.style.display == 'none') {
        burgermenuon();
    } else {
        burgermenuoff();
    }
});

document.querySelectorAll('.burgermenu a').forEach(element => {
    element.addEventListener('click', function() {
        burgermenuoff();
    });
});

function burgermenuon() {
    burger = 1;
    burgermenu.style.display = 'flex';
    setTimeout(function() {
    burgermenu.style.height = '300px';
    burgermenu.style.opacity = '1';
    }, 300);
    nav.style.backgroundColor = 'black';

}

function burgermenuoff() {
    burger = 0;
    burgermenu.style.height = '0px';
    burgermenu.style.opacity = '0';
    setTimeout(function() {
        burgermenu.style.display = 'none';
    }, 1000);
}