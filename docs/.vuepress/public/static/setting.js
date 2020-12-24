function resize() {
    let isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    let designWidth = isMobile ? 375 : 1920;
    document.documentElement.style.fontSize = document.documentElement.clientWidth / (designWidth / 100) + "px";
}

resize();
addEventListener("resize", resize);
