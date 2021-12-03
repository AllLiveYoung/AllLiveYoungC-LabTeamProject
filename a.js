const scrollContainer = document.querySelector("#scroll_container");

const firstBox = document.getElementById("first_arr");
const secondBox = document.getElementById("second_arr");
const thirdBox = document.getElementById("third_arr");
const fourthBox = document.getElementById("fourth_arr");
const fifthBox = document.getElementById("fifth_arr");

const links = document.getElementsByClassName("aLinks");
const linkDots = document.getElementsByClassName("contents");

const header = document.getElementById("main_header");
const brandName = document.getElementById("brand_name");
const menuIcon = document.getElementsByClassName("fas fa-bars");
const darkMode = document.getElementsByClassName("fas fa-moon");



// 4번박스 색변경
gsap.to(fourthBox, {
    duration: 0.5,
    backgroundColor: "black",
    scrollTrigger: {
        scroller: scrollContainer,
        trigger: fourthBox,
        toggleActions: "play reverse play reverse",
        scrub: true,
        start: "center bottom",
        end: "200px 200px",
        // markers: true,
    }
});


// contents 텍스트 색변경 (4번 박스)
gsap.to(links, {
    duration: 0.3,
    color: "white",
    scrollTrigger: {
        scroller: scrollContainer,
        trigger: fourthBox,
        toggleActions: "play reverse play reverse",
        // scrub: true,
        start: "center bottom",
        end: "center top",
        // markers: true,
    }
});


// li 태그 점 색변경 (4번 박스)
gsap.to(linkDots, {
    duration: 0.3,
    color: "white",
    scrollTrigger: {
        scroller: scrollContainer,
        trigger: fourthBox,
        toggleActions: "play reverse play reverse",
        // scrub: true,
        start: "center bottom",
        end: "center top",
        // markers: true,
    }
});


// 메뉴 아이콘 색변경 (4번 박스)
gsap.to(menuIcon, {
    duration: 0.5,
    color: "white",
    scrollTrigger: {
        scroller: scrollContainer,
        trigger: fourthBox,
        toggleActions: "play reverse play reverse",
        // scrub: true,
        start: "center bottom",
        end: "center top",
        // markers: true,
    }
});





// 헤더 배경 색깔 변경 (4번 박스)
gsap.to(header, {
    duration: 0.5,
    color: "white",
    scrollTrigger: {
        scroller: scrollContainer,
        trigger: fourthBox,
        toggleActions: "play reverse play reverse",
        // scrub: true,
        start: "center bottom",
        end: "center top",
        // markers: true,
    }
});


// 팀 로고 색 변경 (4번째 박스)
gsap.to(brandName, {
    duration: 0.5,
    color: "white",
    scrollTrigger: {
        scroller: scrollContainer,
        trigger: fourthBox,
        toggleActions: "play reverse play reverse",
        // scrub: true,
        start: "center bottom",
        end: "center top",
        // markers: true,
    }
});

gsap.fromTo(header, {backgroundColor: "#727272"}, {
    duration: 0.5,
    backgroundColor: "white",
    scrollTrigger: {
        scroller: scrollContainer,
        trigger: secondBox,
        // toggleActions: "play none reverse reverse",
        scrub: true,
        start: "bottom center",
        end: "bottom top",
        // markers: true,
    }
});

gsap.fromTo(header, {backgroundColor: "white"}, {
    duration: 0.5,
    backgroundColor: "black",
    scrollTrigger: {
        scroller: scrollContainer,
        trigger: thirdBox,
        // toggleActions: "play none reverse reverse",
        scrub: true,
        start: "bottom center",
        end: "bottom top",
        // markers: true,
    }
});

gsap.fromTo(header, {backgroundColor: "black"}, {
    duration: 0.5,
    backgroundColor: "white",
    scrollTrigger: {
        scroller: scrollContainer,
        trigger: fourthBox,
        // toggleActions: "play none reverse reverse",
        scrub: true,
        start: "bottom center",
        end: "bottom top",
        // markers: true,
    }
});

gsap.fromTo(header, {backgroundColor: "#f2f2f2"}, {
    duration: 0.5,
    backgroundColor: "#727272",
    scrollTrigger: {
        scroller: scrollContainer,
        trigger: firstBox,
        // toggleActions: "play none reverse reverse",
        scrub: true,
        start: "bottom center",
        end: "bottom top",
        // markers: true,
    }
});



(function () {

    // VARIABLES
    const timeline = document.querySelector(".timeline ol"),
        elH = document.querySelectorAll(".timeline li > div"),
        arrows = document.querySelectorAll(".timeline .arrows .arrow"),
        arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
        arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
        firstItem = document.querySelector(".timeline li:first-child"),
        lastItem = document.querySelector(".timeline li:last-child"),
        xScrolling = 280,
        disabledClass = "disabled";

    // START
    window.addEventListener("load", init);

    function init() {
        setEqualHeights(elH);
        animateTl(xScrolling, arrows, timeline);
        setSwipeFn(timeline, arrowPrev, arrowNext);
        setKeyboardFn(arrowPrev, arrowNext);
    }

    // SET EQUAL HEIGHTS
    function setEqualHeights(el) {
        let counter = 0;
        for (let i = 0; i < el.length; i++) {
            const singleHeight = el[i].offsetHeight;

            if (counter < singleHeight) {
                counter = singleHeight;
            }
        }

        for (let i = 0; i < el.length; i++) {
            el[i].style.height = `${counter}px`;
        }
    }

    // CHECK IF AN ELEMENT IS IN VIEWPORT
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // SET STATE OF PREV/NEXT ARROWS
    function setBtnState(el, flag = true) {
        if (flag) {
            el.classList.add(disabledClass);
        } else {
            if (el.classList.contains(disabledClass)) {
                el.classList.remove(disabledClass);
            }
            el.disabled = false;
        }
    }

    // ANIMATE TIMELINE
    function animateTl(scrolling, el, tl) {
        let counter = 0;
        for (let i = 0; i < el.length; i++) {
            el[i].addEventListener("click", function () {
                if (!arrowPrev.disabled) {
                    arrowPrev.disabled = true;
                }
                if (!arrowNext.disabled) {
                    arrowNext.disabled = true;
                }
                const sign = (this.classList.contains("arrow__prev")) ? "" : "-";
                if (counter === 0) {
                    tl.style.transform = `translateX(-${scrolling}px)`;
                } else {
                    const tlStyle = getComputedStyle(tl);
                    // add more browser prefixes if needed here
                    const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
                    const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
                    tl.style.transform = `translateX(${values}px)`;
                }

                setTimeout(() => {
                    isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
                    isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
                }, 1100);

                counter++;
            });
        }
    }

    // ADD SWIPE SUPPORT FOR TOUCH DEVICES
    function setSwipeFn(tl, prev, next) {
        const hammer = new Hammer(tl);
        hammer.on("swipeleft", () => next.click());
        hammer.on("swiperight", () => prev.click());
    }

    // ADD BASIC KEYBOARD FUNCTIONALITY
    function setKeyboardFn(prev, next) {
        document.addEventListener("keydown", (e) => {
            if ((e.which === 37) || (e.which === 39)) {
                const timelineOfTop = timeline.offsetTop;
                const y = window.pageYOffset;
                if (timelineOfTop !== y) {
                    window.scrollTo(0, timelineOfTop);
                }
                if (e.which === 37) {
                    prev.click();
                } else if (e.which === 39) {
                    next.click();
                }
            }
        });
    }

})();