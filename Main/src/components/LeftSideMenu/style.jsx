import styled from "styled-components";

export const Sidemenu = styled.nav`
  .menu-background {
    width: 10rem;
    padding: 1rem;
    background-color: #2e2e2e;
    border-radius: 1rem;
    text-align: center;
  }

  ul {
    width: 100%;
  }
  li {
    padding: 0.7rem;
    background-color: #5cb8e4;
    border-radius: 0.3rem;
    margin-bottom: 0.3rem;
    text-align: center;
  }
  li:hover {
    background-color: #8758ff;
    transition: 0.3s;
  }

  a {
    text-decoration: none;
    color: white;
  }

  h1 {
    color: white;
    margin-bottom: 1rem;
  }
`;
