import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Home(){
  return <h1> Welcome to Home Page</h1>
}
function Contact(){
  return <h1> Welcome to Contact Page</h1>
}
function About(){
  return <h1> Welcome to About Page</h1>
}

function spage(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/about" element = {<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default spage;