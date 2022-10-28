import styled from "styled-components";

export const Container = styled.div`
  color: white;

  .main-title {
    font-size: 32px;
  }

  .components-finded {
    display: flex;
    flex-direction: column;
    gap: 12px;

    li {
      width: 424px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      background-color: #303030;
      padding: 12px;
      border-radius: 12px;
    }
    img {
      width: 400px;
      border-radius: 12px;
    }
  }
`;
