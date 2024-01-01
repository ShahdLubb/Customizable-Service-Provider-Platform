import { StyleSheet } from 'react-native';
import { globalVars } from '../../App.styles';

export default StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center'
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
    padding: '4%',
    backgroundColor: globalVars.decorColorShadow,
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },

  registerTypeView: {
    margin: '2%',
    padding: '8%',
    backgroundColor: 'white',
    borderRadius: 12,
    flex: 0.3
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
