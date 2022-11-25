import { Link } from "react-router-dom"
import {
    Flex,
    Links
} from "../styles/Styles"

function NavigationLinks({ ...props }) {
    return (
        <Links {...props} space={20}>
            <Link to="/poets">All poets</Link>
            <Link to="/about">About</Link>
            <Link to="/developers">Developers</Link>
            <Link to="/github">GitHub</Link>
        </Links>
    )
}

export {
    NavigationLinks
}