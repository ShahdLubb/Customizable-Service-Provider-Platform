import { StyleSheet } from 'react-native';
import { globalVars } from '../App.styles';

const styles = StyleSheet.create({

    loginDetails: {
        padding: 20,
        backgroundColor: 'white',

    },
    projectNameNavContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
    },
    projectNameNav: {
        fontSize: 30,
        fontFamily: 'Cinzel-ExtraBold',
        color: globalVars.lightColor,
    },
    spanText: {
        fontFamily: 'Cinzel-ExtraBold',
        color: globalVars.lessShadowColor,
    },
    loginDetailsForm: {
        marginTop: '4%',
    },
    loginDetailsFormTitle: {
        marginBottom: '4%',
        textAlign: 'center',
        alignItems: 'center',
    },
    loginDetailsFormTitleText: {
        fontSize: 24,
        fontWeight: '800',
        color: 'black',
        fontFamily: globalVars.fontFamily,
    },
    formField: {
        height: '20%',
        marginTop: '4%',
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '4%',
    },
    submitButton: {
        backgroundColor: globalVars.lessShadowColor,
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 30,
        marginTop: '4%',
        marginBottom: '4%',
        justifyContent: 'space-between',
        width: '85%',
        paddingVertical: 12,
        paddingHorizontal: 20,

    },
    submitButtonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: globalVars.fontFamily,
    },
    loginForget: {
    },
    loginForgetText: {
        fontWeight: '500',
        textDecorationLine: 'none',
        color: globalVars.lightGray,
        fontFamily: globalVars.fontFamily,

    }, newCustomerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    newCustomerText: {
        color: globalVars.boldGray,
        fontSize: 14,
        fontWeight: '400',

        fontFamily: globalVars.fontFamily,
    },
    getStarted: {
        backgroundColor: 'transparent',
        borderColor: globalVars.lessShadowColor,
        borderRadius: 30,
        marginTop: '4%',
        marginBottom: '4%',
        justifyContent: 'space-between',
        width: '85%',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderWidth: 1,
    },
    getStartedText: {
        fontSize: 16,
        fontWeight: '500',
        color: globalVars.boldColor,
        textAlign: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: globalVars.fontFamily,
    },
    loginDetailsHelp: {
        marginTop: '4%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loginDetailsHelpText: {
        fontSize: 14,
        color: 'black',
        fontFamily: globalVars.fontFamily,

    },
    loginSupport: {
        textDecorationLine: 'none',
        color: 'black',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: globalVars.fontFamily,
    },
    loginSupportLink: {
        textDecorationLine: 'underline',
        color: 'black',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: globalVars.fontFamily,
    },
    errors: {
        color: globalVars.shadowColor,
        fontSize: 12,
        paddingTop: 4,
        fontFamily: globalVars.fontFamily,
    },
});

export default styles;
