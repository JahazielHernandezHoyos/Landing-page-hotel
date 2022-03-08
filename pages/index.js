import Navbar from "../components/Navbar"
import Cards from "../components/Cards"
import ContactUs from "../components/ContactUs"
import Cardsinfo from "../info/cardsinfo"
import cardsinfo from "../info/cardsinfo"
export default function Home() {
  
  return (
    <div className="container">
      <Navbar />
      {Cardsinfo.map(({img, header, text}) => {
   
        return (
          <Cards imgSrc={img} header= {header} text={text}/>
        )
      })}
      <ContactUs />
    </div>
  )
}
