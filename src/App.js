// We hacve imported app.css and with it we can give styling to our returned function
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TestForm from './components/TestForm';
import Alert from './components/Alert';
import { useState } from 'react';
// React Riuter
// import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {

  // Alert state
  const [alertState, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  // Craeting a state
  const [mode, setmode] = useState('light'); // Wether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === 'dark') {
      //setmode = 'light';
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode hasbeen enabled", "success")
      //document.title = "TextUtils Light Mode";

      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // }, 2000);
    }
    else {
      //setmode = 'dark';
      setmode('dark');
      document.body.style.backgroundColor = '#24545b';
      showAlert("Dark mode hasbeen enabled", "success");
      //document.title = "TextUtils Dark Mode";
    }
  }


  return (
    // Below written things are JSX.
    // Here we can use a combination of both html (95%) ans Js(5%)


    // Here we can pass only one element like here we are pasiing div tag with className app

    // To pass more than one tag we can use empty tag <> </>---> It is called jsx fragment
    <>

      {/* What ever we write inside curly brackets {} are nothing but javascript */}

      {/* Class is a reserved keyword in js so here we are using className, 
      Similarly for which we use in label tah in html for using it here we need to write htmlFor */}

      {/* Remeber that React follows camel Case meansd upper Case */}

      {/* Examples of camel case include "iPod" */}

      {/* Sending Props--> Just like sending the arguments to any function */}
      {/* In props we can send anything like string, int, object etc */}

      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alertState} />
      <div className="container my-3">
        <TestForm heading="Enter your text to analyze below" mode={mode} showAlert={showAlert} />
        {/* <About /> */}
      </div>

    </>
  );
}




// <BrowserRouter>
//   <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
//   <Alert alert={alertState} />
//   <Routes>
//     <Route path="/" element={<TestForm heading="Enter your text to analyze below" mode={mode} showAlert={showAlert} />} />

//     <Route path="/about" element={<About mode={mode} />} />
//   </Routes>
// </BrowserRouter>

// We can pass only one function buddy
export default App;