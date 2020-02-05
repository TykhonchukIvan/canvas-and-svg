BallsSVG.prototype.draw = function () {

    for (let i = 0; i < this.items.length; i++) {
        let x = +this.svg.getElementsByTagName("circle")[i].getAttribute("cx");
        let y = +this.svg.getElementsByTagName("circle")[i].getAttribute("cy");
        let dx = +this.svg.getElementsByTagName("circle")[i].getAttribute("dx");
        let dy = +this.svg.getElementsByTagName("circle")[i].getAttribute("dy");
        let R = +this.svg.getElementsByTagName("circle")[i].getAttribute("r");

        if (x + dx >= this.svg.clientWidth - R || x + dx <= R) {
            dx = -dx;
            this.svg.getElementsByTagName("circle")[i].setAttribute("dx", dx);
        }
        if (y + dy >= this.svg.clientHeight - R || y + dy <= R) {
            dy = -dy;
            this.svg.getElementsByTagName("circle")[i].setAttribute("dy", dy);
        }
        x += dx;
        y += dy;
        this.svg.getElementsByTagName("circle")[i].setAttribute("cx", x);
        this.svg.getElementsByTagName("circle")[i].setAttribute("cy", y);

    }

};

BallsSVG.prototype.start = function () {
    setInterval(() => {
        this.draw()
    }, 10);
};

BallsSVG.prototype.createBall = function (event) {
    let bound = this.svg.getBoundingClientRect();
    let W = bound.width;
    let H = bound.height;
    let x = event.clientX - bound.left - this.svg.clientLeft;
    let y = event.clientY - bound.top - this.svg.clientTop;
    console.log(bound.width);
    let fi = this.getRandomInt(1, 360) * Math.PI / 180;
    let v = 1;
    let dx = Math.cos(fi) * v;
    let dy = Math.sin(fi) * v;
    let R = 15;

    if (x + R >= this.svg.clientWidth - R) {
        x = this.svg.clientWidth - R;
    }
    if (x + dx <= R) {
        x = R;
    }
    if (y + R >= this.svg.clientHeight - R) {
        y = this.svg.clientHeight - R;
    }
    if (y + dy <= R) {
        y = R;
    }
    let svgRect = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    svgRect.setAttributeNS(null, "cx", x);
    svgRect.setAttributeNS(null, "cy", y);
    svgRect.setAttributeNS(null, "r", R);
    svgRect.setAttributeNS(null, "dx", dx);
    svgRect.setAttributeNS(null, "dy", dy);
    svgRect.setAttributeNS(null, "fill", this.rndColor());

    document.querySelector("svg").appendChild(svgRect);
};

BallsSVG.prototype.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

BallsSVG.prototype.rndColor = function () {
    let color = '#2FC264';

    return color;
};

let startBalls = new BallsSVG("svgPlace");

startBalls.start();