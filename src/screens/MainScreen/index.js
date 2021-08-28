import strings from 'localization';
import React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import styles from './styles';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statusHeader}>
        <View style={styles.statusWeather}>
          <Image source={require('../../assets/weathericon.png')} style={styles.iconSun} />
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.temp}>Temperature</Text>
            <Text style={styles.celcius}>25 C</Text>
          </View>
        </View>
        <View style={styles.infoWeather}>
          <View style={styles.infoItem}>
            <Text>House</Text>
            <Text>25 C</Text>
          </View>
          <View style={styles.infoItem}>
            <Text>Outside</Text>
            <Text>37 C</Text>
          </View>
          <View style={styles.infoItem}>
            <Text>Device on</Text>
            <Text>10</Text>
          </View>
          <View style={styles.infoItem}>
            <Text>Humidit</Text>
            <Text>60 %</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardRoom}>
        {/* <FlatList data={arrayRoom} renderItem={renderItem} keyExtractor={item => item.id} /> */}
        <View style={styles.rowCard}>
          <View style={styles.cardItem}>
            <Image source={require('../../assets/bedroom.png')} style={styles.imageRoom} />
            <Text style={styles.nameRoom}>Bedroom</Text>
          </View>
          <View style={styles.cardItem}>
            <Image source={require('../../assets/livingroom.jpg')} style={styles.imageRoom} />
            <Text style={styles.nameRoom}>Livingroom</Text>
          </View>
        </View>
        <View style={styles.rowCard}>
          <View style={styles.cardItem}>
            <Image source={require('../../assets/bathroom.png')} style={styles.imageRoom} />
            <Text style={styles.nameRoom}>Bathroom</Text>
          </View>
          <View style={styles.cardItem}>
            <Image source={require('../../assets/kitchen.png')} style={styles.imageRoom} />
            <Text style={styles.nameRoom}>Kitchen</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

MainScreen.navigationOptions = {
  title: strings.MAIN_SCREEN.title,
};

export default MainScreen;
