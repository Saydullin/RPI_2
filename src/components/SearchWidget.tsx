import {
    Icon,
    Flex,
    Space,
} from "../styles/Styles";
import searchIcon from "../assets/img/search.svg"

interface SearchProps {
    placeholder: string
}

export default function SearchWidget({ placeholder }: SearchProps) {

    return (
        <Flex isColumn={false} position={"start"}>
            <Icon src={searchIcon} />
            <Space width={10} height={0} />
            <input type={"text"} placeholder={placeholder} />
        </Flex>
    )
}


