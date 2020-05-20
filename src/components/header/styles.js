import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
`;
