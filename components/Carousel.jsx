const Carousel = () => {
  return (
    <section className="home">
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-interval="2500"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2016/03/27/21/34/restaurant-1284351_960_720.jpg')",
            }}
          >
            <div className="container">
              <h2>Bienvenido a Restaurante</h2>
              <p><button className="btn btn-outline-light">Ver Menú</button></p>
            </div>
          </div>
          <div
            className="carousel-item"
            data-bs-interval="3500"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_960_720.jpg')",
            }}
          >
            <div className="container">
              <h2>Contactanos</h2>
              <p><button className="btn btn-outline-light">Siguenos en nuestras redes</button></p>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg')",
            }}
          >
            <div className="container">
              <h2>3</h2>
              <p>Web Developer</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
