import React from 'react';
import StudentDetails from './StudentDetails';
import Home from './component/home'
import PageNotFound from './component/PageNotFound';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Props from './component/Props';
import Table from './component/Table'
import Card from './component/Card'
import Button from './component/Button'
import Shopping from './component/Shopping';
import Employee from './component/EmployeeGrid';
import Header from './component/header';
import StateCom from './component/StateCom'
import Effect from './component/Effect'
import LocalStorage from './component/LocalStorage';
import Api from './component/Api'
import Recipe from './component/Recipe'

function App() {
    return (

        <div className="App">
            <BrowserRouter>
              <Routes>
                 <Route exact path="/" element={<Home />}/>
                 <Route exact path="/resume" element={<StudentDetails/>}/>
                 <Route exact path="/table" element={<Table/>}/>
                 <Route exact path="/effect" element={<Effect/>}/>
                 <Route exact path="/card" element={<Card/>}/>
                 <Route exact path='/shopping' element={<Shopping/>}/>
                 <Route exact path='/api' element={<Api/>}/>
                 <Route exact path='/recipe' element={<Recipe/>}/>
                 <Route exact path='/employee' element={<Employee/>}/>
                 <Route exact path='/localstorage' element={<LocalStorage/>}/>
                 <Route exact path="/state" element={<StateCom />}/>
                 <Route exact path="/button" element={<Button/>}/>
                 <Route exact path="/props" element={<Props/>}/>
                 <Route exact path="/*" element={<PageNotFound/>}/>
              </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
