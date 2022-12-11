import { Header } from "../../components/Header"
import { Container } from "../../styles/Styles"
import { useParams } from "react-router-dom"
import { poets as poetsData } from "../../data/ru/poetsData"
import { Poet } from "../../components/poet/Poet"
import PoetType from "../../data/types/PoetType"
import Footer from "../../components/Footer"

function PoetPage() {

    const params = useParams()
    const poetId = params.id
    const poets = poetsData
    const selectedPoet: PoetType = poets.find(item => item.id == parseInt(poetId || "0")) || poets[0]

    return (
        <>
            <Header />
            <Container className="in-right">
                <Poet poet={selectedPoet} />
            </Container>
            <Footer />
        </>
    )
}

export default PoetPage


