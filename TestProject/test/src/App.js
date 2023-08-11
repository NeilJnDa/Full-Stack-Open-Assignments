import './App.css';
import {useState, useEffect} from 'react'
import Child from './Child';
const App = () => {
  const list = [{m: 'Hei'}, {m:'Hey'}, {m:'Hi'}]
  return (
  <div>
    list.forEach(elem => <div key={elem.m}> elem.m </div>)
  </div>)
}
export default App;
