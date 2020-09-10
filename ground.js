var ground = function(game) {
    this.game = game;
    this.bg = null;
    this.imgLoad = false;
    this.img =null;
    this.x = 0;
    this.y=400;
    var self = this;

    this.init= function() {
        self.img = new Image();
        self.img.onload = function() {
            self.imgLoad = true;
        }
        self.img.src = "./img/base.png";
    }   
    this.update = function() {
        this.x-=4;
        if(this.x == -(game.width) ) {
            this.x=0;
        }
    }
    this.draw = function() {
        if(self.imgLoad) {
            self.game.context.drawImage(self.img, this.x,this.y);
            self.game.context.drawImage(self.img, this.x+game.width,this.y);
        }
    }   

}