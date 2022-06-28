import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main, { PropsName } from "./components/Main"
import Search from "./components/Search"
import api from "./services/api"

function App() {
  const [country, setCountry] = useState<PropsName[]>([]);


  const [search, setSearch] = useState('')
  const onChangeInput = (text: string) => {
    setSearch(text)
  }
  const [searchParam] = useState(["capital", "continents"]);
  const countryesFilter = country.filter((country) => {
    return searchParam.some((newCountry) => {
      return (
        // @ts-ignore
        country[newCountry]?.toString()?.toLowerCase()?.indexOf(search.toLowerCase()) > -1
      )
    })
  })
  useEffect(() => {
    (async function getCategoriesByTag() {
      try {
        const { data } = await api.get('/all');
        setCountry(data)
        console.log(country)
      } catch (error) {
        console.log('Error trying to search for this category!')
      }
    })()
  }, [])

  return (
    <>
      <Header />
      <Search
        search={search}
        onChangeInput={onChangeInput}
      />
      <Main countryesFilter={countryesFilter} />
      <Footer />
    </>

  )
}

export default App
