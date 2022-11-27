import { Provider } from 'react-redux'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import Main from './component/Main'
import { Store } from './Store/Store'

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      <Header />
      <Main />
      <Footer />
      </Provider>
    </div>
  )
}

export default App
