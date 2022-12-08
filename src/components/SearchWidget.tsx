import {
    Icon,
    Flex,
    Space,
} from "../styles/Styles";
import searchIcon from "../assets/img/search.svg"

interface SearchProps {
    placeholder: string,
    onEdit: (text: string) => void
}

export default function SearchWidget({ placeholder, onEdit }: SearchProps) {

    return (
        <Flex isColumn={false} position={"start"}>
            <Icon src={searchIcon} />
            <Space width={10} height={0} />
            <input type={"text"} onChange={(e) => onEdit(e.target.value)} placeholder={placeholder} />
        </Flex>
    )
}


