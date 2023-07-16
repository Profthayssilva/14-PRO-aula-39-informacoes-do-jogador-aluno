class Player {
  constructor() {
//  Defina o valor inicial de addPlayer() para positionX e positionY
   
    
    
    
  }

   addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
    });
  }
  // Crie getDistance() em player.js e depois crie as variáveis
  getDistance() {
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", data => {
      var data = data.val();
     
      
    });
  }
 

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  //Bp
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  // Crie uma função update()
  update() {
    
    database.ref(playerIndex).update({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
     });
  }

  // Crie um getPlayerInfo() estático
  static getPlayersInfo() {
    
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }
} 
