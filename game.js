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
    } else if (this.surfer.choice === "Shark" && this.pirate.choice === "Crab" || this.pirate.choice === "Turtle") {
      this.surfer.wins++;
      console.log("Surfer's up!");
      return true;
    } else if (this.surfer.choice === "Crab" && this.pirate.choice === "Octopus" || this.pirate.choice === "Turtle") {
      this.surfer.wins++;
      console.log("Surfer's up!");
      return true;
    } else if (this.surfer.choice === "Octopus" && this.pirate.choice === "Shark" || this.pirate.choice === "Mermaid") {
      this.surfer.wins++;
      console.log("Surfer's up!");
      return true;
    } else if (this.surfer.choice === "Turtle" && this.pirate.choice === "Crab" || this.pirate.choice === "Octopus") {
      this.surfer.wins++;
      console.log("Surfer's up!");
      return true;
    } else if (this.surfer.choice === "Mermaid" && this.pirate.choice === "Shark" || this.pirate.choice === "Turtle") {
      this.surfer.wins++;
      console.log("Surfer's up!");
      return true;
    }
    this.pirate.wins++;
    console.log("I got your booty!");
    return false
  }
}
