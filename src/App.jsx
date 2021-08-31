import Details from './components/Details/Details';
import List from './components/List/List';
import './App.css';
import { useState } from 'react';

export default function App() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="App">
      <List selected={selected} changeSelected={setSelected} />
      <Details selected={selected} />
    </div>
  );
}