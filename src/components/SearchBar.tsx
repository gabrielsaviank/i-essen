import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Text>SEARCH BAR</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#bfbfbf',
        height: 50,
        borderRadius: 5
    }
});

export default SearchBar;