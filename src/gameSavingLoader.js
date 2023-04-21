import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  
    static async load() {
      let saved;
      const data = await read();
      const result = await json(data);
      saved = JSON.parse(result);
      return saved;
      }      
    };