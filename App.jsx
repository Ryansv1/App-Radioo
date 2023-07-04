import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Plataform } from 'react-native';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '@rneui/themed';
import AppLoading from 'expo-app-loading';

const { width, height } = Dimensions.get('window');


export default function App(){
  const [sound, setSound] = React.useState();

  async function playSound(){
      console.log('Play Streaming')
      const { sound } = await Audio.Sound.createAsync(
        { uri: 'http://stm43.conectastm.com:7790/;?type=http&nocache=96'},
        { shouldPlay: true}
      );
      setSound(sound);

      console.log('Reproduzindo Audio')
      await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('parando de reproduzir');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);


  return (
    <LinearGradient style={styles.appBackground}colors={['#ffffff','#087FED','#0E1D51']}>
    <View style={styles.containerLogos}>
      <Image resizeMode="contain" style={styles.logosRadioRede}source={require('./assets/icons/radioLogo.png')}/>
      <Image resizeMode="contain" style={styles.logosRadioRede}source={require('./assets/icons/portalLogo.png')}/>
    </View>
    <LinearGradient colors={['#E8D529','#087FED']} style={styles.primeiraBox}>
      <Text style={{
        fontSize:20,
        textAlign: 'center',
        fontWeight:'bold',
        fontStyle: 'italic',
        textShadowColor: 'white',
        textShadowOffset: {width: 0.5, height:0.5},
        textShadowRadius: 0
      }}>
        A MAIS OUVIDA E POTENTE DA REGIÃO AGORA NO SEU CELULAR!
      </Text>
      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textShadowColor: 'white',
        textShadowOffset: {width: 0.9, height:0.5},
        textShadowRadius: 0,
        marginTop: 30
      }}>
        CLIQUE E EMBARQUE NA PROGRAMAÇÃO DA 102.9 AMORIM FM!
      </Text>
    </LinearGradient>
    <Button title="SINTONIZE!" onPress={playSound}titleStyle={{fontStyle: 'italic',fontWeight: 'bold', color: 'black'}} buttonStyle={styles.botaoSintonize}></Button>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  primeiraBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    width: width * 0.8,
    height: height * 0.3
  },

  botaoSintonize:{
    paddingHorizontal: width * 0.139,
    paddingVertical: '15%',
    marginVertical: height * 0.1,
    backgroundColor: '#E8D529',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
  },

  logosRadioRede:{
    flex: 1,
    width: width * 0.3,
    marginHorizontal: 10
  },
  containerLogos:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: width * 0.1
  }, 
});
