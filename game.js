var game = function() {
    this.bird = null;
    this.bg = null;
    this.canvas = null;
    this.context = null;
    this.bird = null;
    this.height = 512;
    this.width = 288;
    this.gameOver = false;
    this.ground = null;
    this.column = null;



    var self = this;
    
    this.init = function() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.height = self.height;
        this.canvas.width = self.width;
        document.body.appendChild(self.canvas);
        // bird
        this.bird = new bird(self);
        this.bird.init();

        // bg
        this.bg = new bg(self);
        this.bg.init();

        //ground
        this.ground = new ground(self);
        this.ground.init();

        //column
        this.column = new column(self);
        this.column.init();

        this.bird.flap();
        
        this.loop();
    }
    this.loop = function()  {
        self.update();
        self.draw();
        if(self.bird.x+34 >= self.column.x && self.bird.x <= self.column.x + 52) {
            if( self.bird.y <=self.column.y-125 || self.bird.y +24>= self.column.y) {
                self.dropBird();
            }
        }
        if(self.gameOver) {
            
            return;
        }
        setTimeout(self.loop, 30);
    }
    this.dropBird = function() {
        self.bird.drop();
    }
    this.update = function() {
        self.bg.update();
        self.column.update();
        self.ground.update();
        self.bird.update();

    }
    this.draw = function() {
        self.bg.draw();
        self.column.draw();
        self.ground.draw();
        self.bird.draw();
    }
}
var g = new game();
g.init();