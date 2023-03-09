import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Add from './components/Add';
import List from './components/List';
import Edit from './components/Edit';
import Admin from './components/Admin';
import Read from './components/Read';
function App() {
  return (
    <div className="App">
      <Header />
    <Routes>
      <Route path={'/add'} element={<Add/>} />
      <Route path={'/list'} element={<List/>}/>
      <Route path={`/edit/:_id`} element={<Edit/>} />
      <Route path={`/read/:_id`} element={<Read />} />
      <Route path={'/admins'} element={<Admin/>} />
    </Routes>
    </div>
  );
}

export default App;
