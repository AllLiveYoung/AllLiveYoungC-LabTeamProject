let t = 0
bar.style.width = 0
const barAnimation = setInterval(() => {
    bar.style.width= t + '%'
    t++ >= totaIMinwon && clearInterval(barAnimation)
}, 10)