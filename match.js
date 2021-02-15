class Match{

    constructor(){

        this.mrAtom = createSprite(100, 100, 20, 20);
        this.elements = [];
        this.symbols  = [];

    }

    createElements(){

        // console.log("6");

        var elem, yPos = displayHeight/2 - 100, sym;

        for(var i =0; i<=5; i++){

            elem = createSprite(20, yPos, 20, 20);
            this.elements.push(elem);

            yPos += 30;

        }

        yPos = displayHeight/2 - 100;

        for(var i =0; i<=5; i++){

            sym = createSprite(60, yPos, 20, 20);
            this.symbols.push(sym);

            yPos += 30;

        }

    }

    dragAndDrop(){
        if(mousePressedOver(this.elements[0])){
            this.elements[0].x = mouseX; 
            this.elements[0].y = mouseY; 
            if(this.elements[0].isTouching(this.symbols[5])){
                this.elements[0].remove();
                this.symbols[5].remove();
                score+= 30000;
            }
        }
        if(mousePressedOver(this.elements[1])){
            this.elements[1].x = mouseX; 
            this.elements[1].y = mouseY; 
            if(this.elements[1].isTouching(this.symbols[0])){
                this.elements[1].remove();
                this.symbols[0].remove();
                score+= 30000;
            }
        }
        if(mousePressedOver(this.elements[2])){
            this.elements[2].x = mouseX; 
            this.elements[2].y = mouseY; 
            if(this.elements[2].isTouching(this.symbols[4])){
                this.elements[2].remove();
                this.symbols[4].remove();
                score+= 30000;
            }
        }
        if(mousePressedOver(this.elements[3])){
            this.elements[3].x = mouseX; 
            this.elements[3].y = mouseY; 
            if(this.elements[3].isTouching(this.symbols[2])){
                this.elements[3].remove();
                this.symbols[2].remove();
                score+= 30000;
            }
        }
        if(mousePressedOver(this.elements[4])){
            this.elements[4].x = mouseX; 
            this.elements[4].y = mouseY; 
            if(this.elements[4].isTouching(this.symbols[3])){
                this.elements[4].remove();
                this.symbols[3].remove();
                score+= 30000;
            }
        }
        if(mousePressedOver(this.elements[5])){
            this.elements[5].x = mouseX; 
            this.elements[5].y = mouseY; 
            if(this.elements[5].isTouching(this.symbols[1])){
                this.elements[5].remove();
                this.symbols[1].remove();
                score+= 30000;
            }
        }
     }
}