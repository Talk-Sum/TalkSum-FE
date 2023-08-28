/* EXPANDER MENU */
const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)

    if( toggle && navbar ) {
        toggle.addEventListener('click', ()=>{
            navbar.classList.toggle('expander');

            bodypadding.classList.toggle('body-pd')
        })
    }
}

showMenu('nav-toggle', 'navbar', 'body-pd')

/* LINK ACTIVE */
const linkColor = document.querySelectorAll('.nav__link')
function colorLink() {
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

/* COLLAPSE MENU */
const linkCollapse = document.getElementsByClassName('collapse__link')
var i

for(i=0;i<linkCollapse.length;i++) {
    linkCollapse[i].addEventListener('click', function(){
        const collapseMenu = this.nextElementSibling
        collapseMenu.classList.toggle('showCollapse')

        const rotate = collapseMenu.previousElementSibling
        rotate.classList.toggle('rotate')
    });
}


/*컨텐츠 메뉴*/
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav__link');
    const contents = document.querySelectorAll('.content');

    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // 모든 컨텐츠와 메뉴의 활성화 상태를 제거
            contents.forEach(content => {
                content.classList.remove('active');
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // 클릭한 메뉴에 해당하는 컨텐츠와 메뉴 활성화
            contents[index].classList.add('active');
            this.classList.add('active');
        });
    });
});

// 노트만들기 버튼 숨기기
const navToggle = document.getElementById('nav-toggle');
const createNoteBtn = document.getElementById('create-note-btn');

navToggle.addEventListener('click', () => {
    createNoteBtn.classList.toggle('hidden');
});

// 모달
document.addEventListener('DOMContentLoaded', function() {
    // 메뉴 확장
    const toggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');
    const bodyPadding = document.getElementById('body-pd');
    toggle.addEventListener('click', ()=>{
        navbar.classList.toggle('expander');
        bodyPadding.classList.toggle('body-pd');
    });

    // 메뉴 항목 클릭 시, 컨텐츠 표시
    const navLinks = document.querySelectorAll('.nav__link');
    const contents = document.querySelectorAll('.content');
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            contents.forEach(content => content.classList.remove('active'));
            this.classList.add('active');
            if (index < contents.length) contents[index].classList.add('active');
        });
    });
});
