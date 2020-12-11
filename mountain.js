/** Mountain Class. Contains the Coordinate of the apex and the angle of its sides.
 */

class Mountain {
    /* Takes the coordinate of its apex */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // start with a 45 degree angle
        this.leftFoot = this.x - (canvas.height - this.y); 
        this.rightFoot = this.x + (canvas.height - this.y); 
        this.shadowFoot = this.x - ((canvas.height - this.y) * 0.3);
        this.completed = false;
    }

    complete() {
        this.completed = true;
    }

    /* ctx: CanvasRenderingContext2D */
    draw(ctx) {
        // good practice to save/restore the ctx settings when you change them
        ctx.save();
        ctx.lineWidth = 3;
        ctx.globalAlpha = this.completed ? 1 : 0.3;
        ctx.fillStyle = "white"; // pro tip: you can also use hexcodes for colors

        // draw mountain
        ctx.beginPath();
        ctx.moveTo(this.leftFoot, canvas.height);
        ctx.lineTo(this.x, this.y);
        ctx.lineTo(this.rightFoot, canvas.height);
        ctx.stroke(); 
        ctx.fill();
        
        // draw shadow
        ctx.lineWidth = 1;
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(this.leftFoot, canvas.height);
        ctx.lineTo(this.x, this.y);
        ctx.lineTo(this.shadowFoot, canvas.height);
        ctx.stroke(); 
        ctx.fill();
    
        ctx.restore();
    }
}