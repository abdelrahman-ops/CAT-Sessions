import React from 'react'
import { sessions } from './data/sessions'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1><span>CAT</span> Sessions</h1>
        <p>Technical Knowledge Hub for CAT Frontend Engineering</p>
      </header>
      
      <main>
        <div className="sessions-grid">
          {sessions.map((session) => (
            <article key={session.id} className="session-card">
              <div className="session-id">{session.id.replace('-', ' ')}</div>
              <h2 className="session-title">{session.title}</h2>
              <p className="session-desc">{session.description}</p>
              <a href={session.link} className="session-link" target="_blank" rel="noopener noreferrer">
                View Presentation
              </a>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
