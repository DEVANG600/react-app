// import About from './components/About';
// import Alert from './components/Alert';
import React from 'react';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    {/* <Router> */}
      <Navbar name="Home" value="10"/>
      <div className="container my-3">
        <TextForm/>
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} />
            <Route exact path="/text-util" element={<TextForm heading="Enter Description" />} /> */}
          {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
