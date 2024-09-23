import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @keyframes elastic {
    0% { transform: translate3d(0, 60px, 0); }
    40% { transform: translate3d(0, -5px, 0); }
    70% { transform: translate3d(0, 5px, 0); }
    100% { transform: translate3d(0, 0, 0); }
  }
`;

export const Wrapper = styled.div``;

export const Social = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 300px;
  height: 286px;
  font-size: 18px;
  font-weight: 700;
  box-shadow: inset 0 0 0 2px #dbe3ea;
  border-radius: 50px;
  color: #9aa9b5;
  background: #fff;
  overflow: hidden;
  margin: auto;
  transition: box-shadow 0.2s ease-out;

  span,
  div {
    margin: auto;
  }

  .social-links {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(62, 130, 251, 0);
    width: 100%;
    height: 100%;
    padding: 0 30px;
    transition: all 0.25s ease;

    a {
      margin: auto;
      background: #fff;
      color: #3e82fb;
      width: 80px;
      height: 80px;
      border-radius: 10px;
      line-height: 40px;
      font-size: 15px;
      transform: translate3d(0, 60px, 0);
      transition: all 0.2s;

      &:hover {
        background: #ffb468; /* Use a lighter blue or any color you prefer */
        color: #fff;
      }
    }
  }

  &:hover {
    box-shadow: inset 0 0 0 2px #dbe3ea, 0 1rem 20px rgba(62, 130, 251, 0.2);

    .social-links {
      background: linear-gradient(56deg, #ffd768 0%, #fca445 46%, #f34d1a 100%);
      a {
        animation: elastic 0.5s ease-out forwards;
      }

      a:nth-child(2) {
        animation-delay: 0.05s;
      }
    }
  }
`;
