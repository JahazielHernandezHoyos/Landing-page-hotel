import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import ContactUs from "../components/ContactUs";
import Cardsinfo from "../info/cardsinfo";
import Carousel from "../components/Carousel"

export default function Home() {
  return (
    <body>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
      <Navbar />
      <Carousel />
      <section className="container">
        <h1 className="text-center p-5 mt-5">Menú</h1>
      <div className="container">
        {Cardsinfo.map(({ imgSrc, header, text }) => {
          return <Cards imgSrc={imgSrc} header={header} text={text} />;
        })}
        <ContactUs />
      </div>
      </section>
    </body>
  );
}
