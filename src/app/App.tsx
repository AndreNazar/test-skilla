import { useEffect, useState } from 'react'
import "./styles/global.scss"
import { CallsPage } from '../pages'
import { HeaderProvider } from './providers/HeaderProvider'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {

  }, [])

  return (
    <HeaderProvider>
      <div className='app_container'>
        <CallsPage />
      </div>
    </HeaderProvider>
  )
}

export default App
