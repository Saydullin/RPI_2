import { PreviewPoet } from "../../components/poet/PreviewPoet"
import { poets } from "../../data/ru/poetsData"
import { Link } from "react-router-dom"
import {
    BoldTitle,
    Container,
    Flex,
    Section,
    Title,
    Space,
    SubTitle
} from "../../styles/Styles"

function DailySubject() {

    const poetsList = poets
    const randId = Math.floor(Math.random() * poetsList.length)

    return (
        <Section className={"h"} isFullScreen={false} isPadding={true}>
            <Container>
                <BoldTitle>Poet of the day</BoldTitle>
                <Space width={0} height={40} />
                <PreviewPoet id={0} poet={poetsList[randId]} />
                <Space width={0} height={40} />
                <Flex isColumn={false} position={"center"}>
                    <Link to={`/poet/${randId}`}>
                        <SubTitle className="l_color">Read more</SubTitle>
                    </Link>
                </Flex>
            </Container>
        </Section>
    )
}

export {
    DailySubject
}


