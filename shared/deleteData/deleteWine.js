import React from 'react';



fetch('http://grevaneandsandivh.com/cellarBackEnd/add.php', {
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
        .then((result) => {
          return wineData = {
            ...addObject,
            result
          };
        })
        .catch(error => console.log(error));