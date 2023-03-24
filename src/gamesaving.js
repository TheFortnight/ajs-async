export default class gameSaving {
    constructor(data){
        
            this.id = data.id// id сохранения
            this.created = data.created, // timestamp создания
            this.userInfo = data.userInfo;
            
            /*{
              "id": data.userInfo.id, // user id
              "name": data.userInfo.name, // user name
              "level": data.userInfo.level, // user level
              "points": data.userInfo.points // user points
            }*/
        }
    }
          
    
