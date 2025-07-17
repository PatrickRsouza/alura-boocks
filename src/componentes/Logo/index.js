import styled from 'styled-components'
import logo from '../../imagens/logo.svg'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImgage = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImgage
                src={logo}
                alt='Logo do Alura Book'
            />
            <p><strong>Alura</strong>Book</p>
        </LogoContainer>
    )
}

export default Logo