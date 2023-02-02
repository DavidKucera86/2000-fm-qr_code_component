import { StyledQrCode } from "./styles/QrCode.styled";

const QrCode = () => {
  return (
    <StyledQrCode>
      <section>
        <article>
          <div>
            <img src="images/image-qr-code.png" alt="" />
            <h1>
              Improve your front-end <br /> skills by building projects
            </h1>
            <p>
              Scan the QR code to visit Frontend <br /> Mentor and take your
              coding skills to the next level
            </p>
          </div>
        </article>
      </section>
    </StyledQrCode>
  );
};

export default QrCode;
