import React from 'react';
import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class PostScreen extends React.Component {
    render() {

        return (
            <View style={styles.mainView}>
                <SafeAreaView
                    style={styles.safeView}
                />
                <View style={styles.header}>
                    <View style={styles.iconView}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Spectagram</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    <Image source={require('../assets/image_4.jpg')} style={styles.images} />
                </View>
                <View>
                    <Text style={[styles.color, { marginTop: 21 }]}>
                        By:  {this.props.route.params.post.author}
                    </Text>
                    <Text style={styles.color}>
                        {this.props.route.params.post.caption}
                    </Text>
                </View>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: 'black',
        flex: 1
    },
    safeView: {
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : RFValue(35)
    },
    header: {
        //flex: 1,
        flexDirection: "row",
        // marginBottom: RFValue(25),
        // marginTop: RFValue(25),
    },
    iconView: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: RFValue(50),
        height: RFValue(50),
        resizeMode: 'contain'
    },
    textView: {
        flex: 0.7,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: RFValue(28),
        fontWeight: 'bold'
    },
    list: {
        fontSize: 100,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    images: {
        width: RFValue(460),
        height: RFValue(260)
    },
    view: {
        alignSelf: 'center',
        marginTop: RFValue(30)
    },
    color: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 21,
        marginTop: RFValue(21)
    }
})