import GameSavingLoader from "./gameSavingLoader.js";  

  async function saveGame () {
    try {
      let res  = await GameSavingLoader.load();
      return res;
    } catch (e) {
      console.log('NOT SAVED:' + e);
    }
  }

  const info = await saveGame();
  console.log('INFO: '+JSON.stringify(info));