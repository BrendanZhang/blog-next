import styled from "styled-components";

const PageContainer = props => {
  return <Wrapper>{props.children}</Wrapper>;
};
const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
`;

export default PageContainer;
