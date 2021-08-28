import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    width: 150,
    alignSelf: 'center',
    borderColor: 'rgba(140, 23, 213, 0.5)',
    borderRadius: 5,
    borderWidth: 2,
  },
  inputLayout: {
    borderWidth: 0.3,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: 'rgba(140, 23, 213, 0.5)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
});

export default styles;
