import * as React from 'react';
import { StyleSheet, Text, View ,Button,ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

 export default class DetailScrean extends React.Component {
     
     static navigationOptions=({navigation})=>{   //Gelen degeri header alanına yazdırırız
         return{
             title:navigation.getParam('title','Detail'),
             headerTransparent:true, //Arka taraftaki header kaldırır
             headerRight:(
                 <Button
                 onPress={()=>alert('hata')}
                 title='ileri git'
                 />
             ),
             headerLeft:(
                 <TouchableOpacity style={{marginLeft:20}}
                 onPress={()=>alert('hata')}
                 >
                     <Text>Geri Git</Text>
                 </TouchableOpacity>
             )
        
         }
     }

    render() {
        const{navigate,goBack,push,getParam}=this.props.navigation;
        const title=getParam('title','Default value'); //Diğer sayfadan gelen veri buraya eklenir
      return (
        <ImageBackground
        resizeMode={'stretch'}
        source={require('../../resim/arkaplan.jpg')} style={{flex:1,width:'100%',height:'100%'}} >
        <View style={styles.container}>
       
       <View style={styles.container1}>
        <TouchableOpacity style={[styles.myButton,{backgroundColor:'#ff7f00'}]}
          onPress={()=>navigate('Detail',
          {title:'Detail 2'})} //Bu sayede veri gönderiyoruz
          ><View  style={styles.myText}>
            <Text style={{fontSize:20,color:'white'}}>2-3 Yaş</Text>
            </View >
          </TouchableOpacity>
         
          <TouchableOpacity style={[styles.myButton,{backgroundColor:'#ff3030'}]}
          onPress={()=>navigate('Detail',
          {title:'Detail 2'})} //Bu sayede veri gönderiyoruz
          ><View  style={styles.myText}>
            <Text style={{fontSize:20,color:'white'}}>3-4 Yaş</Text>
            </View >
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.myButton,{backgroundColor:'#1874cd'}]}
          onPress={()=>navigate('Detail',
          {title:'Detail 2'})} //Bu sayede veri gönderiyoruz
          ><View  style={styles.myText}>
            <Text style={{fontSize:20,color:'white'}}>4-5 Yaş</Text>
            </View >
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.myButton,{backgroundColor:'#008b00'}]}
          onPress={()=>navigate('Record',
          {title:'Detail 2'})} //Bu sayede veri gönderiyoruz
          ><View  style={styles.myText}>
            <Text style={{fontSize:20,color:'white'}}>5-6 Yaş</Text>
            </View >
          </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container1:{
    flex:1,
     width:'85%',
     alignItems: 'center',
     justifyContent: 'center',
    },
    myButton:
    {
    borderRadius:15,
    width:300,
    height:40,
    marginVertical:15,

    } ,
    myText:{
      justifyContent:'center',
      alignItems:'center',
      paddingTop:7
    }
  });