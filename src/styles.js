import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";

import { Button, Input, Card, SearchBar, Icon } from "react-native-elements";

import * as api from "./api.js";

const colors = {
    navBarBg: "#AC3931",
    textInput: "#D1FFE5",
    searchButton: "#AFFFD1",
    scrollViewBg: "#456390",
    repoBg: "#83A69A",
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    header: {
        width: "100%",
        height: "25%",
        backgroundColor: colors.navBarBg,
        alignItems: "center",
        justifyContent: "center",
        ...Platform.select({
            android: {
                elevation: 10,
            },
            ios: {
                shadowColor: "#000000",
                shadowOpacity: 0.9,
                shadowRadius: 8,
                shadowOffset: { width: 0, height: 3 },
            },
        }),
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "rgba(255, 255, 255, 0.5)",
        alignSelf: "center",
        marginBottom: 15,
    },
    resultCount: {
        fontSize: 16,
        fontWeight: "normal",
        color: "rgba(255, 255, 255, 0.5)",
        alignSelf: "center",
        marginBottom: 15,
    },
    searchBar: {
        backgroundColor: colors.navBarBg,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    content: {
        width: "100%",
        height: "75%",
        paddingTop: "2%",
    },
    textInput: {
        width: "70%",
        height: 50,
        backgroundColor: "#333",
        padding: "2%",
        color: "#fff",
    },
    repo: {
        backgroundColor: colors.repoBg,
        marginBottom: 10,
        width: "100%",
        height: 100,
    },
    scrollView: {},
});
