import { StyleSheet } from "react-native";
import { globalVars } from "../../App.styles";
const styles = StyleSheet.create({
    safe: {
        flex: 1,
        height: '100%',
        backgroundColor: globalVars.decorColorShadow,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: "column",
    },
});
export default styles;