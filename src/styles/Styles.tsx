import styled from "styled-components"

const Text = styled("div")`
    font-family: var(--regular_font);
    color: var(--text_color);
`

const Container = styled("div")`
    max-width: 1280px;
    width: 100%;
    padding: 20px;
    margin: 0 auto;
    height: 100%;
`

const Section = styled("div")<
    {
        isFullScreen: boolean,
        isPadding: boolean
    }>`
    min-height: ${props => (props.isFullScreen ? "100vh" : "inherit")};
    padding: ${props => (props.isPadding ? "20px" : "0px ")};
    animation: fade-in .3s ease-in-out;
`

const BigIcon = styled("img")`
    width: 30px;
    height: 30px;
    max-width: 100%;
    object-fit: cover;
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
    position: string,
}>`
    display: flex;
    align-items: center;
    justify-content: ${props => (props.position || "center")};
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

const Picture = styled("img")`
    width: 250px;
    height: 250px;
    border-radius: 50%;
`

const Title = styled(Text)`
    font-size: var(--font_size_big);
`

const PoetTitleLink = styled("a")`

`

const SubTitle = styled(Text)`
    font-size: var(--font_size_medium);
`

export {
    Container,
    Section,
    Flex,
    BigIcon,
    BoldTitle,
    Links,
    Space,
    Input,
    Picture,
    Title,
    PoetTitleLink,
    SubTitle
}


