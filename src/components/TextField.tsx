import { useState } from "react";
import { TextVariant } from "../styles/text/TextVariant.styles"
import { TextFieldStyles, TextInputStyles } from "../styles/TextField.styles";

export function TextField(props: {title: string, handleChange?: (value: string) => void}) {
    const [value, setValue] = useState('');
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        props.handleChange && props.handleChange(e.target.value);
        setValue(e.target.value);
    }

    return (
        <TextFieldStyles>
            <TextVariant>{props.title}</TextVariant>
            <TextInputStyles 
                type='text' 
                value={value} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                data-testid={'text-input'}
            />
        </TextFieldStyles>
    )
}
