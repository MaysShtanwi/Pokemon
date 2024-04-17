import styled from "styled-components";

const Title = styled.h2`
  text-transform: capitalize;
  color: #333;
  margin: 10px 0;
`;

const SubTitle = styled.h3`
  text-transform: capitalize;
  color: #333;
  margin: 10px 0;
`;

const MyTitle = ({ isSubTitle = false, children }) =>
  isSubTitle ? <SubTitle>{children}</SubTitle> : <Title>{children}</Title>;

export default MyTitle;
