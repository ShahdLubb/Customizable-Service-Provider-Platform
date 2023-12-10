import { StyleSheet } from 'react-native';
import { globalVars } from '../../App.styles';

export default StyleSheet.create({
    page: {
        backgroundColor: 'white',
    },

    RegisterView: {
        padding: '4%',
        backgroundColor: '#64b1b6',
        height: '60%',
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
    newCustomerContainer: {
        marginTop: '5%',
        flexDirection: 'column',
        alignItems: 'center',

    },
    newCustomerText: {
        color: 'white',
        fontSize: globalVars.fontSizeSemitopic,
        fontWeight: '500',
        fontFamily: globalVars.fontFamily,
    },

    newCustomerOfferText: {
        marginTop: '3%',
        fontSize: 14,
        fontWeight: '400',
        width: '70%',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: globalVars.fontFamily,
    },
    getStartedButton: {
        marginTop: '40%',
        marginBottom: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    getStartedTouchableButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        paddingVertical: '4%',
        width: '85%',
        borderRadius: 26,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.6)',
    },
    getStartedButtonText: {
        color: '#0D121C',
        fontSize: 18, // Adjust the font size as needed
        fontWeight: '500',
        width: '100%',
        margin: 0,
        textAlign: 'center',
        fontFamily: globalVars.fontFamily,
    },
    logInView: {
        textAlign: 'center',
        height: '28%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    LoginContainer: {
        marginTop: '18%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    LoginText: {
        color: globalVars.boldGray,
        fontSize: globalVars.fontSizeNormal,
        fontWeight: '500',
        fontFamily: globalVars.fontFamily,
    },

    LoginButton: {
        marginTop: '4%',
        marginBottom: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    LoginTouchableButton: {
        paddingVertical: '4%',
        width: '85%',
        borderRadius: 26,
        borderWidth: 1,
        borderColor: globalVars.lessShadowColor,
    },
    LoginButtonText: {
        color: globalVars.boldColor,
        fontSize: 18,
        fontWeight: '500',
        width: '100%',
        margin: 0,
        textAlign: 'center',
        fontFamily: globalVars.fontFamily,
    },

    needHelpView: {
        marginTop: '5%',
        textAlign: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    needHelpTitle: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: globalVars.fontFamily,

    },
    needHelpMsg: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: globalVars.fontFamily,
    },
    needHelpContact: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: globalVars.fontFamily,
    },
    needHelpContactEmail: {
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: globalVars.fontFamily,
    }

});
