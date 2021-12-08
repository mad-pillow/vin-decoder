import './main.scss';
import BaseBlock from './BaseBlock/BaseBlock';
import Variables from '../Variables/Variables';
import { Routes, Route } from "react-router-dom";

export default function Main() {
  return (
    <main className="main-container">
      <Routes>
        <Route path="/" element={<BaseBlock />} />
        <Route path="/variables" element={<Variables />} />
      </Routes>
    </main>
  )
}