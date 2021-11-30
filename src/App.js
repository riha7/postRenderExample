import './App.css';
import React,{useState} from 'react';
import ThrewCallbk from './propsToparent/ThrewCallbk';
import ClickCounter from './renderProps/ClickCounter';
import HoverCounter from './renderProps/HoverCounter';
import ShareCode from './renderProps/ShareCode';
import User from './renderProps/User';
import Postingdata from './PostData/Postingdata';
import ShalloCompare from './ShalloCompare';
import WithoutJSX from './WithoutJSX';
import Basicdrop from './DROPDOWN/Basicdrop';
import Basicform from './React-Hook-Form/Basicform';
import { ErrorBoundary } from 'react-error-boundary';
import ErrfallbkCompnt from './ErrfallbkCompnt';
import Formmmhook1 from './React-Hook-Form/Formmmhook1';
import Portal from './ReactPortals/Portal';
import AddDel from './PostData/AddDel';
import Conn from './contextAPiPractice/Conn';
//import ShoppingCrt from './ContextAPI/ShoppingCrt';
//import Main from './ContextAPI/Main';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import CallbkMemo from './callbk,memo,layouteffect,effect/CallbkMemo';
import MEMO from './callbk,memo,layouteffect,effect/MEMO';

function App() {
  const [val, setval] = useState(0)
  const valHandle=()=>{
    setval(val+1)
  }
  const handleErr=(e)=>{
    console.log('boundary errors',e)
  }
  return (
    <Router>
    <div className="App">
        <div>
            {/* <Main />*/}
            <ErrorBoundary FallbackComponent={ErrfallbkCompnt} onError={handleErr}>        
                <Basicform />
                <Formmmhook1 />
            </ErrorBoundary>
          <Postingdata />
            
          {/* <ShoppingCrt /> */}
        </div>
      <header className="App-header">
        <h1>Hai value is {val}</h1>
        <ThrewCallbk update={valHandle}/>
        <User render={(isLogged)=> isLogged ? 'hari':'guest'} />
        {/* <ShareCode>
          {(count,incrementCount)=><ClickCounter count={count} incrementCount={incrementCount} />}
        </ShareCode> */}
        <ShareCode render={(count,incrementCount)=><ClickCounter count={count} incrementCount={incrementCount} />} />
        <ShareCode render={(count,incrementCount)=><HoverCounter count={count} incrementCount={incrementCount} />} />

      </header>
      <ul className="nav justify-content-center">
          <li className="nav-item">
              <Link className="nav-link active" to='/basicdrop'>basicdrop</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to='/adddel'>adddel</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link disabled" to='/conn'>conntextAPI</Link>
          </li>
      </ul>

          <Basicdrop />
        
          <AddDel />
       
       
          <Conn />
       
            <ShalloCompare />
            <WithoutJSX />
            
           
            <Portal/>
            <CallbkMemo />
            <MEMO />            
         </div>
    </Router>       
  );
}

export default App;
