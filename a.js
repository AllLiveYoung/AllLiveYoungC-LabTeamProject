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



// 4번박스 생변경
gsap.to(fourthBox, {
    duration: 0.5,
    backgroundColor: "black",
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


// 헤더 배경 색깔 변경&실행 (1번 박스)
gsap.to(header, {
    duration: 0.5,
    backgroundColor: "#f2f2f2",
    scrollTrigger: {
        scroller: scrollContainer,
        trigger: firstBox,
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
    backgroundColor: "black",
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


// 다크모드 아이콘 색변경 (4번 박스)
gsap.to(darkMode, {
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


// 팀 로고 색 변경 (4번쨰 박스)
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