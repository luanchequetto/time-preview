import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin: 32px;
  .wrapper {
    width: 100%;
  }
  @media (max-width: 991px) {
    width: 90%;
    height: auto;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  background: linear-gradient(
    ${(props) => props.theme.backgroundPrimaryColor},
    ${(props) => props.theme.backgroundSecondColor}
  );
  width: 100%;
  height: 100%;

  @media (max-width: 991px) {
    flex-direction: column;
    height: auto;
  }
`;
