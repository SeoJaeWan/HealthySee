import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 1400px;
  margin-left: 260px;

  .Title {
    font-size: 50pt;
    margin-left: 110px;
    color: #676a72;
  }
  .platform {
    display: flex;
    margin-left: 160px;
    margin-top: 100px;
    flex-direction: column;
  }
  .Login {
    margin-top: 5%;
    margin-left: 5%;
  }
  .LoginForm {
    display: flex;
    height: 60vh;
    width: 90%;
    font-size: 50pt;
    border: 5px solid #676a72;
    border-left: solid white;
    margin-left: 5%;
    &::before {
      content: "";
      position: static;
      margin: -1%;
      margin-top: -2.3%;
      display: block;
      border-radius: 50%;
      width: 50px;
      height: 58px;
      background: #676a72;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
      transition: 0.2s;
    }
  }
  .rightCon {
  }
`;

export const Kakao = styled.div`
  width: 300px;
  color: #2b0b20;
  background-color: #fcf012;
  text-align: center;
  font-size: 3rem;
`;

export const Google = styled.div`
  width: 300px;
  color: white;
  background-color: #d94d3d;
  text-align: center;
  font-size: 3rem;
  margin-top: 70px;
`;
export const Naver = styled.div`
  color: white;
  background-color: #13d261;
  text-align: center;
  width: 300px;
  font-size: 3rem;
  margin-top: 70px;
`;

export const Label = styled.hr`
  width: 0px;
  height: 50vh;
  margin-left: 125px;
  border-left: 3px solid #676a72;
`;

export const Home = styled.label`
  height: 53vh;
  margin-left: 50px;
`;
