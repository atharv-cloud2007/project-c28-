function isTouching(ob1,ob2){
    if(ob1.width/2+ob2.width/2>ob2.body.position.x-ob1.body.position.x 
        || ob1.length/2+ob2.length/2>ob2.body.position.y-ob1.body.position.y
        || ob1.width/2+ob2.width/2>ob1.body.position.x-ob2.body.position.x
        || ob1.length/2+ob2.length/2>ob1.body.position.y-ob2.body.position.y
        ){
        return true
    }
    
}

