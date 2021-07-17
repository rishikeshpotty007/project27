class Roof
{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:true           
        }
        this.w=w
        this.h=h
        this.body=Bodies.rectangle(x, y, w, h , options);
        World.add(world, this.body);

    }
    display()
    {
            
            var groundPos=this.body.position;       

            push()
            rectMode(CENTER)
            fill(255,255,0)
            rect(this.body.position.x,this.body.position.y,this.width,this.height);
            pop()
            
    }

}
