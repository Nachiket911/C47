var home, gameState = 0, match, score = 0, typeIn;

function preload(){



}

function setup(){

    createCanvas(displayWidth -100, displayHeight -100);

    //console.log(displayWidth + "," + displayHeight);

    home = new HomeScreen();
    //console.log("1");
    home.display();

}   

function draw(){

    background("white");

    if(gameState === 1){
 
        //console.log("5");

        home.hide();
        // createElements();
        match.createElements();

        gameState = 2;
        //match.dragAndDrop();
        drawSprites();

    }

    if(gameState === 2){

        text(score + " coins", 500, 300)
        match.dragAndDrop();
        drawSprites();

    }

    if(score > 0){

        gameState = 3;
        
    }

    console.log(gameState); 

    if(gameState === 3){

        

        typeIn = new TypeIn();
        typeIn.display();
        gameState = null;

    }

}