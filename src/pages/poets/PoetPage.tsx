import { Header } from "../../components/Header"
import { Container } from "../../styles/Styles"
import { useParams } from "react-router-dom"

function PoetPage() {

    const params = useParams()
    const poetId = params.id

    return (
        <Container>
            <Header />
        </Container>
    )
}

export default PoetPage


