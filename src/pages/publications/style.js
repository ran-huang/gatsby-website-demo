import { styled } from "styled-components";

const PublicationWrapper = styled.div`

  text-align: center;

  h1 {
    font-size: 2rem;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    grid-gap: 20px;
    margin: 50px -8px;
  }

  @media screen and (max-width: 600px) {

    .content {
      grid-template-columns: repeat(1, minmax(300px, 1fr));
      width: 80%;
      margin: 50px auto;
    }
  }

`

export default PublicationWrapper;