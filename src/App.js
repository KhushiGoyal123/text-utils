import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  // whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      
      // not a good user experience - title instant blink
      setInterval(() => {
        document.title = 'TextUtils is Fab!';
      }, 2000);
      setInterval(() => {
        document.title = 'Install it Now!!';
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* given prop */}
      <Alert alert={alert}/>
      {/* <Navbar /> */}
      {/* default prop */}
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      </div>
          <About />
      </>
  );
}

export default App;
