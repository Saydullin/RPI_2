import styled from "styled-components"

const Text = styled("div")`
    line-height: 28px;
    font-family: var(--regular_font);
    color: var(--text_color);
`

const Container = styled("div")`
    max-width: 1280px;
    width: 100%;
    padding: 20px;
    margin: 0 auto;
`

const Section = styled("div")<{isFullScreen: boolean}>`
    min-height: ${props => (props.isFullScreen ? "50vh" : "inherit")}
`

const BigIcon = styled("img")`
    width: 40px;
    height: 40px;
    max-width: 100%;
    object-fit: cover;
`

const Icon = styled("img")`

`

const Space = styled("div")<{width: number, height: number}>`
    width: ${props => props.width || 0}px;
    height: ${props => props.height || 0}px;
    background: transparent;
`

const BoldTitle = styled("div")`
    font-size: 25px;
    font-family: var(--regular_font);
    font-weight: 900;
`

const Flex = styled("div")<{
    isColumn: boolean,
    isStart: boolean
}>`
    display: flex;
    align-items: ${props => (props.isStart ? "start" : "center")};
    flex-direction: ${props => (props.isColumn ? "column" : "row")};

`

const Links = styled("div")<{space: number}>`
    display: flex;
    align-items: center;
    & a {
        margin: 0px ${props => (props.space / 2) || 5}px;
    }
    & a:last-child {
        margin-right: 0px;
    }
`

const Input = styled("input")<{isOpen: boolean}>`
    width: ${props => (props.isOpen ? "300px" : "0px")};
`

const PoetPicture = styled("img")`
    width: 250px;
    height: 250px;
    border-radius: 50%;
`

const PoetTitle = styled(Text)`
    font-size: var(--font_size_big);
`

const PoetSubTitle = styled(Text)`
    font-size: var(--font_size_medium);
`

export {
    Container,
    Section,
    Flex,
    BigIcon,
    Icon,
    BoldTitle,
    Links,
    Space,
    Input,
    PoetPicture,
    PoetTitle,
    PoetSubTitle
}


