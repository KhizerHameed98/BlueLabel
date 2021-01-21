import './App.css';
import Instructions from "./pages/instructions";
import Login from "./pages/login";
import Options from "./pages/options";
import SurveyCheck from './pages/survey';
import UploadDoc from "./pages/uploadDocument";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
     <Switch>
     <Route path="/" exact component={Login} />
       <Route path="/options" component={Options} />
       <Route path="/instructions" component={Instructions} />
       <Route path="/survey" component={SurveyCheck} />
       <Route path="/uploadDocuments" component={UploadDoc} />
     </Switch>
     </Router> 
    
    </>
  );
}

export default App;
