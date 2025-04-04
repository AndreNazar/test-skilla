import "./styles/global.scss"
import { CallsPage } from "../pages"
import { MainProvider } from "./providers"

function App() {
  return (
    <MainProvider>
      <div className="app_container">
        <CallsPage />
      </div>
    </MainProvider>
  )
}

export default App
