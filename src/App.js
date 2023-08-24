// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type) =>{

      setAlert({
        msg: message,
        type: type
      });
      setTimeout(() => {
        setAlert(null);
      }, 3000);

  }
  const removeBodyClasses =() =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');

  }
  const toggleMode =(cls) =>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
<>
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
</div>
{/* Router is used for navigating from one page to another and without refreshing.
 Github doesn't supports router, so commenting it out. 
<Router>
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Switch>
  <Route exact path="/about">
  <About aboutText="About Us" mode={mode}/>
  </Route>
  <Route exact path="/" >
<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
</Route>
</Switch>
<About aboutText="About Us"/>
</div>
</Router>*/}
</>
  );
}

export default App;
