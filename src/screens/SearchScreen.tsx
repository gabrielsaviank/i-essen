import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


interface SearchProps {
    searchApi: () => void;
};

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price: string) => {
        return results.filter((results: any) => {
            return results.price === price;
        });
    };

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective"
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricier"
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title="Big Spender"
                /> 
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;