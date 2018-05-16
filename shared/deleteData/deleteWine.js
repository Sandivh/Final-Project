import React from 'react';
import { Alert } from 'react-native';
import {removeWineData, getAllWineData} from '../dataModel/wines';


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
      return response;
  })
  .then(() => {
    removeWineData(toDelete)
  })
  .then(() => {
    {Alert.alert("Deletion Success","Wine has successfully been deleted?",[{text: "Okay", onPress: () => console.log('Okay Pressed'), style: "cancel" }])}
  })
  //Getting the local data set to update the state
  .then(()=> {
    getAllWineData()
    .then((wineData) => {
      console.log(wineData)
      if(wineData.length > 0){
        this.state = wineData
      }else{
        this.props.navigation.navigate('Add');
      }
    });
    
  })
  .catch(error => console.log(error));
}