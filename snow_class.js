class Snow{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,this.r, options);
        this.r=18
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      repeat(){
           if(this.body.position.y > 650){
                Matter.Body.setPosition(this.body,{
                    x:random(0,1200), y:random(-50,600)})
                 } 
                }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r);
        pop();
      }
}