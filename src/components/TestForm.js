// Importing useState from react
import React, { useState } from 'react'


// Notes : 
// slice():----->

// slice() is a method available for strings and arrays in JavaScript.
// It returns a new portion or subarray of the original string or array.
// slice() takes two arguments: the starting index (inclusive) and the ending index (exclusive).
// It extracts the elements or characters from the starting index up to, but not including, the ending index.
// If no ending index is provided, it extracts elements or characters from the starting index to the end of the string or array.
// The original string or array remains unchanged.

// split():---->

// split() is a method available for strings in JavaScript.
// It splits a string into an array of substrings based on a specified separator.
// The separator can be a string or a regular expression pattern.
// split() takes the separator as an argument.
// It finds the occurrences of the separator within the string and divides the string into substrings at those points.
// The substrings are then stored as elements in an array.
// The original string remains unchanged.

// Map function---->
// In JavaScript, the map() function is a higher-order function available for arrays. It is used to iterate over     each element of an array and create a new array by applying a transformation to each element. Here's a breakdown of its functionality:

// It takes 3 arguments---->
// currentElement: This argument represents the current element being processed in the array.
// currentIndex: This argument represents the index of the current element being processed.
// originalArray: This argument represents the original array on which map() was called.

// Last 2 indexes are optional

// After iterating over all elements, the map() function returns the new array with the transformed elements, while leaving the original array unchanged.


export default function TestForm(props) {

    const handleUpClick = (event) => {
        event.preventDefault();

        // Here we are changing the value of text constant

        //console.log("Upper Case is clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    };

    const handleLowClick = (event) => {
        event.preventDefault();

        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");

    }

    const handleClearClick = (event) => {
        event.preventDefault();

        // Here we are changing the value of text constant

        //console.log("Upper Case is clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleSentenceClick = (event) => {
        event.preventDefault();

        // Step 1 : Slpit each sentence from the input. with split(. )

        // Sentences will return an array ahaving all the splited sentences
        let sentences = text.split(". ");

        // Map function will run on all the sentences and it will return an array.
        // Here we cannot use forRach function beacuse it doesnot return any array

        // The charAt(0) function is used to retrieve the character at index 0, which is the first character of the sentence.
        // The toUpperCase() function is then applied to the first character, converting it to uppercase.
        // The slice(1) function extracts the remaining part of the sentence starting from index 1 (the second character) until the end.

        let newSentences = sentences.map(sentence => {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        });

        // Now we are simply joining the different arrays with a dot and space
        let finalSentence = newSentences.join(". ");
        setText(finalSentence);
        props.showAlert("Converted to Sentence Case", "success");
    }

    // Using state to change the copy button text
    const [copy, setCopy] = useState('Copy');
    const handleCopyClick = (event) => {
        event.preventDefault();
        // Get the text which we want to copy
        let copyText = text;

        // Use the below comand
        navigator.clipboard.writeText(copyText);

        // Changing the copy button text
        setCopy("Copied");

        props.showAlert("Text Copied", "success");

        // After 3 seconds the setcopy will beocme copy
        setInterval(() => {
            setCopy("Copy");
        }, 3000);
    }
    // Using state to change the copy button text
    const [Remove, setRemove] = useState('Remove Extra Spaces');
    const handleRemoveClick = (event) => {
        event.preventDefault();

        // The regular expression /\s+/g matches one or more consecutive whitespace characters (spaces, tabs, etc.).
        // The replace() function replaces all occurrences of the matched pattern with a single space ' '.
        // The trim() function removes any leading or trailing spaces from the sentence.

        //         / denotes the start of the regular expression pattern.
        // \s matches any whitespace character, such as spaces, tabs, or line breaks.
        // + indicates that the preceding pattern (whitespace character \s) can occur one or more times consecutively.
        // / marks the end of the regular expression pattern.
        // g is a flag that stands for "global" and allows the regular expression to match all occurrences in the input string rather than stopping at the first match.

        setText(text.replace(/\s+/g, ' ').trim())

        setRemove("Removed");

        props.showAlert("Extra Spaces are removed", "success");

        // After 3 seconds the setcopy will beocme copy
        setInterval(() => {
            setRemove("Remove Extra Spaces");
        }, 3000);
    }

    const handlealterClick = (event) => {
        event.preventDefault();

        let newText = "";
        let i = 0;
        while (i < text.length) {
            let Current = text.charAt(i);
            newText += Current.toLocaleLowerCase();
            Current = text.charAt(i + 1)
            newText += Current.toUpperCase();

            i = i + 2;
        }
        setText(newText);
        props.showAlert("Converted to Alter Case", "success");
    }

    const handleOnChange = (event) => {
        // Certainly! In the simplest terms possible:

        // `event.target.value` is a way to access the value that a user has entered into an input field (such as a text field or a dropdown) when an event (like the `onChange` event) occurs.

        // Imagine you have a text field on a web page where users can type their name. When the user starts typing, an event called `onChange` is triggered. The `event` object contains information about this event, including the element that triggered it.

        // In this case, `event.target` refers to the specific element that the event happened on, which is the text field in this example. And `.value` allows you to get the current value that the user has typed into that text field.

        // So, `event.target.value` simply means the text that the user has entered into the text field at the time of the event. You can store this value in a variable, use it to update the application's state, perform validation checks, or use it in any way you need to handle the user's input.

        // I hope this explanation clarifies the meaning of `event.target.value` in the simplest way possible!

        setText(event.target.value);
    }

    // Always remeber to write the below line inside function
    // basically we are declaring a constant (text) and setting its default value as 'Enter text here'

    // Now to chnage the constant (text) we cannot directly change it we will use the setText function to change it.

    // Changing any constant value direcly is not possible in react

    // This is state
    const [text, setText] = useState('');

    //setText("Ye h mera new text");

    return (
        <>  
            {/* Double curley brackets : 1. Because we are writing js
                                         2.  Because we are passing an object into it*/}


            <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#24545b'}} >
            <form>
                <div className="form-group">
                    <h1>{props.heading}</h1>
                    {/* Vlue will be shown on the box */}

                    {/* onChange =  handleOnChange, so when something will change in textarea it will call the handleOnChnage function*/}

                    {/* Onchange is important because we are uing state here */}
                    <textarea className="form-control my-3" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#24545b' : 'white', color: props.mode === 'dark' ? 'white' : '#24545b'}}></textarea>

                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleSentenceClick}>Sentence case</button>
                <button className="btn btn-primary mx-2" onClick={handlealterClick}>aLtErNaTiNg cAsE</button>
                <button className="btn btn-primary mx-2" onClick={handleRemoveClick}>{Remove}</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>{copy}</button>

            </form>

            <div className="conatiner my-2">
                <h2>Your text summary</h2>
                {/* text.split(" ") it will basically return an array and its length will be the number of words */}

                {/* When evenr the use will enter space it will store it into an array and using the length of the array we can find out the number of words */}

                <p>{text.split(" ").length - 1} words, {text.length} characters</p>

                {/* 0.008 mintue is the average time to read any word. We are simply multiplying it with the number of words to find out the minutes to read */}

                <p>{0.008 * text.split(" ").length}Minutes to read</p>

                <h3>Preview</h3>
                <p>{text.length>0 ? text : "Enter Something to preview it here"}</p>
            </div>
            </div>
        </>
    )
}