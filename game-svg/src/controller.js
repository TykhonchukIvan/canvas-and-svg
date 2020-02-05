function BallsSVG(svgObj){
    this.svg = document.getElementById(svgObj);
    let obj = this;
    this.svg.addEventListener('click', event => {
        obj.createBall(event);
        obj.createBall(event);
        obj.createBall(event);
    });
    this.items = this.svg.getElementsByTagName("circle");

}