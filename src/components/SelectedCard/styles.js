import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: calc(100vh -16px);
  margin: 16px;
  width: 40%;
  flex-direction: column;
  background: #fff;
  border-radius: 30px;
  padding: 24px;
  &.active {
    .effect-1{
      animation: transitionEffect 0.5s forwards;
    }
    .effect-2{
      animation: transitionEffect 1s forwards;
    }
    .effect-3{
      animation: transitionEffect 1.5s forwards;
    }
  }

  @media (max-width: 991px) {
    width: 100%;
    height: auto;
    margin: 32px 0;
    border-radius: initial;
    &:last-child {
      margin-bottom: initial;
    }
    &.hidden {
      display: none;
    }
  }
`;

export const CardHeader = styled.section`
  display: flex;
  justify-content: space-between;
  height: 15%;
  div {
    font-size: 32px;
    font-family: "Roboto", sans-serif;
    p {
      margin-bottom: 0;
      font-size: 32px;
      font-weight: lighter;
      letter-spacing: 0.8px;
    }
    h2 {
      margin-top: 0;
      font-weight: bold;
    }
  }
  img {
    height: 96px;
  }
  @media (max-width: 991px) {
    height: auto;
    margin-bottom: 32px;
    div {
      font-size: 24px;
    }
  }
`;

export const CardTemperature = styled.section`
  width: calc(100% + 48px); // dobro do padding Wrapper
  margin-left: -24px;
  margin-right: -24px;
  height: 50%;
  &.hidden {
    display: none;
  }
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  background: ${(props) => `url(${props.bg}) no-repeat bottom`};
  background-size: contain;
  h2 {
    margin: 0 auto;
    width: auto;
    position: relative;
    font-size: 136px;
    overflow: unset;
    &:after {
      content: "${(props) => props.unit}";
      font-size: 48px;
      position: absolute;
      top: -16px;
      right: -32px;
    }
  }
  p {
    margin: 2px;
    color: #5c3975;
    font-weight: bold;
  }

  @keyframes transitionEffect {
    from {
      opacity: 0;
      transform: translate3d(-30px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @media (max-width: 991px) {
    background: ${(props) => `url(${props.bg}) repeat bottom`};
  }
`;

export const SomeInfos = styled.section`
  border-top: solid 1px #8d7c99;
  padding: 24px 16px;
  height: 35%;
  @media (max-width: 991px) {
    margin-bottom: 32px;
  }
`;
