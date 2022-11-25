import { useState } from "react"
import {
    Flex,
    Space,
    BoldTitle,
    Input
} from "../styles/Styles"

function Search() {
    const [isActive, setActive] = useState(false)
    
    return (
        <Flex isColumn={false} position="center" className="cp">
            <Space width={20} height={0} />
            {/* <Icon onClick={() => setActive(!isActive)} src="img/search.svg" className="icon_link" tabIndex={0} /> */}
            {/* {isActive && (<Input isOpen={isActive} />)} */}
            <Input isOpen={isActive} />
        </Flex>
    )
}

export {
    Search
}


