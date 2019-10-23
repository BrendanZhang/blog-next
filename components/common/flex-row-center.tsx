import styled from "styled-components"
const FlexRowCenter = ({ children }) => <Wrapper>{children}</Wrapper>
const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background: inherit;
	color: inherit;
`

export default FlexRowCenter
