import twistedHate from "../images/Book-Image/twisted-hate.jpg";
import verity from "../images/Book-Image/verity.jpg";
import atomic from "../images/Book-Image/atomic-habits.jpg";

const HeroSlider = () => {
  return (
    <section className="hero-section">

      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >

        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="hero-slide">

              <div className="hero-content">
                <h1>Twisted Hate</h1>
                <p>Intense romance and passion in a bestselling novel.</p>

                <a
                  href="/books/twisted-hate.pdf"
                  className="hero-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  Read Book
                </a>

              </div>

              <img
                src={twistedHate}
                alt="Twisted Hate"
                className="hero-book"
              />

            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="hero-slide">

              <div className="hero-content">
                <h1>Verity</h1>
                <p>A dark psychological thriller that grips you till the end.</p>

                <a
                  href="/books/verity.pdf"
                  className="hero-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  Read Book
                </a>

              </div>

              <img
                src={verity}
                alt="Verity"
                className="hero-book"
              />

            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="hero-slide">

              <div className="hero-content">
                <h1>Atomic Habits</h1>
                <p>Build good habits, break bad ones, and improve your life every day.</p>

                <a
                  href="/books/atomic-habits.pdf"
                  className="hero-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  Read Book
                </a>

              </div>

              <img
                src={atomic}
                alt="Atomic Habits"
                className="hero-book"
              />

            </div>
          </div>

        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>
    </section>
  );
};

export default HeroSlider;