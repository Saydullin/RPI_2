import { Flex, Icon } from "../styles/Styles"

interface ImageButtonProps {
    icon?: string | undefined,
    title?: string | undefined,
    onClick: () => void
}

export default function ImageButton({ icon, title, onClick }: ImageButtonProps) {

    return (
        <Flex onClick={onClick} isColumn={false} position={"center"}>
            {icon && <Icon src={icon} />}
            {title && <span>{title}</span>}
        </Flex>
    )
}


