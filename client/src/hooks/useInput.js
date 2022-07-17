import {useState} from "react";
import useValidation from "./useValidation";

const useInput = (initialValue, name, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, name, validations);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onBlur = () => {
        setDirty(true);
    }

    const clear = () => {
        setValue('');
        setDirty(false);
    }

    return {value, name, clear, onChange, onBlur, isDirty, ...valid}
}

export default useInput;