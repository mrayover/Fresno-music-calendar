import React from 'react'

const shows = [
  { date: 'June 21, 2025', artist: 'The Velvet Trees', venue: 'Strummer’s' },
  { date: 'June 24, 2025', artist: 'Sunburn Kid', venue: 'Tower Theatre' },
  { date: 'June 30, 2025', artist: 'Static Bloom', venue: 'Full Circle Brewery' }
]

export default function App() {
  return (
    <div style={{
      fontFamily: 'monospace',
      backgroundColor: '#000',
      color: '#fff',
      padding: '2rem',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#f0f' }}>
        Fresno Music Calendar
      </h1>

      <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', borderBottom: '2px solid #f0f' }}>
        June 2025
      </h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {shows.map((show, i) => (
          <li key={i} style={{ margin: '1rem 0' }}>
            <strong>{show.date}</strong><br />
            {show.artist} @ {show.venue}
          </li>
        ))}
      </ul>
    </div>
  )
}
