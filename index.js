class Fish {}

class SmallFish extends Fish {}
const smallFish = new SmallFish();
const fish = new Fish();

Fish.prototype.sWIM = function() {
  console.log('I am swimming');
}

const fish1 = new Fish();
const fish2 = new SmallFish();

smallFish.sWIM();
fish.sWIM();
fish1.sWIM();
fish2.sWIM();