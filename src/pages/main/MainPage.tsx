import Footer from "../../components/Footer"
import { Header } from "../../components/Header"
import { DailySubject } from './DailySubject'
import { Developers } from './Developers'
import { Hero } from './Hero'

function MainPage() {
  window.scrollTo(0, 0)

    return (
        <>
          <Header />
          <Hero />
          <DailySubject />
          <Developers />
          <Footer />
        </>
    )
}

export default MainPage