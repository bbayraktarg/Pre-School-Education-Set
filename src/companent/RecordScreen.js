import * as React from 'react';
import { StyleSheet, Text, View ,ImageBackground,TextInput,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

 export default class RecordScreen extends React.Component {
  static navigationOptions={
    title:'Router',  //headerTitle yazabiliriz
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
        const{navigate,goBack,push,getParam}=this.props.navigation;
        const title=getParam('title','Default value'); //Diğer sayfadan gelen veri buraya eklenir
      return (
        <ImageBackground
        resizeMode={'stretch'}
        source={require('../../resim/arkaplan.jpg')} style={{flex:1,width:'100%',height:'100%'}} >
        <View style={styles.container}> 
        <View style={styles.container1}></View>    
       <View style={styles.container2}>
        
       <View style={styles.icon1}> 
        <Image source={require('../../resim/icon.jpeg')}
        style={styles.iconCompanenet}
        ></Image>
        <TextInput   style={styles.myInput} 
       placeholder='Ad soyadı giriniz'
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
        placeholder='Doğum tarihini giriniz...'
       //editable={false} bu içeriğine veri girilip girilemeyeceği
       autoCapitalize='sentences'
       //sentences bu sayede cümle ilk harfi büyük
       //words kelim ebasları büyük
       //charactersklavye büyük getitir
        />
      </View>
      

      <View style={styles.icon1}> 
        <Image source={require('../../resim/icon.jpeg')}
        style={styles.iconCompanenet}
        ></Image>
        <TextInput   style={styles.myInput} 
       placeholder='Ebeveyin eposta giriniz...'
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
        placeholder='Şifreyi giriniz...'
       //editable={false} bu içeriğine veri girilip girilemeyeceği
       autoCapitalize='sentences'
       //sentences bu sayede cümle ilk harfi büyük
       //words kelim ebasları büyük
       //charactersklavye büyük getitir
        />
      </View>
     <View style={{alignItems:'flex-end'}}>
          <TouchableOpacity style={[styles.myButton,{backgroundColor:'#ff7f00'}]}
          onPress={()=>navigate('Detail',
          {title:'Detail 2'})} //Bu sayede veri gönderiyoruz
          ><View  style={styles.myText}>
            <Text style={{fontSize:20,color:'white'}}>Kayıt Ol</Text>
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
    flex:1,
     width:'85%',
     alignItems: 'center',
     justifyContent: 'center',
    },
    container2:{
      flex:1.2
    },
    myInput:{
      width:300,
      height:40,
      backgroundColor:'#4ba123',
      paddingHorizontal:5,
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
    },
    icon1:{
      flexDirection:'row',
     },
     icon2:{
      flexDirection:'row'
     },
     iconCompanenet:{
      width:40,
      height:40,
      marginRight:10,
    },
  });