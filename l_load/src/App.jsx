import {lazy,Suspense} from 'react';
const Navbar=lazy(()=> import ('./components/Navbar'));
function App(){
  return (
    <Suspense fallback={<h3>loading..........</h3>}>
      <Navbar />
    </Suspense>
  );
}

export default App;
