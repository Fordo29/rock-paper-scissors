class Game {
  constructor() {
    this.surfer = new Player("Surfer", "./assets/surfer.png");
    this.pirate = new Player("Pirate", "‍./assets/pirate.png");
    this.type = "";
    this.winner = "";
    //type is spicy or regular

  }


  determineWinner() {
    this.surfer.takeTurn(this.type, this.surfer.choice);
    this.pirate.takeTurn(this.type);
    this.surfer.wins = this.surfer.retrieveWinsFromStorage() || 0;
    this.pirate.wins = this.pirate.retrieveWinsFromStorage() || 0;
    if (this.surfer.choice === this.pirate.choice) {
      console.log("A parley is in progress and the invaders may withdraw (aka TIE)");
      this.surfer.saveWinsToStorage();
      this.pirate.saveWinsToStorage();
      return true;
    } else if (this.surfer.choice === "shark" && this.pirate.choice === "crab" || this.pirate.choice === "turtle") {
      this.surfer.wins++;
      this.surfer.saveWinsToStorage();
      this.pirate.saveWinsToStorage();
      this.winner = this.surfer.name;
      console.log("Surf's up!");
      return true;
    } else if (this.surfer.choice === "crab" && this.pirate.choice === "octopus" || this.pirate.choice === "turtle") {
      this.surfer.wins++;
      this.surfer.saveWinsToStorage();
      this.pirate.saveWinsToStorage();
      this.winner = this.surfer.name;
      console.log("Surf's up!");
      return true;
    } else if (this.surfer.choice === "octopus" && this.pirate.choice === "shark" || this.pirate.choice === "mermaid") {
      this.surfer.wins++;
      this.surfer.saveWinsToStorage();
      this.pirate.saveWinsToStorage();
      this.winner = this.surfer.name;
      console.log("Surf's up!");
      return true;
    } else if (this.surfer.choice === "turtle" && this.pirate.choice === "crab" || this.pirate.choice === "octopus") {
      this.surfer.wins++;
      this.surfer.saveWinsToStorage();
      this.pirate.saveWinsToStorage();
      this.winner = this.surfer.name;
      console.log("Surf's up!");
      return true;
    } else if (this.surfer.choice === "mermaid" && this.pirate.choice === "shark" || this.pirate.choice === "turtle") {
      this.surfer.wins++;
      this.surfer.saveWinsToStorage();
      this.pirate.saveWinsToStorage();
      this.winner = this.surfer.name;
      console.log("Surf's up!");
      return true;
    } else {
      this.pirate.wins++;
      this.surfer.saveWinsToStorage();
      this.pirate.saveWinsToStorage();
      this.winner = this.pirate.name;
      console.log("I got your booty!");
      return false;
    }
  }

}
