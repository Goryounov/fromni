import {useContext, useEffect, useState} from "react";
import {Context} from "../index";

const useValidation = (value, name, validations) => {
    const {store} = useContext(Context);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'required':
                    value.length > 0 ? store.removeError(`${name}_${validation}`) : store.addError({name: name, error: `${name}_${validation}`, message: `${validations[validation].message}`})
                    break;
                case 'message_max_length':
                    (value.length > validations[validation].value) ? store.addError({name: name, error: `${name}_${validation}`, message: `${validations[validation].message} ${validations[validation].value}`}) : store.removeError(`${name}_${validation}`)
                    break;
                case 'text_max_length':
                    (value.length > validations[validation].value) ? store.addError({name: name, error: `${name}_${validation}`, message: `${validations[validation].message} ${validations[validation].value}`}) : store.removeError(`${name}_${validation}`)
                    break;
            }
        }
    }, [value])
}

export default useValidation;