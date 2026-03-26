import { useState } from "react"
import books from "../data/books"
import BookCard from "../components/BookCard"

const BooksPage = () => {

  const [search,setSearch] = useState("")

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div className="container">

      <h2>All Books</h2>

      <input
        type="text"
        placeholder="Search books..."
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div className="books-grid">

        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book}/>
        ))}

      </div>

    </div>
  )
}

export default BooksPage