import { StyleSheet } from 'react-native';
import { globalVars } from '../../App.styles';

const styles = StyleSheet.create({
    Card: {
        borderRadius: 15,
        justifyContent: 'center',
        alignContent: 'center',
    },

    serviceView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 15
    },
    imageView: {
        justifyContent: 'center',
        width: '40%',
    },
    serviceImage: {
        borderRadius: 10,
    },
    descriptionView: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'space-between'
    },
    ServiceName: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    ServiceNameText: {
        color: globalVars.lessShadowColor,
        fontSize: 20,
        fontWeight: '600',
        fontFamily: globalVars.fontFamily,
    },
    providerLink: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    providerNamewithIcon: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    providerNameText: {
        color: globalVars.boldGray,
        fontSize: 16,
        fontWeight: '500',
        fontFamily: globalVars.fontFamily,
    },
    priceRatingBooking: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',


    },
    priceAndRating: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',


    },
    serviceRating: {
        flex: 1,

    },
    ratingValue: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    servicePrice: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    priceLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: globalVars.lightGray,
        fontFamily: globalVars.fontFamily,
    },
    price: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
        fontFamily: globalVars.fontFamily,
    },
    bookNowButtonOuterView: {
        flex: 1,
        height: '100%',

        flexDirection: 'column',
        justifyContent: 'flex-end',

    },
    bookNowButtonView: {

        backgroundColor: globalVars.decorColorShadow,
        borderRadius: 24,

    },
    bookNowButton: {
        paddingVertical: '8%'
    },
    bookNowButtonText: {
        fontSize: 14,
        textAlign: 'center',
        color: 'black',
        fontWeight: '600',
        fontFamily: globalVars.fontFamily,
    },


});

export default styles;
