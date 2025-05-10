import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
      <div className="max-w-[1080px] w-full h-full flex flex-col p-4">
        {/* Qui ci andrà il contenuto principale */}
        <h1 className="text-4xl font-bold text-center mb-8">Benvenuto su Medmar</h1>
      </div>
    </div>
  );
}

export default App;

