import GameSavingLoader from "./gameSavingLoader.js";

 let res;
  try {
    res  = await GameSavingLoader.load()
  } catch (e) {
    console.log('NOT SAVED:' + e);
  }