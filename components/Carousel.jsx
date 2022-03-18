const Carousel = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/27/21/34/restaurant-1284351_960_720.jpg"
            className="d-block w-100"
            alt="Restaurante"
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_960_720.jpg"
            className="d-block w-100"
            alt="Restaurante"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg"
            className="d-block w-100"
            alt="Restaurante"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
