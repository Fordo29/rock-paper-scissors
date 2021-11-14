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
    if (this.surfer.choice === this.pirate.choice) {
      console.log("A parley is in progress and the invaders may withdraw (aka TIE)");
      return true;
    } else if (this.surfer.choice === "shark" && this.pirate.choice === "crab" || this.pirate.choice === "turtle") {
      this.surfer.wins++;
      console.log("Surfer's up!");
      return true;
    } else if (this.surfer.choice === "crab" && this.pirate.choice === "octopus" || this.pirate.choice === "turtle") {
      this.surfer.wins++;
      console.log("Surfer's up!");
      return true;
    } else if (this.surfer.choice === "octopus" && this.pirate.choice === "shark" || this.pirate.choice === "mermaid") {
      this.surfer.wins++;
      console.log("Surfer's up!");
      return true;
    } else if (this.surfer.choice === "turtle" && this.pirate.choice === "crab" || this.pirate.choice === "octopus") {
      this.surfer.wins++;
      console.log("Surfer's up!");
      return true;
    } else if (this.surfer.choice === "mermaid" && this.pirate.choice === "shark" || this.pirate.choice === "turtle") {
      this.surfer.wins++;
      console.log("Surfer's up!");
      return true;
    }
    this.pirate.wins++;
    console.log("I got your booty!");
    return false
  }
}
