var column = function(game) {
    this.game = game;
    this.bg = null;
    this.imgLoad = false;
    this.imgLoad1= false;
    this.img =null;
    this.img1= null;
    this.x = 500;
    this.y= Math.floor(Math.random()*200 +190);
    var self = this;

    this.init= function() {
        self.img = new Image();
        self.img.onload = function() {
            self.imgLoad = true;
        }
        self.img1 = new Image();
        self.img1.onload = function() {
            self.imgLoad1 = true;
        }
        self.img.src = "./img/pipe-green.png";
        self.img1.src = "./img/reverse-pipe-green.png";

    }   
    this.update = function() {
        this.x-=4;
        if(this.x == -52) {
            this.x= 288;
            self.y = Math.floor(Math.random()*200 +170)
        }
    }
    this.draw = function() {
        if(self.imgLoad) {
            self.game.context.drawImage(self.img1, this.x,self.y-125-320);
            self.game.context.drawImage(self.img, this.x,self.y); 
        }
    }   

}