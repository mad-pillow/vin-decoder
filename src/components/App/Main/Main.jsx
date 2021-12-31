import './main.scss';
import BaseBlock from './BaseBlock';
import Variables from '../Variables';
import { Routes, Route } from "react-router-dom";
import VariableDetails from '../Variables/VariableDetails';

export default function Main(props) {
  return (
    <main className="main-container">
      <Routes>
        <Route exact path="/" element={<BaseBlock {...props}/>} />
        <Route exact path="/variables" element={<Variables {...props} />} />
        <Route exact path="/variables/:id" element={<VariableDetails {...props}/>}/>
      </Routes>
    </main>
  )
}