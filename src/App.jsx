import Header from "./Components/Header"
import Card from "./Components/Card";
import Banner from "./Components/Banner";
import BannerCard from "./Components/BannerCard";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import "./app.css";
function App() {

  return (
    <>
   <Header/>
   <Banner/>
   <BannerCard titulo ="Banner Principal New" subTitulo = "Lorem Impsum New"/>  
   {/* <BannerCard titulo ="Banner Principal 2" subTitulo = "Lorem Impsum New 2"/>   */}
   <Card/>
   <Form/>
   <Footer/>
    </>
  )
}

export default App
