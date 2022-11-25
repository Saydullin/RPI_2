import {
    Flex,
    Picture,
    Space,
    SubTitle,
    Title,
} from "../../styles/Styles"
import saydullinPicture from "../../assets/img/me.jpg"
import DeveloperType from "../../data/types/DeveloperType"

interface DeveloperProps {
    developer: DeveloperType,
}

function Developer({ developer }: DeveloperProps) {

    return (
        <Flex isColumn={true} position={"center"}>
            <Picture src={saydullinPicture} />
            <Space width={0} height={20} />
            <Title>{developer.name}</Title>
            <SubTitle>{developer.lastName}</SubTitle>
            <SubTitle>{developer.description}</SubTitle>
        </Flex>
    )
}

export default Developer


