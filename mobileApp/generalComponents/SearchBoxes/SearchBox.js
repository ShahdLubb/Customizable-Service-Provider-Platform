import React, { useRef, useState } from 'react';
import { View, TextInput } from 'react-native';
import { useSearchBox } from 'react-instantsearch-core';
import styles from "./SearchBox.style"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass"


export function SearchBox({ onChange, ...props }) {
    const { query, refine } = useSearchBox(props);
    const [inputValue, setInputValue] = useState(query);
    const inputRef = useRef(null);

    function setQuery(newQuery) {
        setInputValue(newQuery);
        refine(newQuery);
    }

    if (query !== inputValue && !inputRef.current?.isFocused()) {
        setInputValue(query);
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputTextandIcon}>
                <View style={styles.IconContainer}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.Icon} />
                </View>

                <TextInput
                    ref={inputRef}
                    style={styles.InputwithIcon}
                    value={inputValue}
                    placeholder="search.."
                    clearButtonMode="while-editing"
                    autoCapitalize="none"
                    autoCorrect={false}
                    spellCheck={false}
                    autoComplete="off"
                    onChangeText={(newValue) => {
                        setQuery(newValue);
                        onChange(newValue);
                    }}
                />

            </View>
        </View>
    );
}

