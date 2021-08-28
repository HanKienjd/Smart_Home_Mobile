import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    width: 500,
    height: 640,
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  formLogin: {
    top: 232,
    left: 15,
    position: 'absolute',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 50,
    borderRadius: 10,
    borderWidth: 0.3,
    marginBottom: 20,
    marginHorizontal: 10,
    width: 360,
    height: 340,
  },
  singUp: {
    flex: 1,
    textAlign: 'center',
    top: 60,
    justifyContent: 'flex-end',
    fontSize: 20,
    color: 'rgba(140, 23, 213, 0.5)',
  },
});

export default styles;
