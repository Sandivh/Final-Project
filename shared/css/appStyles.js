import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
    heading:{
        fontSize: 40,
        color: '#ffffff',
        marginBottom: 10,
    },
    subHeading:{
        fontSize: 20,
        color: '#ffffff',
        marginBottom: 10,
    },
    container: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,.5)',
        alignItems: 'center',
        paddingTop: 20,
    },
    body: {
        width: '100%',
        height: '70%',
        backgroundColor: 'rgba(0,0,0,.8)',
        alignItems: 'center',
        marginTop: 20,
        //justifyContent: 'flex-start',
    },
    formContainer: {
        width: '100%',
        height: '90%',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 50,
        padding: 20,
    },
    tableBody: {
        width: '100%',
        height: '80%',
        backgroundColor: 'rgba(0,0,0,.8)',
        marginTop: 20,

    },
    formButton:{
        alignItems: 'center',
        backgroundColor: '#4da6ff',
        padding: 10,
        marginBottom: 10,
    },
    deleteButton:{
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        marginBottom: 10,
    },
    whiteText:{
        color: 'white',
    },
    modalStyle:{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(0,0,0)',
        alignItems: 'center',
    }
})
