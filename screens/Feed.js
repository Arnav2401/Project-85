import React from 'react'
import { FlatList, View, Text, StyleSheet, Platform, StatusBar, SafeAreaView, Image } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import PostCard from '../screens/PostCard';
let photos = require('./temp_objects.json')


export default class Feed extends React.Component {

    itemrender = ({ item: post }) => {
        return (
            <PostCard post={post} navigation={this.props.navigation} />
        )
    }


    extractor = (item, index) => {
        index.toString()
    }

    render() {
        return (
            <View style={styles.view}>
                <SafeAreaView
                    style={styles.safeArea}
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
                <View style={styles.list}>
                    <FlatList
                        data={photos}
                        renderItem={this.itemrender}
                        keyExtractor={this.extractor}
                    />
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'black'
    },
    safeArea: {
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : RFValue(35)
    },
    header: {
        flex: 1,
        flexDirection: "row",
        marginBottom: RFValue(25),
        marginTop: RFValue(25),
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
    }
})