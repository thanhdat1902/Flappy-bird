var Notificate = function(game) {
    this.game = game;
    this.img = null;
    this.imgLoad = false;

    var self = this;

    this.init = function() {
        this.img = new Image();
        this.img.onload = function() {
            self.imgLoad = true;
        }
        this.img.src = "./img/gameover.png"
    }
    this.update = function() {

    }
    this.draw = function() {
        if(self.imgLoad) {
            self.game.context.drawImage(self.img,50,200);
        }
    }

}