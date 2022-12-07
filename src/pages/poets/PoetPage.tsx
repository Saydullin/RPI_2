import { Header } from "../../components/Header"
import { Container } from "../../styles/Styles"
import { useParams } from "react-router-dom"
import { poets as poetsData } from "../../data/ru/poetsData"
import { Poet } from "../../components/poet/Poet"
import PoetType from "../../data/types/PoetType"

function PoetPage() {

    const params = useParams()
    const poetId = params.id
    const poets = poetsData
    const selectedPoet: PoetType = poets.find(item => item.id == parseInt(poetId || "0")) || poets[0]

    return (
        <Container>
            <Header />
            <Poet poet={selectedPoet} />
        </Container>
    )
}

export default PoetPage


