import {
    Flex,
    Links
} from "../styles/Styles"

function NavigationLinks({ ...props }) {
    return (
        <Links {...props} space={20}>
            <a href="#">About</a>
            <a href="#">Developers</a>
            <a href="#">GitHub</a>
        </Links>
    )
}

export {
    NavigationLinks
}