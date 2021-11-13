class Game {
  constructor() {
    this.surfer = new Player("Surfer", surferImg);
    this.pirate = new Player("Pirate", pirateImg);
    this.type = type;
    //type is spicy or regular

  }

  determineGameType(){
    if (type === ) {

    }
  }

  determineWinner() {
    if (this.surfer.choice === "shark" && this.pirate.choice === "crab" || this.pirate.choice === "turtle") {
      this.surfer.wins++;
      return true;
    } else if (this.surfer.choice === "crab" && this.pirate.choice === "octopus" || this.pirate.choice === "turtle") {
      this.surfer.wins++;
      return true;
    } else if (this.surfer.choice === "octopus" && this.pirate.choice === "shark" || this.pirate.choice === "mermaid") {
      this.surfer.wins++;
      return true;
    } else if (this.surfer.choice === "turtle" && this.pirate.choice === "crab" || this.pirate.choice === "octopus") {
      this.surfer.wins++;
      return true;
    }else if (this.surfer.choice === "mermaid" && this.pirate.choice === "shark" || this.pirate.choice === "turtle") {
      this.surfer.wins++;
      return true;
    } else if (this.surfer.choice === this.pirate.choice) {
      return true;
    }
    this.pirate.wins++;
    return false
  }
}
