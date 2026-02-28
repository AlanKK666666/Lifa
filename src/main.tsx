import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome</h1>
        <p className="text-slate-300">Project deployed successfully</p>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
