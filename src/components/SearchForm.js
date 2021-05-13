import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const searchvalue = React.useRef('')
  const { setSearchTerm } = useGlobalContext()

  const handleChange = () => {
    setSearchTerm(searchvalue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  React.useEffect(() => {
    searchvalue.current.focus()
  }, []);

  return (
    <section className="search section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name" >search for your favorite cocktail</label>
          <input type='text' id="name" ref={searchvalue} onChange={handleChange} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
