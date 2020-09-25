   
      class Bob {
        constructor(x, y,r) {
          var options = {
            isStatic:false,
              restitution:1,
            friction:0.75,
            density:0.4,
              frictionAir:0
          }
          this.x=x;
          this.y=y;
          this.r=r;
          this.body=Bodies.circle(this.x, this.y, this.r, options)
          World.add(world, this.body);
        }
        display(){
          var pos=this.body.position;		

          strokeWeight(3)
          fill(255,0,255)
          ellipseMode(CENTER)
          ellipse(pos.x,pos.y,60,60);
          
        }
      };
      
  
  