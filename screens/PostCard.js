import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class PostCard extends React.Component {
    render() {
        return (

            <TouchableOpacity style={styles.view}
                onPress={() =>
                    this.props.navigation.navigate('PostScreen', {
                        post: this.props.post
                    })
                }
            >
                <View style={styles.imageview}>
                    <View style={styles.textview}>
                        <Text style={styles.author}>{this.props.post.author}</Text>
                    </View>
                    <Image source={require('../assets/image_4.jpg')} style={styles.image} />
                    <View style={styles.textview}>
                        <Text style={styles.author}>{this.props.post.caption}</Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Icon name={'heart'} size={30} color={'white'} />
                            <Text style={styles.likeText}> 10K</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,

    },
    imageview: {
        backgroundColor: 'rgba(50,82,112,0.3)',
        borderRadius: 6,
        margin: RFValue(10),
    },
    image: {
        width: RFValue(300),
        height: RFValue(250),
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    textview: {
        justifyContent: 'center',
    },
    author: {
        fontSize: RFValue(18),
        color: 'white',
        textAlign: 'center',
        marginTop: RFValue(8)
    },
    likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderRadius: RFValue(30)
    },
    likeText: {
        color: "white",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
    },
})