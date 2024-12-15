import BaseButton from './BaseButton';
import { ReactNode } from 'react';

interface Props {
    onClick?: () => void;
    children?: ReactNode;
    type?: 'submit' | 'reset' | 'button';
    disabled?: boolean;
}

export default function YellowButton({
    onClick,
    children,
    type = 'button',
    disabled,
}: Props) {
    return (
        <BaseButton
            className=" bg-yellow-500 text-white rounded-lg font-bold px-4 py-2 hover:bg-yellow-400 transition duration-150 disabled:bg-gray-300"
            onClick={onClick}
            children={children}
            type={type}
            disabled={disabled}
        />
    );
}