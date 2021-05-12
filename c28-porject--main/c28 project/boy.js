class Boy{
    constructor(x,y,w,h){
    var options={
        isStatic:true
    }
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.body=Bodies.rectangle(x,y,5,5,options)
    this.image=loadImage("boy.png")
    World.add(world,this.body)
}
display(){
    var groundPos=this.body.position
    imageMode(CENTER)
    image(this.image,groundPos.x,groundPos.y,this.w,this.h)
}
}