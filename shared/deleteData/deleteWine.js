import React from 'react';
import {removeWineData} from '../dataModel/wines';


export const deleteWine = ( wineId ) => {
  
  var toDelete = {
    "wineId": wineId
  }
  
  fetch('http://grevaneandsandivh.com/cellarBackEnd/delete.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( toDelete )
  })
  .then((response) => {
      if(!response.ok){
        throw Error(response.statusText);
      }
      //need to return json to get wine id and then save it to local
      return response;
  })
  //need to check the structure of the response to set the wineId
  .then(() => {
    removeWineData(toDelete)
  })
  .then(()=> {
    this.props.navigation.navigate('Cellar')
  })
  .catch(error => console.log(error));
}