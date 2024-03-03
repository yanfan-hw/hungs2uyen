const preloader = (delayTime = 450) => {
    const divBody = document.body;
    setTimeout(() => {
        divBody.style.overflow = 'visible';
    }, delayTime);
    const divPreLoader = document.getElementById('preloader-active');
    const fadeOut = setInterval(() => {
        if(!divPreLoader.style.opacity) {
            divPreLoader.style.opacity = 1;
        }
        if(divPreLoader.style.opacity > 0) {
            divPreLoader.style.opacity -= .1;
        } else {
            divPreLoader.style.display = 'none';
            clearInterval(fadeOut);
        }
    }, 200);
}
export default preloader;