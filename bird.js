var bird = function(game) {
    this.game = game;
    this.width = 34;
    this.height = 24;
    this.images = [];
    this.imgLoad = false;
    this.img1Load = false;
    this.img2Load = false;
    this.currentImage = null;
    this.imageIndex = 0;
    this.count=0;
    this.y = 0;
    this.speed =0;
    this.accelerate = 1;
    this.angle=0;
    this.x = 20;

    var self =this;

    this.init = function() {
        var img = new Image();
        var img1 = new Image();
        var img2 = new Image();
        img.onload = function() {
            self.imgLoad = true;
        }
        img1.onload = function() {
            self.img1Load = true;
        }
        img2.onload = function() {
            self.img2Load =true;
        }
        img.src = "./img/redbird-upflap.png";
        img1.src = "./img/redbird-midflap.png";
        img2.src = "./img/redbird-downflap.png";
        self.images.push(img);
        self.images.push(img1);
        self.images.push(img2);
    }
    const elem = function() {
        self.speed= -12; 
        self.angle = -90;
    }
    this.flap = function() {
        self.game.canvas.addEventListener('click', elem);
    }
    
    this.update = function() {
        // Update speed for bird
        self.speed += self.accelerate;
        self.y+=self.speed;
        // Update angle of bird
        self.angle+=10;
        if(self.angle>90) self.angle = 90;
        //console.log(self.angle);

        // Check game over
        if(self.y >= 400-24) {
            self.y= 400-24;
            self.game.gameOver = true;
        }
        

        // Change image
        if(  (self.imgLoad && self.img1Load && self.img2Load)==false ) return;
        if(self.count %10 === 0) {
            if(self.imageIndex==3) self.imageIndex =0;
            self.currentImage = self.images[self.imageIndex];
            self.imageIndex++;
        }
        self.count++;
    }
    this.draw = function() {
        if(self.imgLoad && self.img1Load && self.img2Load) {
            var ctx =self.game.context; 
            ctx.drawImage(self.currentImage,this.x,this.y);
        }
    }
}