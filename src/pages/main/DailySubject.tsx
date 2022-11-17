import { Poet } from "../../components/poet/Poet"
import { poets } from "../../data/ru/poetsData"
import {
    BoldTitle,
    Container,
    Section,
    Space
} from "../../styles/Styles"

function DailySubject() {

    const poetsList = poets

    return (
        <Section isFullScreen={true}>
            <Container>
                <BoldTitle>Poet of the day</BoldTitle>
                <Space width={0} height={40} />
                <Poet poet={poetsList[0]} isPreview={true} />
            </Container>
        </Section>
    )
}

export {
    DailySubject
}