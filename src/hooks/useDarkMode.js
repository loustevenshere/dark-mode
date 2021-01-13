import React from 'react'
import './useLocalStorage';
import useLocalStorage from './useLocalStorage';

export default function useDarkMode(initialValue) {
const [darkValue, setdarkValue] = useLocalStorage('dark-mode', initialValue)
    return [darkValue, setdarkValue]
};



