import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import ContactUs from "../components/ContactUs";
import Cardsinfo from "../info/cardsinfo";


export default function Home() {
  return (
    <>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
      <Navbar />
      <div className="container">
        {Cardsinfo.map(({ img, header, text }) => {
          return <Cards imgSrc={img} header={header} text={text} />;
        })}
        <ContactUs />
      </div>
    </>
  );
}
