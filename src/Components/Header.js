import styled from 'styled-components'

const Header = styled.header`
    width: 100%;
    min-height: 20vh;
    background-color: ${props => props.bgcolor ? props.bgcolor : '#57A773'};
    display: flex;
`   

export default Header