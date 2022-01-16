import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";



import NavBar from './nav';
import Home from './home';
import CreateAccount from './createaccount';
import Deposit from './deposit';
import Withdraw from './withdraw'
import Alldata from './alldata'

function App(){

return (
<Router>
<NavBar/>
<Routes>
    <Route path="/" exact element={<Home/>}/>
    <Route path="/createaccount/" element={<CreateAccount/>} />
    <Route path="/deposit" element={<Deposit/>} />
    <Route path="/withdraw" element={<Withdraw/>} />
    <Route path="/alldata" element={<Alldata/>} />
    </Routes>
</Router>

)
}

export default App;
