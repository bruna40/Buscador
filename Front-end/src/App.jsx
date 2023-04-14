import Home from "./pages/Home"
import GlobalStyle from "./style/global"
import FilterProvider from "./contexts/FilterContext"

function App() {
  return (
    <FilterProvider>
      <Home />
      <GlobalStyle />
    </FilterProvider>
  )
}

export default App
