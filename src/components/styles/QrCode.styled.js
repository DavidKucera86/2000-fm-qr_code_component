import styled from "styled-components";

export const StyledQrCode = styled.section`
  section {
    display: flexbox;
    flex-direction: row;
    justify-content: center;
    margin-top: 5%;

    article {
      border-radius: 5%;
      background-color: hsl(0, 0%, 100%);
      width: 18.75rem;
      padding: 1.25rem;
      text-align: center;

      img {
        width: 18.75rem;
        border-radius: 5%;
      }

      h2 {
        font-weight: 700;
      }

      p {
        font-size: 15px;
        color: hsl(220, 15%, 55%);
      }
    }

    @media (max-width: 375px) {
      margin: 5%;
    }
  }
`;
