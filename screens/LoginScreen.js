import React, { Component } from "react";
import { StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export default class LoginScreen extends Component {
    isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
            var providerData = firebaseUser.providerData;
            for (var i = 0; i < providerData.length; i++) {
                if (
                    providerData[i].providerId ===
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                    providerData[i].uid === googleUser.getBasicProfile().getId()
                ) {
                    // We don't need to reauth the Firebase connection.
                    return true;
                }
            }
        }
        return false;
    };

    onSignIn = googleUser => {
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
            unsubscribe();
            // Check if we are already signed-in Firebase with the correct user.
            if (!this.isUserEqual(googleUser, firebaseUser)) {
                // Build Firebase credential with the Google ID token.
                var credential = firebase.auth.GoogleAuthProvider.credential(
                    googleUser.idToken,
                    googleUser.accessToken
                );

                // Sign in with credential from the Google user.
                firebase
                    .auth()
                    .signInWithCredential(credential)
                    .then(function (result) {
                        if (result.additionalUserInfo.isNewUser) {
                            //add information to the database(realtime or firestore)
                            firebase
                                .database()
                                .ref("/users/" + result.user.uid)
                                .set({
                                    gmail: result.user.email,
                                    profile_picture: result.additionalUserInfo.profile.picture,
                                    locale: result.additionalUserInfo.profile.locale,
                                    first_name: result.additionalUserInfo.profile.given_name,
                                    last_name: result.additionalUserInfo.profile.family_name,
                                    current_theme: "dark"
                                })
                                .then(function (snapshot) { })
                        }
                    })
                    .catch(error => {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        // ...
                    });
            } else {
                console.log("User already signed-in Firebase.");
            }
        })
    }

    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                behaviour: "web",
                androidClientId:
                    '1065237578131-boubk6sq48pv0j0jgivk8qan9j99511j.apps.googleusercontent.com',
                iosClientId:
                    '1065237578131-g2f1j0dq66vb0d9dqcvduo5c8lhr69n4.apps.googleusercontent.com',
                scopes: ["profile", "email"]
            });

            if (result.type === "success") {
                this.onSignIn(result);
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            console.log(e.message);
            return { error: true };
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => this.signInWithGoogleAsync()}
                >
                    <Text style={styles.text}>Sign In With  </Text>
                    <AntDesign name="google" size={24} color="black" />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'black'
    },
    Button: {
        flexDirection: 'row',
        textAlign: 'center',
        backgroundColor: '#3AB3F2',
        height: RFValue(35),
        width: RFValue(180),
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: RFValue(18),
    }
});
