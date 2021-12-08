import './main.scss';
import BaseBlock from './BaseBlock/BaseBlock';
import Variables from '../Variables/Variables';

export default function Main() {
  return (
    <main className="main-container">
      <BaseBlock/>
      <Variables/>
    </main>
  )
}