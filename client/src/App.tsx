import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [datos, setDatos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/Datos')
      .then(res => res.json())
      .then(data => setDatos(data))
      .catch(err => console.error('Error al obtener datos:', err))
  }, [])

  return (
    <>

      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center  lg:flex-auto lg:py-32 lg:text-center">


              <table className="table-fixed">
                <thead>
                  <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {datos.map((dato: any) => (
                    <tr key={dato.id}>
                      <td>{dato.id}</td>
                      <td>{dato.name}</td>
                      <td>{dato.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
