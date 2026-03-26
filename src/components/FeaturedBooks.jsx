import books from "../data/books"
import BookCard from "./BookCard"

const FeaturedBooks = () => {

  const featuredBooks = books.filter(book => book.featured)

  return (

    <section className="featured-section">

      <div className="container">

        <h2 className="section-title">Featured Books</h2>

        <div className="books-grid">

          {featuredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}

        </div>

      </div>

    </section>

  )
}

export default FeaturedBooks