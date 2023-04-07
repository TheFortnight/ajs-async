import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  
    static async load() {
      let saved;
      await read()
      .then(data => json(data))
      .then((result) => {
          saved = JSON.parse(result);
        });
        return saved;
      }      
    }
  

  /*
  return new Promise ((resolve, reject) => {
        read()
        .then((data) => {
          json(data)
          .then((result) => {
            const saved = new gameSaving(JSON.parse(result));
            resolve(saved);
          })
          .catch((e) => reject('BAD CODE'));
        })
      }) 
       */