const allsections = document.querySelector('.main-content');
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');

function PageTranition() {
    // change the active button css
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }

    // change of section 
    allsections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // remove selected from other buttons
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            // hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }

    })

}

PageTranition();


function white() {
    body.className = 'white';
}

function dark() {
    body.className = 'dark';
}
