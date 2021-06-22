class Ground {
    constructor(x,y,w,h){
        var body_options={
            isStatic:true
          }
          
            this.body = Bodies.rectangle(x,y,w,h,body_options);
            this.w=w;
            this.h=h;
            World.add(world,this.body);
        }
show(){
rectMode(CENTER) 
fill("blue")
rect(this.body.position.x,this.body.position.y,this.w,this.h);
}
}