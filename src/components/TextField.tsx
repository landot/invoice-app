import { useState } from "react";
import { TextVariant } from "../styles/text/TextVariant.styles"
import { TextFieldHeaderStyles, TextFieldStyles, TextInputStyles } from "../styles/components/TextField.styles";

export function TextField(props: {
    inputType: 'text' | 'int' | 'number',
    value: string, 
    error?: boolean,
    errorText?: string,
    placeholder?: string,
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
        <TextFieldStyles $error={props.error}>
            <TextFieldHeaderStyles>
                {props.title && (
                    <TextVariant>{props.title}</TextVariant>
                )}
                {props.error && props.errorText && (
                    <TextVariant>{props.errorText}</TextVariant>
                )}
            </TextFieldHeaderStyles>
            {props.inputType === 'text' && (
                <TextInputStyles 
                    $error={props.error}
                    type='text' 
                    placeholder={props.placeholder}
                    value={value} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'text')}
                    data-testid={'text-input'}
                />
            )}
            {props.inputType === 'int' && (
                <TextInputStyles 
                    $error={props.error}
                    type='number' 
                    placeholder={props.placeholder}
                    min='1'
                    step='1'
                    value={value} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'int')}
                    data-testid={'text-input'}
                />
            )}
            {props.inputType === 'number' && (
                <TextInputStyles 
                    $error={props.error}
                    type='number' 
                    placeholder={props.placeholder}
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
