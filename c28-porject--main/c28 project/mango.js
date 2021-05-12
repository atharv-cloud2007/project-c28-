class Mango
 {
    constructor(x,y,width,height) {
      var options = {
           isStatic:true,
          'restitution':0.1,
          'friction':1.1,
          'density':1.2
      }
      this.width=width
      this.height=height 
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("mango.png")
      World.add( world,this.body);
     
    }
    display(){
      var pos=this.body.position
      imageMode(CENTER)
      image(this.image,pos.x,pos.y,this.width,this.height)
    }
  };