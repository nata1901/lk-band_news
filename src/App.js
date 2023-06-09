import News from "./components/news"

function App() {
  return <>
    <h1>Проект с новосями по API <a href="https://newsapi.org" target="_blank" rel="noreferrer">
      newsapi
    </a></h1>
    { process.env.NODE_ENV === "development"
      ? <News/>
      : <p>Вы можете работать с API для новостей только на персональном компьютере через localhost</p>
    }
  </>
}

export default App;