import styled from "styled-components"

const Text = styled("div")`
    font-family: var(--regular_font);
    color: var(--text_color);
`

const Container = styled("div")`
    max-width: 1270px;
    width: inherit;
    padding: 10px 15px;
    margin: 0 auto;
    height: 100%;
`

const Section = styled("div")<
    {
        isFullScreen: boolean,
        isPadding: boolean
    }>`
    min-height: ${props => (props.isFullScreen ? "100vh" : "auto")};
    padding: ${props => (props.isPadding ? "20px" : "0px ")};
    animation: fade-in .3s ease-in-out;
`

const BigIcon = styled("img")`
    width: 30px;
    height: 30px;
    max-width: 100%;
    object-fit: cover;
`

const Icon = styled("img")`
    width: 25px;
    height: 25px;
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
    gap?: number
}>`
    display: flex;
    align-items: center;
    justify-content: ${props => (props.position || "center")};
    flex-wrap: wrap;
    flex-direction: ${props => (props.isColumn ? "column" : "row")};
    gap: ${props => (props.gap || 0)}px;
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

const Menu = styled("div")`
    display: flex;
    flex-direction: column;
`

const SlideMenu = styled("div")<{isOpen: boolean | undefined}>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: end;
    justify-content: end;
    overflow: hidden;
    top: 0;
    right: 0;
    background: rgba(0,0,0,0.3);
    display: ${props => props.isOpen ? "flex" : "none"};
    transition: .3s;
    animation: ${props => props.isOpen ? "fade-in" : "none"} .3s ease-out forwards;
    box-shadow: var(--shadow);
`

const NavigateMenu = styled("div")<{isOpen: boolean | undefined}>`
    ${props => props.isOpen == undefined && "transform: translate(100%) !important;" }
    animation: ${props => (props.isOpen ? "slide-left" : "slide-right")} .2s ease-out forwards;
    min-width: 50vw;
    max-width: 95vw;
    overflow: hidden;
    padding: 20px;
    background: #fff;
    height: 100vh;
`

const LinksAdaptive = styled("div")`
    @media (min-width: 780px) {
        ${Menu} {
            display: none;
        }
    }
    @media (max-width: 780px) {
        ${Links} {
            display: none;
        }
    }
`

const Input = styled("input")<{isOpen: boolean}>`
    width: ${props => (props.isOpen ? "300px" : "0px")};
`

const Picture = styled("img")`
    width: 250px;
    height: 250px;
    border-radius: 20px;
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
    Icon,
    BoldTitle,
    LinksAdaptive,
    Links,
    Menu,
    SlideMenu,
    NavigateMenu,
    Space,
    Input,
    Picture,
    Title,
    PoetTitleLink,
    SubTitle
}


