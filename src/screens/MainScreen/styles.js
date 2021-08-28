import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  statusHeader: {
    width: windowWidth - 30,
    height: 157,
    backgroundColor: '#F8F7FE',
    shadowColor: 'rgba(185, 35, 188, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4.65,
    shadowOpacity: 0.6,
    elevation: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  temp: {
    fontSize: 12,
    fontFamily: 'roboto',
    lineHeight: 14,
    opacity: 0.5,
    color: '#000',
  },
  celcius: {
    fontSize: 36,
    fontFamily: 'roboto',
    lineHeight: 42,
    color: '#000',
  },
  iconSun: {
    width: 56,
    height: 63,
  },
  statusWeather: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  infoWeather: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
  },
  cardRoom: {
    marginVertical: 10,
    flexGrow: 1,
    width: windowWidth - 30,
    height: 315,
  },
  rowCard: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  cardItem: {
    width: windowWidth - 230,
    height: 152,
    backgroundColor: '#FDFDFD',
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 20.27,
    elevation: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageRoom: {
    margin: 'auto',
    width: 85,
    height: 85,
    borderRadius: 5,
  },
  nameRoom: {},
});

export default styles;
