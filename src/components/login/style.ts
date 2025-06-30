import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6366f1",
        alignItems: "center",
        justifyContent: "center",
    },
    LogoImage: {
        height: 50,
        width: 50,
        borderRadius: 5
    },
    Title: {
        fontSize: 26,
        color: "rgba(20,20,20,0.8)",
    },
    Version: {
        fontSize: 34,
        fontWeight: "700",
        color: "black"
    },
    LoginButton: {
        backgroundColor: 'black',
        marginBottom: 8,
        padding: 16,
        width: "48%"
    },
    ButtonText: {
        color: 'white'
    },
    CustomLoginButton: {
        backgroundColor: 'rgb(50,150,255)',
        padding: 10,
        marginVertical: 8,
        borderRadius: 8
    },
    DefaultText: {},
    ButtonImage: {
        backgroundColor: "#e6e6e6",
        height: 32,
        width: 32,
        borderRadius: 16
    },
    input: {
        width: "90%",
        height: 50,
        backgroundColor: "white",
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button: {
        width: "90%",
        height: 50,
        backgroundColor: "#8b5cf6",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});