var bg = function(game) {
    this.game = game;
    this.bg = null;
    this.imgLoad = false;
    this.img =null;
    this.x = 0;
    this.y= 300;
    var self = this;

    this.init= function() {
        self.img = new Image();
        self.img.onload = function() {
            self.imgLoad = true;
        }
        self.img.src = "./img/background-day.png";
    }   
    this.update = function() {
        this.x--;
        if(this.x == -(game.width) ) {
            this.x=0;
        }
    }
    this.draw = function() {
        if(self.imgLoad) {
            self.game.context.drawImage(self.img, this.x,0);
            self.game.context.drawImage(self.img, this.x+game.width,0);
        }
    }   

}