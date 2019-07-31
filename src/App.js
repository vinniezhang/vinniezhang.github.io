import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer.js";
import Sidebar from "./components/Sidebar.js";
import './Typist.css';
import AboutMain from './About';
import ProjectsMain from './Projects';
import PhotographyMain from './Photography';
import PoetryMain from './Poetry';
import ResumeMain from './Resume';
import ContactMain from './Contact';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  const [value, setValue] = React.useState(0);  
  
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    console.log("This is the process.env", process.env.PUBLIC_URL)
    <Router>
      <Sidebar/>
      <div className="App">
        <div style={{paddingBottom:'50px'}}>
          {/* <Route exact path='/' component={AboutMain}/> */}
          <Route exact path={`/`} render={ (routerProps) => <AboutMain routerProps={routerProps} />} />
          <Route path='/Projects' component={ProjectsMain}/>
          {/* <Route path='/Photography' component={PhotographyMain}/> */}
          <Route path='/film' component={PhotographyMain}/>
          <Route path='/digital' component={PhotographyMain}/>
          <Route path='/Poetry' component={PoetryMain}/>
          <Route path='/Resume' component={ResumeMain}/>
          <Route path='/Contact' component={ContactMain}/>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;