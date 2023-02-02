import { StyledQrCode } from "./styles/QrCode.styled";

const QrCode = () => {
  return (
    <StyledQrCode>
      <section>
        <article>
          <img src="images/image-qr-code.png" alt="" />
          <h2>
            Improve your front-end <br /> skills by building projects
          </h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </article>
      </section>
    </StyledQrCode>
  );
};

export default QrCode;
