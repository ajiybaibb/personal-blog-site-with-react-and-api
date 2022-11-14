import styled from 'styled-components';

export const BlogsScreenWrapper = styled.div`
.screen {
    color: #9340ff;
    text-align: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
h1.a1 {
    font-size: 7pc;
    margin: auto;
}
.loading {
    margin-left: 37pc;
    margin-bottom: 4pc;
}
  //mobile code
  @media screen and (max-width: 700px) {
  .loading {
    margin-left: 8pc;
    margin-bottom: 4pc;
 }
}
    `;
