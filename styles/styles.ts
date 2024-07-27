import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20,
        borderColor: "#f5f5f5",
    },
    profileImage:{
        borderRadius:50,
        width:100,
        height:100,
        marginRight:30,
    },
    profileContainer:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        padding:20,
        borderRadius:10,
        backgroundColor:'skyblue',
        elevation:5,
        marginTop:100,
    },
    profileName:{
        fontSize:18,
        fontWeight:'bold',
        color:'#00008B',
        textAlign:'center',
        textTransform:'capitalize',
    }      
})