import styled from "styled-components";

export const StyledQrCode = styled.section`
  section {
    height: 100vh;
    display: flexbox;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    article {
      background-color: hsl(0, 0%, 100%);
      padding: 1rem;
      border-radius: 5%;

      div {
        width: 18.75rem;
        text-align: center;

        img {
          width: 18.75rem;
          border-radius: 5%;
        }

        h1 {
          font-weight: 700;
          font-size: 1.5rem;
        }

        p {
          font-size: 15px; // requiered exactly 15 px
          color: hsl(220, 15%, 55%);
        }
      }
    }
  }
`;
