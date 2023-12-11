import { StyleSheet } from 'react-native';
import { globalVars } from '../../App.styles';

export default StyleSheet.create({
  page: {
    backgroundColor: 'white',
    height: '100%',
  },
  projectNameNavContainer: {
    marginTop: '10%',
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
    padding: '4%',
    backgroundColor: 'rgba(100,177,182,0.3)',
    height: '80%',
    justifyContent: 'center',
  },
  registerTypesDetails: {
    margin: '2%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  registerTypeView: {
    margin: '2%',
    padding: '8%',
    backgroundColor: 'white',
    borderRadius: 12,
  },
  registerTypeNextContainer: {

  },
  IconTypeContainer: {
    flexDirection: 'row',
  },
  registerTypeText: {
    marginBottom: '4%',
    fontSize: globalVars.fontSizeSemitopic,
    color: globalVars.lightColor,
    fontWeight: '700',
    fontFamily: globalVars.fontFamily,
    marginRight: 'auto',
  },

  rightArrowIcon: {
    color: globalVars.boldGray,
    marginLeft: 'auto',
  },
  registerTypeDescriptionText: {
    fontSize: globalVars.fontSizeNormal,
    color: globalVars.boldGray,
    fontFamily: globalVars.fontFamily,
  }
});
