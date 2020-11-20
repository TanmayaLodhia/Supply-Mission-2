class box{
    constructor(x,y,width,height){
        var options={
            restitution:0
            
        }
        this.body=Bodies.rectangle(x,y,width,height)
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill(255,0,0);
        rect(pos.x,pos.y,this.width,this.height);
    }
};