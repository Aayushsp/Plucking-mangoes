class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);

        this.r = radius;

        this.image = loadImage("mango.png");
    }
    display(){
        var pos = this.body.position;

        image(this.image, pos.x, pos.y, this.r*2, this.r*2);
    }
}