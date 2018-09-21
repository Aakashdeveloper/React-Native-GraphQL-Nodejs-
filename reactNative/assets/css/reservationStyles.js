
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        flex:1,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 20,
        margin:10,
        marginBottom: 5
    },
    inner:{
        flex:1,
        margin:10 ,
        borderRadius: 4,
        justifyContent:'center', 
        alignItems:'center',
    },
    button:{
        borderRadius: 4,
        height:45,
        flex:1,
        backgroundColor:'#007fad',
        justifyContent:'center', 
        alignItems:'center',
        marginTop:10,
        marginLeft:8
    },
    headingText:{
        fontWeight:'bold',
        color:'#007fad',
        fontSize:25,
        marginLeft:16,
        marginTop:16
    },
    touchButton:{
        flexDirection:'row'
    },
    availablebutton:{
        borderRadius: 4,
        height:45,
        flex:1,
        backgroundColor:'#428500',
        justifyContent:'center', 
        alignItems:'center',
        marginTop:10,
        marginLeft:8
    },
    buttonText:{
        fontWeight:'bold',
        color:'#fff',
        fontSize:14
    },text:{
        marginTop:5,
        fontWeight:'bold',
        color:'#007fad',
        fontSize:15
    },
    date:{
        fontWeight:'bold',
        color: '#316300',
        borderColor: '#316300',
        borderWidth:1,
        padding:5,
        marginTop:5,

    }
});
