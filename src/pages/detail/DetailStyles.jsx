import styled from "styled-components";
import { FlexContainer } from "../../components/globalStyles/GlobalStyles";

export const DetailContainer = styled(FlexContainer)`
  flex-direction: column;
  background: #00adb5;
  min-height: calc(100vh - 75px);
  padding: 5px;
`;

export const DetailPart = styled(FlexContainer)`
  flex-direction: row;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #e1f1dd;
`;

export const ImgContainer = styled.div`
  border: 1px solid #00adb5;
  padding: 10px;
  border-radius: 3px;
  margin: 2rem;
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderContainer = styled(FlexContainer)`
  margin: 25px;
  img {
    width: 200px;
  }
`;

export const IngContainer = styled.div`
  width: 400px;
  font-size: 1.4rem;
  margin: 2rem;
`;

export const OtherPart = styled.div`
  width: 400px;
  text-align: right;
  font-size: 1.8rem;
  margin: 2rem;
`;
