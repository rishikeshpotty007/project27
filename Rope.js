class Rope{
    constructor(bodyA,bodyB,offSetX,offSetY){
      this.offSetX=offSetX
      this.offSetY=offSetY

       var options = {
         bodyA:bodyA,
         bodyB:bodyB,
         pointB:{x:this.offSetX , y:this.offSetY}
       }
       this.rope = Matter.Constraint.create(options);
       World.add(world,this.rope);
    }
    display(){
     var pointA = this.chain.bodyA.position;
     var pointB = this.chain.bodyB.position;
     strokeWeight(2);
     line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}