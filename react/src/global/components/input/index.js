import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

function Input({ name, label, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, defaultValue = '', registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <>
            {label && <label htmlFor={label}>{label}</label>}
            <input ref={inputRef} defaultValue={defaultValue} {...rest} />
        </>
    );
}

export default Input;
