class Spaceship2 extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame, pointValue);
        scene.add.existing(this);
        this.points = pointValue;
            this.moveSpeed = 7;


    }

    update(){
        //move spaceship left
        this.x -= this.moveSpeed;

        //wrap aroudn from left edge to the right edge
        if(this.x <= 0 - this.width){
            this.x = game.config.width

        }
    }

    //reset position
    reset(){
        this.x = game.config.width

    }




}