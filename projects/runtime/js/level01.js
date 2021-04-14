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
        game.setDebugMode(true);

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

        createSawBlade(1000, 320);
        createSawBlade(3700, 320);
        createSawBlade(2500, 320);
        createSpikes(1800,440);
        createSpikes(3000,440);
        createSpikes(4500,440);

        
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
