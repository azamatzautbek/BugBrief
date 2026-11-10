import { useState } from 'react'
import './App.css'

function App() {
  const [bug, setBug] = useState('')
  const [result, setResult] = useState('')

  function generateReport() {
    if (!bug.trim()) {
      setResult('Please describe the bug first.')
      return
    }

    setResult(`Bug Description:\n${bug}\n\nStatus: Ready for AI analysis`)
  }

  return (
    <div className="container">
      <header>
        <h1>🐞 BugBrief</h1>
        <p>AI Bug Report Assistant</p>
      </header>

      <main>
        <h2>Create a Bug Report</h2>
        <p>Describe the problem in your own words.</p>

        <textarea
          placeholder="Example: When I click the login button, nothing happens..."
          value={bug}
          onChange={(e) => setBug(e.target.value)}
        />

        <button onClick={generateReport}>
          Generate Bug Report
        </button>

        {result && (
          <div className="result">
            <h3>Generated Report</h3>
            <pre>{result}</pre>
          </div>
        )}
      </main>

      <footer>
        <p>BugBrief © 2026 | AI-powered bug reporting</p>
      </footer>
    </div>
  )
}

export default App