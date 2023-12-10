// Home.styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  home: {
    flex: 1,
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  homeImg: {
    flex: 1,
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    flex: 1,
    position: 'relative',
  },
  homeAbout: {
    width: '100%',
    position: 'absolute',
    top: '10%',
  },
});

export default styles;
