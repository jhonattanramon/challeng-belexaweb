import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import "./style.css"

    interface TypeInput extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    isShowLabel: boolean;
    message?: string;
    isShowMessage: boolean;
    isError: boolean 
}

const Input: React.FC<TypeInput> = ({isError, isShowMessage,isShowLabel,label,message,...rest}) => {
    return(
        <>
          { isShowLabel ? <p className="input__label">{label}</p>:null}
            <input  {...rest} className={`input__input ${isError ? "input__input--error" : null}`}  />  
            {isShowMessage ? <p className={`input__message ${isError ? "input__message--error": null}`} >{message}</p> : null }
        </>
    )
}

export default Input