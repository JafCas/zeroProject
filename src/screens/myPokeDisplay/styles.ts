import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  square: {
    height: 200,
    width: 200,
    backgroundColor: 'white',
  },
  textContainer: {
    margin: 5,
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  reloadCircle: {
    height: 45,
    width: 45,
    backgroundColor: 'gray',
    borderRadius: 25,
  },
});

export default styles;
