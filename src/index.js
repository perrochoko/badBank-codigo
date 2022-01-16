// import React from 'react';
// import { BrowserRouter, Route, Routes} from "react-router-dom";
// // import { HashRouter, Route, Routes } from "react-router-dom";
// import ReactDOM from 'react-dom';

// import { MyContextProvider }  from "./globalcontext";

// import Home from './home';
// import NavBar from './nav';
// import CreateAccount from './createaccount';
// import Deposit from './deposit';
// import Withdraw from './withdraw'
// import Alldata from './alldata'

// // import './index.css';

// ReactDOM.render(
//   <MyContextProvider>
//     <BrowserRouter>
//       <NavBar/>
//       <Routes>
//           <Route path="/" exact element={<Home/>}/>
//           <Route path="/createaccount/" element={<CreateAccount/>} />
//           <Route path="/deposit" element={<Deposit/>} />
//           <Route path="/withdraw" element={<Withdraw/>} />
//           <Route path="/alldata" element={<Alldata/>} />
//           </Routes>
//     </BrowserRouter>
//   </MyContextProvider>,       
// document.getElementById('root')
// );

import ReactDOM from 'react-dom';
import React from 'react';
import { MyContextProvider }  from "./globalcontext";
import App from './App'

// import './index.css';

ReactDOM.render(
  <MyContextProvider>
    <App/>
  </MyContextProvider>,       
document.getElementById('root')
);
