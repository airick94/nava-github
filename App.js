import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";

import { Button, Input, Card, SearchBar, Icon } from "react-native-elements";
import { styles } from "./src/styles";
import * as api from "./src/api.js";

import { ReposList } from "./src/components.js";

export default function App() {
    const [textInput, setTextInput] = useState(undefined);

    const [searchResults, setSearchResults] = useState([]);

    const getSearchResults = async endpoint => {
        const results = await api.get(endpoint);
        if (results.statusCode == 200) {
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Search GitHub Users</Text>
                {searchResults ? (
                    <Text style={styles.resultCount}>
                        {searchResults.data ? `${searchResults.data.length} results` : `0 results`}
                    </Text>
                ) : null}
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.textInput}
                        onSubmitEditing={() => {
                            getSearchResults(`/orgs/${textInput}/repos`);
                        }}
                        onChangeText={input => {
                            setTextInput(input);
                        }}
                    ></TextInput>
                </View>
            </View>

            <View style={styles.content}>
                <ReposList repos={searchResults.data} />
            </View>
        </View>
    );
}
