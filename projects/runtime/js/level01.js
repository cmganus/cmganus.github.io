var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            /*"gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
                
            ]*/
        };

        // 



        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        
        
        
        function createSawBlade(x, y){

            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);    
            
            var obstacleImage = draw.bitmap('img/sawblade.png');
            sawBladeHitZone.addChild(obstacleImage);
            
            obstacleImage.x = -25;
            obstacleImage.y = -25;

        }

         function createSpikes(x, y){

            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);    
            
            var obstacleImage = draw.bitmap('img/spikes.png');
            sawBladeHitZone.addChild(obstacleImage);
            
            obstacleImage.x = -25;
            obstacleImage.y = -25;

        }

        createSawBlade(1000, groundY - 120);
        createSawBlade(3700, groundY - 120);
        createSawBlade(2500, groundY - 120);
        createSawBlade(4100, groundY - 120);
        createSawBlade(5500, groundY - 120);
        createSawBlade(6500, groundY - 120);

        createSpikes(1800, groundY - 0);
        createSpikes(3000,groundY - 0);
        createSpikes(4500,groundY - 0);
        createSpikes(5100, groundY - 0);
        createSpikes(6000,groundY - 0);
        createSpikes(6800,groundY - 0);

        
        for (var i = 0; i < levelData.gameItems.length; i++) {
          var gameItemObject = levelData.gameItems[i];
            var firstX = gameItemObject.x;
            var firstY = gameItemObject.y;
            var firstType = gameItemObject.type;
            if (firstType === 'sawblade') {
                createSawBlade(firstX, firstY); 

            }
            
           /*  if (gameItemObject.type === 'spikes') {
                createSawBlade(gameItemObject.x. gameItemObject.y); 
            }
            
            */

    

        // DO NOT EDIT CODE BELOW HERE  video stopped at 49 minutes. TODO 7 ^^ //
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
}
