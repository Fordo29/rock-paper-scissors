class Game {
  constructor() {
    this.surfer = new Player("Surfer", "./assets/surfer.png");
    this.pirate = new Player("Pirate", "‍./assets/pirate.png");
    this.type = "";
    //type is spicy or regular

  }

  // determineGameType(){
  //   this.type = "";
  //   // if (this.type === "Classic") {
  //   //   var classicFighters = ["Shark", "Crab", "Octopus"];
  //   // } else if (this.type === "Spicy") {
  //   //   var spicyFighters = ["Shark", "Crab", "Octopus", "Turtle", "Mermaid"];
  //   // }
  // }

  determineWinner() {
    this.surfer.takeTurn(this.type, this.surfer.choice);
    this.pirate.takeTurn(this.type);
    this.surfer.wins = this.surfer.retrieveWinsFromStorage() || 0;
    this.pirate.wins = this.pirate.retrieveWinsFromStorage() || 0;
    if (this.surfer.choice === this.pirate.choice) {
      console.log("A parley is in progress and the invaders may withdraw (aka TIE)");
    } else if (this.surfer.choice === "shark" && this.pirate.choice === "crab" || this.pirate.choice === "turtle") {
      this.surfer.wins++;
      console.log("Surfer's up!");
    } else if (this.surfer.choice === "crab" && this.pirate.choice === "octopus" || this.pirate.choice === "turtle") {
      this.surfer.wins++;
      console.log("Surfer's up!");
    } else if (this.surfer.choice === "octopus" && this.pirate.choice === "shark" || this.pirate.choice === "mermaid") {
      this.surfer.wins++;
      console.log("Surfer's up!");
    } else if (this.surfer.choice === "turtle" && this.pirate.choice === "crab" || this.pirate.choice === "octopus") {
      this.surfer.wins++;
      console.log("Surfer's up!");
    } else if (this.surfer.choice === "mermaid" && this.pirate.choice === "shark" || this.pirate.choice === "turtle") {
      this.surfer.wins++;
      console.log("Surfer's up!");
    }
    this.pirate.wins++;
    console.log("I got your booty!");
    this.surfer.saveWinsToStorage();
    this.pirate.saveWinsToStorage();
  }

}
