import { GeneratorTabs } from "./components/GeneratorTabs";
import { Navbar } from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { PasswordGenerator } from "./components/PasswordGenerator";


function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<GeneratorTabs />}/>
            <Route path="/password-generator" element={<PasswordGenerator />}/>
          </Routes>
      </BrowserRouter> 
  );
}

export default App;
