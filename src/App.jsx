import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";

function App() {
  
  return (
    
    <div>
      <div>
    
        {/*one of the ways , it reloads the page to given html */}
        {/* <button onClick={()=>{
          window.location.href ='/dashboard';
        }}>
          Dashboard
        </button>
        <button onClick={()=>{
          window.location.href ='/';
        }}>
          Landing Page
        </button>*/}
        
      </div>
      <BrowserRouter>
      <AppBar/>
      <Routes>
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/" Component={Landing} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
//we cannot use 'useNavigate' hook in any place except inside 
// {BrowserRouter} and thats how we solve the page reload
function AppBar(){
  const navigate = useNavigate();
  return <div>
    <button onClick={()=>{
          navigate("/")
        }}>Landing Page</button>
        <button onClick={()=>{
          navigate("/dashboard")
        }}>Dashboard</button>
  </div>
}

export default App;
