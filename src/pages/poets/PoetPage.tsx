import { Header } from "../../components/Header"
import { Container } from "../../styles/Styles"
import { useParams } from "react-router-dom"
import { poets as poetsRU } from "../../data/ru/poetsData"
import { poets as poetsEN } from "../../data/en/poetsData"
import { Poet } from "../../components/poet/Poet"
import { useTranslation } from "react-i18next"
import PoetType from "../../data/types/PoetType"
import Footer from "../../components/Footer"

function PoetPage() {
    const { t, i18n } = useTranslation()
    const params = useParams()
    const poetId = params.id
    const poets = i18n.language == "ru" ? poetsRU : poetsEN
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


