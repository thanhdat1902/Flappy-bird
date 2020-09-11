var game = function () {
    this.bird = null;
    this.bg = null;
    this.canvas = null;
    this.context = null;
    this.bird = null;
    this.height = 512;
    this.width = 288;
    this.distance = 110;
    this.score = null;
    this.gameOver = false;
    this.ground = null;
    this.column = null;
    this.notificate = null;


    var self = this;

    this.init = function (cb) {
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

        //score
        this.score = new score(self);
        this.score.init();

        //game-over
        this.notificate = new Notificate(self);
        this.notificate.init();

        this.bird.flap();

        this.loop(cb);
    }
    this.drop = function() {
        if (self.bird.y >= 400 - 24) {
            self.notificate.draw();
            return;
        }
        self.bird.update();
        self.draw();
        self.notificate.draw();
        setTimeout(self.drop, 30);
    }
    this.loop = function (cb) {
        console.log(cb)
        self.update();
        self.draw();
        // Detect collision

        // if (self.bird.x + self.bird.width >= self.column.x && self.bird.x <= self.column.x + self.column.width) {
        //     if (self.bird.y <= self.column.y - self.distance || self.bird.y + self.bird.height >= self.column.y) {
        //         self.gameOver = true;
        //     }
        // }
        if (self.gameOver) {
            console.log(cb)
            cb();
            return;
        }
        setTimeout(self.loop, 30,cb);
    }
    this.update = function () {
        self.bg.update();
        self.column.update();
        self.ground.update();
        self.score.update();
        self.bird.update();

    }
    this.draw = function () {
        self.bg.draw();
        self.column.draw();
        self.ground.draw();
        self.score.draw();
        self.bird.draw();
    }
}
var g = new game();
g.init( ()=> {
    g.drop();
});

