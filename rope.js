class Rope
{ constructor(body1 , body2, offsetX,offsetY)
    { this.offsetX=offsetX 
    this.offsetY=offsetY
var options = { bodyA: body1, bodyB: body2,
             pointB : {x:this.offsetX,y:this.offsetY} ,
             length : 400,
             stiffness : 0.4
            
            } 
             this.body=Constraint.create(options)
              World.add(world,this.body); }
 display(){ 
                   line(this.body.bodyA.position.x ,
                    this.body.bodyA.position.y,
                     this.body.bodyB.position.x + this.offsetX,
 this.body.bodyB.position.y+this.offsetY) } 

}


