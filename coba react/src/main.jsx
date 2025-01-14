import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StatusBar } from './meeting 11 hooks/latihan2.jsx';
import { GantiTema } from './meeting 11 hooks/Praktek.jsx';
import { CekTask } from './meeting 11 hooks/Praktek2.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CekTask />
  </StrictMode>,
)
  