import * as React from 'react';
import { StyleSheet, Text, View,Button,Image,ImageBackground,TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
class TitleLogo extends React.Component{
render(){
    return(
        <Image
        source={require('../../resim/icon.jpeg')}
        style={{width:50,height:50}}
        resizeMode={'stretch'}
        />
    )
}
}
export default class HomeScrenn extends React.Component {
    static navigationOptions={
        title:<TitleLogo/>,  //headerTitle yazabiliriz
        headerBackTitle:'Geri', 
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
          },  
         headerStyle: {
        backgroundColor: '#f4511e',
         },    
       
    };
    render() {
        const{navigate,push}=this.props.navigation;
       
      return (
        <ImageBackground
        resizeMode={'stretch'}
        source={require('../../resim/arkaplan.jpg')} style={{flex:1,width:'100%',height:'100%'}} >
        <View style={styles.container}>
        
        <View style={styles.container1}>
          
          
        </View>         
        <View style={styles.container2}> 
        <View style={styles.icon1}> 
        <Image source={require('../../resim/icon.jpeg')}
        style={styles.iconCompanenet}
        ></Image>
        <TextInput   style={styles.myInput} 
       placeholder='E posta giriniz'
       keyboardAppearance='dark' //editörde klavye rengi
       keyboardType='default'
       //email adres @ işareti gelir klavyeye
       //decimal pad sadece sayı girilir noktada var
       //number pad sadece sayı gelir
       //phone pad numaara girmek için kulanılır
       />
       </View>
       <View style={[styles.icon2,{marginVertical:10}]}> 
       <Image source={require('../../resim/icon.jpeg')}
        style={styles.iconCompanenet}
        ></Image>
     <TextInput   style={[styles.myInput]}
        placeholder='Şifre giriniz'
       //editable={false} bu içeriğine veri girilip girilemeyeceği
       autoCapitalize='sentences'
       //sentences bu sayede cümle ilk harfi büyük
       //words kelim ebasları büyük
       //charactersklavye büyük getitir
        />
      </View>
        
        <View style={styles.buttonCompanent}>
          <TouchableOpacity  style={[styles.myButton,{backgroundColor:'#ff7f00'}]}
          onPress={()=>navigate('Detail',{
          title:'Detail 1'
          })}//sayfalar arası geçiş için kulanılır,Push ve detail farkı sayfalar kendi sayfanda yenilemeyapar push
         ><View  style={styles.myText}>
         <Text style={{fontSize:20,color:'white'}}>Eğitim Başlasın</Text>
         </View >

          </TouchableOpacity>
         <View style={{marginVertical:15}}>
         <TouchableOpacity style={[styles.myButton,{backgroundColor:'#ff7f00'}]}
          onPress={()=>navigate('Detail',
          {title:'Detail 2'})} //Bu sayede veri gönderiyoruz
          ><View  style={styles.myText}>
            <Text style={{fontSize:20,color:'white'}}>Kayıt Ol</Text>
            </View >
          </TouchableOpacity>
          </View>

            <TouchableOpacity style={[styles.myButton,,{backgroundColor:'red'}]}
          onPress={()=>navigate('Detail',
          {title:'Detail 2'})} //Bu sayede veri gönderiyoruz
          >
           <View  style={styles.myText}>
            <Text style={{fontSize:20,color:'white'}}>Şifre Unuttum</Text>
            </View >
            </TouchableOpacity>

        </View>
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
       flex:4,
    },
    container2:{
       flex:5
    },
    myInput:{
      width:300,
      height:50,
      backgroundColor:'#4ba123',
      paddingHorizontal:5,
      borderRadius:5
      },
      myButton:
      {
      borderRadius:15,
      width:300,
      height:40,
      } ,
      myText:{
     justifyContent:'center',
     alignItems:'center',
     paddingTop:7
     
      },
      icon1:{
       flexDirection:'row',
      },
      icon2:{
       flexDirection:'row'
      },
      iconCompanenet:{
        width:50,
        height:50,
        marginRight:10,
      },
      buttonCompanent:{
        alignItems:'flex-end'
      }
  });