import { styled } from "styled-components";
import { colorStyles } from "@styles/common";
import qrcode1 from "@images/qrcode/qrcode1.jpeg";
import qrcode2 from "@images/qrcode/qrcode2.jpeg";

const ContactWrapper = styled.div`
  margin-bottom: 50px;

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .top {
      display: flex;
      justify-content: center;
      align-items: stretch;
      margin: 50px 0;

      .map, .contact-info {
        flex: 1;
      }

      .map {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .contact-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 28px;

        color: ${colorStyles.secondaryColor};
        background-color: ${colorStyles.primaryColor};

        .info-text {
          display: flex;
          align-items: center;
          margin: 10px 0;

          font-size: 16px;
          letter-spacing: 1px;

          .icon {
            margin-top: 4px;
            margin-right: 8px;
          }
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: center;
      align-items: center;

      .qrcode {
        margin: 0 20px;
        width: 120px;
        height: 120px;
      }

      .qrcode-one {
        background: url(${qrcode1}) center/cover;
      }

      .qrcode-two {
        background: url(${qrcode2}) center/cover;
      }
    }
  }

  @media (max-width: 768px) {
    .content {
      .top {
        flex-direction: column-reverse;
        width: 80%;

        .contact-info {
          padding: 30px 20px;
        }

      }
    }

  }
`
export default ContactWrapper;