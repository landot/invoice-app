import { useState } from "react";
import { TextVariant } from "../styles/text/TextVariant.styles"
import { TextFieldStyles, TextInputStyles } from "../styles/components/TextField.styles";

export function TextField(props: {
    inputType: 'text' | 'int' | 'number',
    value: string, 
    title?: string, 
    handleChange?: (value: string) => void
}) {
    const [value, setValue] = useState(props.value);
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>, inputType: 'text' | 'int' | 'number') {
        let value = e.target.value;
        if(inputType === 'int') {
            value = value.split('.')[0];
        } 
        if(inputType === 'number') {
            value = value.toString().split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join(".");
        }
        props.handleChange && props.handleChange(value);
        setValue(value);
    }

    return (
        <TextFieldStyles>
            {props.title && (
                <TextVariant>{props.title}</TextVariant>
            )}
            {props.inputType === 'text' && (
                <TextInputStyles 
                    type='text' 
                    value={value} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'text')}
                    data-testid={'text-input'}
                />
            )}
            {props.inputType === 'int' && (
                <TextInputStyles 
                    type='number' 
                    min='1'
                    step='1'
                    value={value} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'int')}
                    data-testid={'text-input'}
                />
            )}
            {props.inputType === 'number' && (
                <TextInputStyles 
                    type='number' 
                    min='.01'
                    step='.01'
                    pattern="^\d*(\.\d{0,2})?$"
                    value={value} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'number')}
                    data-testid={'text-input'}
                />
            )}
        </TextFieldStyles>
    )
}
