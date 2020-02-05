function BallsCanvas(canvasObj) {
    this.canvas = document.getElementById(canvasObj);
    this.context = this.canvas.getContext("2d");
    this.items = [];
    let obj = this;
    console.log(this.items);

    this.canvas.addEventListener('click', function (event) {
        obj.createBall(event);
    });
}