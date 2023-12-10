// About.styles.js
import { StyleSheet } from 'react-native';
import { globalVars } from '../../../App.styles';

const styles = StyleSheet.create({
  about: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStart: {
    textAlign: 'center',
  },
  heading: {
    fontSize: 40,
    color: '#0D121C',
    fontWeight: '600',
    width: '80%',
    paddingBottom: 8,
    textAlign: 'center',
    fontFamily: globalVars.fontFamily,
  },
  subheading: {
    fontSize: 18, // Adjust the font size as needed
    color: '#0D121C',
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: globalVars.fontFamily,
  },
  aboutButton: {
    marginTop: '5%', // Adjust the margin top as needed
    marginBottom: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  aboutLink: {
    textDecorationLine: 'none',
    textTransform: 'capitalize',
    color: '#0D121C',
    backgroundColor: '#a5004781',
    paddingVertical: 12,
    width: '70%',
    paddingHorizontal: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#8d1a4c',

  },
  aboutLinkText: {
    color: '#0D121C',
    fontSize: 20, // Adjust the font size as needed
    fontWeight: '500',
    width: '100%',
    margin: 0,
    textAlign: 'center',
    fontFamily: globalVars.fontFamily,
  },
  aboutButtonText: {
    color: '#0D121C',
    fontSize: 16, // Adjust the font size as needed
    fontWeight: '400',
    width: '80%',
    margin: 0,
    textAlign: 'center',
    fontFamily: globalVars.fontFamily,
  },
});

export default styles;
