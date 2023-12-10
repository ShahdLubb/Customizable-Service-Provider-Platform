
import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
  home: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  homeAbout: {
    flex: 1,
    width: '100%',
    alignSelf: 'flex-end',
    marginTop: '24rem',
    backgroundColor: 'white',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    flex: 1,
    position: 'relative',
  },
  homeImg: {
    flex: 1,
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default HomeStyles;
