import { Header } from "../../components/Header"
import {
    Flex,
    Section
} from "../../styles/Styles"

function Hero() {

    return (
        <Section className="hero_bg" isFullScreen={true}>
            <Header />
        </Section>
    )
}

export {
    Hero
}