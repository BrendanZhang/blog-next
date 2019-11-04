import styled from "styled-components"
const HomeContainer = (props) => {
	return <Container>{props.children}</Container>
}
const Container = styled.main`
	width: 25%;
	height: 100%;
  :nth-child(odd){
    
  }
`

export default HomeContainer
