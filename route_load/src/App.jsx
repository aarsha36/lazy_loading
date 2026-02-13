import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {lazy,Suspense} from 'react';
const Home=lazy(()=> import ('./components/spage'));
const About=lazy(()=> import ('./components/spage'));
const Contact=lazy(()=> import ('./components/spage'));
function App(){
  return (
    <Suspense fallback={<h3>loading..........</h3>}>
      <Home />
      <About/>
      <Contact/>
    </Suspense>
  );
}

export default App;
