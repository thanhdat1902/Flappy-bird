var score = function(game) {
    this.game = game;
    this.images = [];
    this.onLoad = Array(10).fill(false);
    this.currentScore = 0;

    var self = this;

    this.init = function() {
        for(let i=0; i <10; i++) {
            let img = new Image();
            img.onload = function() {
                self.onLoad[i] = true;
            }
            img.src = `./img/${i}.png`;
            self.images.push(img);
        }
    }
    this.update = function() {
        var columnX = game.column.x + game.column.width;
        if(self.game.bird.x === columnX) {
            console.log(123);
            self.currentScore++;
        }
    }
    this.draw = function() {
        if( (self.onLoad.map(elm => elm===true)).length === 10) {
            let sNum = self.currentScore.toString();
            for(let i=0; i< sNum.length; i++) {
                self.game.context.drawImage(self.images[parseInt(sNum[i])], 10+i*24,10);
            }
        }
    }
    
}