import GameSavingLoader from "./gamesaving.js";

GameSavingLoader.load().then((saving) => {
    const savingObj = JSON.parse(saving);
    return savingObj;
   // saving объект класса GameSaving
  }, (error) => {
    console.log(error.message);// ...
  });