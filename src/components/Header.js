import React, { useEffect } from 'react';
import './Header.css';
import Typed from 'typed.js';
function Header() {
    // useEffect(() => {
    //     class TxtType {
    //         constructor(el, toRotate, period) {
    //             this.toRotate = toRotate;
    //             this.el = el;
    //             this.loopNum = 0;
    //             this.period = parseInt(period, 10) || 2000;
    //             this.txt = '';
    //             this.tick();
    //             this.isDeleting = false;
    //         }

    //         tick() {
    //             const i = this.loopNum % this.toRotate.length;
    //             const fullTxt = this.toRotate[i];

    //             if (this.isDeleting) {
    //                 this.txt = fullTxt.substring(0, this.txt.length - 1);
    //             } else {
    //                 this.txt = fullTxt.substring(0, this.txt.length + 1);
    //             }

    //             // Split text into letters and wrap each letter with a span
    //             let wrappedTxt = '';
    //             for (let char of this.txt) {
    //                 wrappedTxt += `<span class="animated-letter">${char}</span>`;
    //             }

    //             this.el.innerHTML = `<span class="wrap">${wrappedTxt}</span>`;

    //             let delta = 200 - Math.random() * 100;

    //             if (this.isDeleting) { delta /= 2; }

    //             if (!this.isDeleting && this.txt === fullTxt) {
    //                 delta = this.period;
    //                 this.isDeleting = true;
    //             } else if (this.isDeleting && this.txt === '') {
    //                 this.isDeleting = false;
    //                 this.loopNum++;
    //                 delta = 500;
    //             }

    //             setTimeout(() => this.tick(), delta);
    //         }
    //     }

    //     const elements = document.getElementsByClassName('typewrite');
    //     for (let i = 0; i < elements.length; i++) {
    //         const toRotate = elements[i].getAttribute('data-type');
    //         const period = elements[i].getAttribute('data-period');
    //         if (toRotate) {
    //             new TxtType(elements[i], JSON.parse(toRotate), period);
    //         }
    //     }
    // }, []);

    const animeElement = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(animeElement.current, {
            strings: ['Sai Kumar Reddy Vuyyuru.', ' a Software Developer.', ' a Freelancer.'],
            typeSpeed: 80,
            backSpeed: 80,
            loop: true,
            loopCount: Infinity
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);


    return (
        <div className="Header">
            <div className="Name">
                <h2 className='header2'>
                    <div className="Wave">👋🏻</div>&nbsp;&nbsp;
                    <div className='welcome'>Welcome</div>
                </h2>
            </div>
            <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
            <div className='animeDiv'>
                <h2 className='anime'>
                    I'm &nbsp;
                    <span aria-selected='true' ref={animeElement}/> 
                </h2>
                <br/>
                {/* <h2 className='based'>based in New Jersey, United States</h2> */}
            </div>
        </div>
        
    );
}

export default Header;
