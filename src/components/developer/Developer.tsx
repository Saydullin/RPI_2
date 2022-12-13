import {
    Flex,
    Picture,
    Space,
    SubTitle,
    Title,
} from "../../styles/Styles"
import DeveloperType from "../../data/types/DeveloperType"

interface DeveloperProps {
    developer: DeveloperType,
}

function Developer({ developer }: DeveloperProps) {

    return (
        <Flex isColumn={true} position={"center"}>
            <Picture src={developer.profileImage.src} alt={developer.profileImage.alt} />
            <Space width={0} height={20} />
            <Title>{developer.name}</Title>
            <SubTitle>{developer.lastName}</SubTitle>
            <Space height={10} width={0} />
            <SubTitle>{developer.description}</SubTitle>
            <Space height={10} width={0} />
            <a href={developer.githubLink}>GitHub</a>
        </Flex>
    )
}

export default Developer


