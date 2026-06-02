import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/public')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Cafe</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
            {data ? (
              <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App