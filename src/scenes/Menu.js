class Menu extends Phaser.Scene{

    constructor(){
        super("menuScene");
    }

    create(){
        this.add.text(20,20,"Rockektkee");
        this.scene.start("playScene");
    }

}


