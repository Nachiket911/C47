class TypeIn{

    constructor(){

        this.wImage = loadImage("water.png");
        this.mghoImage = loadImage("mag_hydrox.png");

        this.water = createSelect();
        this.mgho =  createSelect();

    }

    display(){

        //console.log(this.wImage);
        background("white");
        
        imageMode(CENTER);
        image(this.wImage, 300, 300, 100, 100);
        image(this.mghoImage, 500, 300, 100, 100);

        this.water.position(300, 400);
        this.water.option("water");
        this.water.option("Magnesium Hydroxide");
        this.water.option("Glucose");
        this.water.option("Common Salt");
        this.water.option("Acetic acid");
        this.water.option("water t");

        this.mgho.position(500, 400);
        this.mgho.option("water");
        this.mgho.option("Magnesium Hydroxide");
        this.mgho.option("Glucose");
        this.mgho.option("Common Salt");
        this.mgho.option("Acetic acid");
        this.mgho.option("water t");

    }

}