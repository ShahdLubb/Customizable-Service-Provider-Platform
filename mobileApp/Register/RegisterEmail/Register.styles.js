import { StyleSheet } from 'react-native';
import { globalVars } from '../../App.styles';

export default StyleSheet.create({
  page: {
    backgroundColor: 'white',
    height: '100%',
  },
  projectNameNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectNameNav: {
    fontSize: globalVars.fontSizeTopic,
    fontFamily: 'Cinzel-ExtraBold',
    color: globalVars.lightColor,
  },
  spanText: {
    fontSize: globalVars.fontSizeTopic,
    fontFamily: 'Cinzel-ExtraBold',
    color: globalVars.lessShadowColor,
  },
  RegisterView: {
    backgroundColor: 'white',
    flex: 1,
    height: "100%"
  },
  registerFormTitleContainer: {
    marginTop: '8%',
    textAlign: 'center',
    alignItems: 'center',
  },
  registerFormTitleText: {
    fontSize: 24,
    fontWeight: '800',
    color: 'black',
    fontFamily: globalVars.fontFamily,

  },
  regform: {
    backgroundColor: 'white',
    flex: 1,
    height: "100%",
    marginTop: '4%',
  },
  regformFields: {
    padding: '4%',
  },
  formField: {
    padding: '2%',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: globalVars.boldGray,
    paddingBottom: 4,
    fontFamily: globalVars.fontFamily,
  },
  input: {
    padding: 8,
    borderRadius: 6,
    borderColor: '#a5004725',
    borderWidth: 1,
    fontFamily: globalVars.fontFamily,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 'auto',

  },
  slider: {
    flexDirection: 'row',
    width: '100%'
  },
  buttonContainerSlider1: {
    width: '50%',
    borderBlockColor: globalVars.decorColor,
    borderWidth: 1,
  },
  buttonContainerSlider2: {
    width: '50%',
    borderBlockColor: globalVars.boldGray,
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: globalVars.decorColor,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 30,
    marginTop: '8%',
    marginBottom: '8%',
    justifyContent: 'space-between',
    width: '85%',
    paddingVertical: 12,
    paddingHorizontal: 20,

  },
  submitButtonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: globalVars.fontFamily,
  },

  errors: {
    color: globalVars.shadowColor,
    fontSize: 14,
    paddingTop: 4,
    fontFamily: globalVars.fontFamily,
  },

});
