import React, { useState, useEffect } from 'react';
import API from './utils/API';
import Home from './components/Home';
import Wrapper from './components/Wrapper';
import Header from './components/Header';


function App() {


const [employeeArr, setEmployeeArr] = useState([]);
const []

  return (
    <Router>
      <Wrapper>
        <Header />
        <Route exact path = '/' component = {Home} />
      </Wrapper>
    </Router>
 
  );
}

export default App;
