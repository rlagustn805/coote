import React, { forwardRef } from 'react';

interface Props {
    type?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    maxLength?: number;
    size?: number;
    readonly?: boolean;
}

const BaseInput = forwardRef<HTMLInputElement, Props>(
    function BaseInputComponent(
        {
            type = 'text',
            value,
            onChange,
            placeholder,
            maxLength,
            size,
            readonly,
        },
        ref
    ) {
        return (
            <input
                ref={ref} // ref 전달
                className="border-2 border-black rounded-lg px-2 py-1"
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
                size={size}
                readOnly={readonly}
            />
        );
    }
);

export default BaseInput;
