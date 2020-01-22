import React from "react";
import { Text, View, ScrollView } from "react-native";

import { Card } from "react-native-elements";
import { styles } from "./styles";

const Repo = repoData => {
    // implemented with Text and Button as children
    return (
        <Card title={repoData.name}>
            <Text style={{ marginBottom: 10 }}>{repoData.description}</Text>
        </Card>
    );
};

export const ReposList = props => {
    if (Array.isArray(props.repos)) {
        return (
            <ScrollView style={styles.scrollView}>
                {props.repos.map((repo, i) => {
                    return <Repo key={i} {...repo} />;
                })}
            </ScrollView>
        );
    } else {
        return (
            <View>
                <Text style={styles.title}>No results</Text>
            </View>
        );
    }
};
