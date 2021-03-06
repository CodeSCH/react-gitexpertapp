import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();

        //Validation
        if (inputValue.trim().length > 2) {
            setCategories(serie => [inputValue, ...serie]);
            setInputValue(''); 
        }
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Insert any word"
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}