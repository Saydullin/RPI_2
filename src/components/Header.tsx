import {
    Container,
    Flex,
    BigIcon,
    BoldTitle
} from "../styles/Styles"
import {
    NavigationLinks
} from "../widgets/NavigationLinks"

function Header() {
    return (
        <header className="header dflex">
            <Container className="dflex">
                <Flex isColumn={false} isStart={false}>
                    <BigIcon src="img/feather.png" alt="logo" />
                    <BoldTitle>Wiki Poets</BoldTitle>
                </Flex>
                <NavigationLinks className="move_right" />
            </Container>
        </header>
    )
}

export {
    Header
}


