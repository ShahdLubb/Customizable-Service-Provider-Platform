import { StyleSheet } from 'react-native';
import { globalVars } from '../../App.styles';

export default StyleSheet.create({
  registerEmail: {
    height: '100%',
    overflow: 'hidden',
  },
  registerEmailImg: {
    backgroundColor: '#64b1b6',
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
  },
  registerDetailsTitle: {
    padding: 4,
    height: '10vh',
  },
  projectNameNav: {
    fontFamily: 'Cinzel',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 0.1,
    color: 'white',
  },
  projectNameNavSpan: {
    color: globalVars.boldColor,
  },
  registerDetailsTitleText: {
    color: 'white',
    fontSize: globalVars.fontSizeSmall,
    fontWeight: '400',
  },
  getStarted: {
    height: '85%',
    lineHeight: '85%',
    padding: 4,
    fontSize: globalVars.fontSizeNormal,
    color: 'white',
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderRadius: 30,
    transition: 'background-color 0.5s',
  },
  registerEmailImgbottom: {
    height: '90vh',
  },
  registerEmailImgDesc: {
    color: 'white',
    margin: 4,
    height: '62vh',
  },
  registerEmailImgDescH2: {
    fontSize: globalVars.fontSizeSemitopic,
  },
  registerEmailImgDescP: {
    fontSize: globalVars.fontSizeP,
  },
  registerStep: {
    height: '10%',
    position: 'relative',
  },
  welcom: {
    fontFamily: 'Cinzel',
    fontWeight: '700',
    fontSize: 20,
    color: globalVars.boldColor,
  },
  registerEmailHelp: {
    padding: '.5rem 5.5rem',
    color: 'white',
  },
  registerEmailHelpH3: {
    fontSize: globalVars.fontSizeP,
  },
  registerEmailHelpH4: {
    fontSize: globalVars.fontSizeP,
    fontWeight: '400',
  },
  registerEmailSupport: {
    textDecoration: 'none',
    color: 'white',
    fontSize: globalVars.fontSizeP,
    fontWeight: '400',
  },
  registerEmailSupportHover: {
    textDecoration: 'underline',
    color: globalVars.lightColor,
  },
  registerEmailImgImg: {
    width: '100%',
    position: 'absolute',
    zIndex: 0,
    right: -148,
    bottom: 0,
  },
  registerFormTitle: {
    padding: 4,
    height: '10vh',
  },
  registerFormTitleH2: {
    fontSize: globalVars.fontSizeSemitopic,
    color: globalVars.boldGray,
  },
  registerDetailsForm: {
    margin: '2%',
    height: '61vh',
  },
  formField: {
    height: '10%',
  },
  registerDetailsFormLabel: {
    fontSize: globalVars.fontSizeP,
    fontWeight: '500',
    color: globalVars.lightGray,
    paddingBottom: 4,
  },
  registerDetailsFormInput: {
    padding: 4,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#a5004725'
  },
  registerDetailsFormInputFocus: {
    outline: 'none',
    boxShadow: globalVars.lessShadowColor,
    borderColor: globalVars.shadowColor,
  },
  registerDetailsFormInputPlaceholder: {
    color: 'rgba(0, 0, 0, 0.46)',
    fontSize: globalVars.fontSizeSmall,
  },
  registerDetailsFormSelect: {
    padding: 4,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#a5004725'
  },
  registerDetailsFormSelectFocus: {
    outline: 'none',
  },
  registerDetailsFormOption: {
    padding: 4,
    color: globalVars.lightGray,
  },
  registerNext: {
    paddingTop: 8,
  },
  registerNextBefore: {
    content: '',
    position: 'absolute',
    backgroundColor: '#a500471a',
    height: 4,
    width: '100%',
    left: 0,
    top: 0,
  },
  registerNextAfter: {
    content: '',
    position: 'absolute',
    backgroundColor: globalVars.shadowColor,
    height: 4,
    width: '20%',
    top: 0,
  },
  registerNextP: {
    fontSize: globalVars.fontSizeP,
    color: globalVars.shadowColor,
  },
  registerTermsLink: {
    textDecoration: 'none',
    color: globalVars.shadowColor,
    fontWeight: '500',
    fontSize: globalVars.fontSizeP,
  },
  registerTermsLinkHover: {
    color: '#64b1b6',
  },
  registerNextLink: {
    padding: 4,
    fontSize: globalVars.fontSizeNormal,
    color: globalVars.lightColor,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: globalVars.lightColor,
    borderRadius: 30,
    textAlign: 'center',
  },
  registerNextLinkHover: {
    backgroundColor: globalVars.shadowColor,
    color: 'white',
    borderWidth: 1,
    borderColor: globalVars.shadowColor,
  },
  errors: {
    color: globalVars.shadowColor,
    fontSize: 12,
    paddingTop: 4,
  },
});
