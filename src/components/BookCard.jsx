const BookCard = ({book}) => {
  return (
    <div className="book-card">

      <img src={book.image} alt={book.title}/>

      <h4>{book.title}</h4>

      <p>{book.author}</p>

      <a href={book.file} target="_blank" className="read-btn">
        📖 Read Book
      </a>

    </div>
  )
}

export default BookCard