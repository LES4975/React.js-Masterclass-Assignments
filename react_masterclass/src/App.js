import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`; // styled의 함수로 Box의 속성을 모두 가져와서 + 컴포넌트 확장

const Text = styled.h1`
  color: white;
`;

const Input = styled.input.attrs({ required: true })`
  /* attrs를 사용함으로써 Input에 필요한 속성을 한꺼번에 정해줄 수 있다. */
  background-color: tomato;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotateAnimation = keyframes`
/* keyframes를 import해서 애니메이션을 만들 수 있다. */
  0%{
    transform:rotate(0deg);
    border-radius:0px;
  }
  50%{
    transform: rotate(360deg);
    border-radius:100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius:0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box2 = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  animation: ${rotateAnimation} 1s linear infinite;
  /* 자바스크립트의 string interpolation을 이용해서 애니메이션을 불러온다. */
  span {
    /* Box 안의 span만 스타일 처리하기 */
    /* pseudo selector를 이용해서 styled component 안에 있는 객체를 선택할 수 있다. */
    font-size: 36px;
    &:hover {
      /* span:hover와 같은 코드 -> 이런 걸(&:) state selector라고 한다.*/
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello!</Title>
      <Box2>
        <Emoji as="p">:)</Emoji>
      </Box2>
      <Emoji>:D</Emoji>
    </Wrapper>
  );
}

export default App;
