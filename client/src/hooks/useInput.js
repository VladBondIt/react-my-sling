import { useState } from "react";

export default function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = (e) => {
        if (e.target.value.trim()) {
            setValue(e.target.value);
        } else {
            setValue("");
        }
    }

    return { value, onChange }

}