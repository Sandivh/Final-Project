// import React from 'react';
import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';

export const saveAllWineDataLocally = ( data ) => {
    // data is an array that needs to be looped over and each
    // wine object needs its own unique key and ID.
    const wineData = data.map( ( wine, index ) => {
        return storage.save({
            key: wine.userId ? 'userId' : 'wine',
            id: wine.userId ? 'userId' : wine.wineId,
            data: {
                ...wine
            }
        });
    });

    return wineData;
};

export const getUserId = () => {
    return storage.getAllDataForKey('userId')
}

export const saveSingleWineDataLocally = (wineData) =>{
    return storage.save({
        key: 'wine',
        id: wineData.wineId,
        data: {
            ...wineData
        }
    });
}

// pass a specific wine based on the uniquie wineId.
export const getSpecificWine = ( wineId ) => {
    return storage.getSpecificWine(wineId);
};

// pass in an int of the number of wines, map over the entire list of
// wines and then return the top (whatever) based on wine rating.
export const getPartialWineData = ( numberOfWines ) => {

};

//gets all the wine.
export const getAllWineData = () => {
    return storage.getAllDataForKey('wine')
};

//removes a wine
export const removeWineData = (toDelete) => {
    console.log(toDelete);
    return storage.remove({
        key: toDelete.wineId,
        id: toDelete.wineId
    });
};