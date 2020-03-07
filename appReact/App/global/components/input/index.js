import React, { useEffect, useRef } from 'react';
import { Text, TextInput } from 'react-native';
import { useField } from '@unform/core';

import {
    NewInput,
    Label
} from './styles';

function Input({ name, label, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, defaultValue = '', registerField } = useField(name);

    useEffect(() => {
        registerField({
          name: fieldName,
          ref: inputRef.current,
          path: '_lastNativeText',
          getValue(ref) {
            return ref._lastNativeText || '';
          },
          setValue(ref, value) {
            ref.setNativeProps({ text: value });
            ref._lastNativeText = value;
          },
          clearValue(ref) {
            ref.setNativeProps({ text: '' });
            ref._lastNativeText = '';
          },
        });
    }, [fieldName, registerField]);

    return (
        <>
            {label && <Label>{label}</Label>}
            <NewInput ref={inputRef} defaultValue={defaultValue} {...rest} />
        </>
    );
}

export default Input;
