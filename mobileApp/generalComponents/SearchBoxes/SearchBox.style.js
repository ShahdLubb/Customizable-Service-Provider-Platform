import { StyleSheet } from 'react-native';
import { globalVars } from '../../App.styles';
const styles = StyleSheet.create({
    container: {
        backgroundColor: globalVars.decorColorShadow,
        padding: 18,
    },
    inputTextandIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 6,
    },
    IconContainer: {
        backgroundColor: globalVars.decorColor,
        borderRadius: 6,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        padding: '4%',
        justifyContent: 'center',
        alignContent: 'center',
    },
    Icon: {
        color: 'white'
    },
    InputwithIcon: {
        padding: '4%',
        fontFamily: globalVars.fontFamily,
        flex: 1,
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius: 6,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
});
export default styles;