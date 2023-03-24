import GameSavingLoader from "./gameSavingLoader.js";

GameSavingLoader.load()
.then((saving) => {
    
    console.log(saving);// ...
  });