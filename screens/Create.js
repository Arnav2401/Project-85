import React from 'react'
import { View, Text, StyleSheet, Platform, StatusBar, SafeAreaView, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';

export default class CreaterSpace extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            image: 'image1',
            author: '',
            caption: '',
            dropdownHeight: 40
        }
    }


    render() {

        let image_post = {
            image1: require('../assets/image_1.jpg'),
            image2: require('../assets/image_2.jpg'),
            image3: require('../assets/image_3.jpg'),
            image4: require('../assets/image_4.jpg'),
            image5: require('../assets/image_5.jpg'),
            image6: require('../assets/image_6.jpg'),
            image7: require('../assets/image_7.jpg')
        }

        return (
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <SafeAreaView
                    style={styles.safeArea}
                >
                    <ScrollView style={{ backgroundColor: 'black' }}>
                        <KeyboardAvoidingView style={styles.view}
                            behavior={'padding'}
                        >
                            <View style={styles.header}>
                                <View style={styles.iconView}>
                                    <Image source={require('../assets/logo.png')} style={styles.image} />
                                </View>
                                <View style={styles.textView}>
                                    <Text style={styles.text}>New Post</Text>
                                </View>
                            </View>
                            <View style={styles.content}>
                                <Image source={image_post[this.state.image]} style={styles.selectImage} />
                            </View>
                            <View style={{ height: RFValue(this.state.dropdownHeight) }}>
                                <DropDownPicker
                                    items=
                                    {
                                        [
                                            { label: 'Image 1', value: 'image1' },
                                            { label: 'Image 2', value: 'image2' },
                                            { label: 'Image 3', value: 'image3' },
                                            { label: 'Image 4', value: 'image4' },
                                            { label: 'Image 5', value: 'image5' },
                                            { label: 'Image 6', value: 'image6' },
                                            { label: 'Image 7', value: 'image7' },
                                        ]
                                    }
                                    onChangeItem={(item) => {
                                        this.setState({ image: item.value })
                                    }
                                    }
                                    value={this.state.image}
                                    containerStyle={styles.containerstyle}
                                    style={styles.drop}
                                    dropDownStyle={styles.downstyle}
                                    labelStyle={styles.stylelabel}
                                    itemStyle={styles.styleitem}
                                    onOpen={() => {
                                        this.setState({ dropdownHeight: 170 });
                                    }}
                                    onClose={() => {
                                        this.setState({ dropdownHeight: 40 });
                                    }}
                                />
                            </View>

                            <TextInput
                                placeholder={'Name'}
                                onChangeText={x => {
                                    this.setState({ author: x })
                                }}
                                value={this.state.author}
                                style={styles.authorInput}
                                placeholderTextColor={'white'}
                            />
                            <TextInput
                                placeholder={'Caption'}
                                onChangeText={x => {
                                    this.setState({ caption: x })
                                }}
                                value={this.state.caption}
                                style={[styles.authorInput, { marginTop: 15 }]}
                                placeholderTextColor={'white'}
                            />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </SafeAreaView>
            </View>
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
        // flex: 1,
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
        justifyContent: "center",
        paddingLeft: 18
    },
    text: {
        color: "white",
        fontSize: RFValue(28),
        fontWeight: 'bold'
    },
    content: {
        flex: .5
    },
    selectImage: {
        width: RFValue(350),
        height: RFValue(200),
        marginTop: RFValue(30),
        alignSelf: 'center',
        borderRadius: 12,
        resizeMode: 'contain'
    },
    authorInput: {
        width: '98%',
        height: RFValue(35),
        alignSelf: 'center',
        borderRadius: 6,
        textAlign: 'center',
        borderColor: 'rgb(9, 75, 119)',
        borderWidth: 3,
        color: 'white',
        marginTop: RFValue(90)
    },
    containerstyle: {
        borderRadius: 30,
        marginTop: RFValue(80),
        height: RFValue(35),
        width: '98%',
        alignSelf: 'center',
    },
    drop: {
        borderRadius: 6,
        borderWidth: 3,
        borderColor: 'rgb(9, 75, 119)',
        backgroundColor: 'transparent',
    },
    downstyle: {
        backgroundColor: 'rgba(9, 75, 119,.3)',
    },
    stylelabel: {
        color: 'white',
        textAlign: 'center',
        paddingLeft: 16,
    },
    styleitem: {
        justifyContent: 'flex-start',
    },
})
