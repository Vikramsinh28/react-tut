import './App.css';
import Events from './Components/Events';
import Lists from './Components/Lists';
import ObjectDestruction from './Components/ObjectDestruction';
import PropsValiFile from './Components/PropsValiFile';
import Layout from './Routes/Layout';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Blogs from './Routes/Blogs';
import Contacts from './Routes/Contacts';
import Home from './Routes/Home'
import UseStAte from './Hooks/UseStAte';


function App() {
        const name = "Vikramsinh"

       return (
     
      //JSX stands for JavaScript XML.
      //JSX allows us to write HTML in React.
      //JSX makes it easier to write and add HTML in React.

        <div className="App">

          <h1>This is My First App;</h1>
          {/* <ObjectDestruction/> */}

          {/* jsx example */}
          {/* { 5 + 5 }  */}
    {/*    Props are arguments passed into React components.

          Props are passed to components via HTML attributes. */}
          {/* <PropsValiFile value="Ghani Badhi" name={name}/> */}
          {/* <Events/> */}
          {/* <Lists/> */}
{/*           
          <BrowserRouter>
          <Layout/>
          <Routes>  
              <Route path="/" element={<Home/>}/>
              <Route path="/blogs" element={<Blogs/>}/>
              <Route path="/contact" element={<Contacts/>}/>
          </Routes>
          </BrowserRouter> */}

          {/* <UseStAte/> */}

        </div>
  );
}

export default App;
