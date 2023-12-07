import styled from "styled-components";

import bullet from '../imgs/bullet01.png';
import InformationTopBox from "../components/InformationTopBox";

import dog2 from '../imgs/dog2.png';

const TrainingContainer = styled.div`
  
`

const Training = styled.div`
  background-color: white;
  margin-bottom: 100px;
  padding: 15px;
  border-radius: 15px 15px 0px 0px;
  h2 {
    display: flex;
    align-items: center;
    margin: 10px 0px;
    span {
      margin-left: 15px;
  }
  }
  p {
    line-height: 20px;
  }
  
`

const StyledMarker = styled.div`
  background: url(${bullet});
  background-size: cover;
  width: 20px; 
  height: 20px; 
`;

const AnimalTraining = () => {
  return ( 
    <TrainingContainer>
      <InformationTopBox text="개의 훈련" img={dog2} position={77} width={100}/>
      <Training>
        <h2><StyledMarker/><span>훈련시기</span></h2>
        <p>
          훈육은 생후 2~3 개월부터 시작하는데, 처음에는 쉽고 간단하고 단시간에 끝낼 수 있는 배설요령 식사요령 등을 교육한다.<br/>
          생후 7~8 개월이 되면 신체의 성장과 행동범위가 넓어지므로 본격적으로 훈련을 시작한다.<br/>
          훈련은 훈육보다는 더 많은 시간과 노력이 필요하며 개도 더 많은 체력과 힘이 요구된다.<br/>
        </p>
        <h2><StyledMarker/><span>사회화</span></h2>
        <p>
          생후 3주령에서 13주령까지의 시기로 이 시기에는 가능한 많은 사람과 접촉시키고, 여러 소리나 상황을 경험 시키는 것이 환경에 잘 적응하는 개로 성장시킨다.<br/>
          강아지도 실수를 할 수도 있다는 사실을 알아야하고 그 것으로 화내지는 말아야한다. 나쁜 습관은 나중에 고치려 하기 보다는 처음부터 갖지 않도록 하는 것이 좋다.<br/>
          강아지와 함께 시간을 보내고 같이 놀아주고, 말도 걸고, 쓰다듬어 주면서 정을 주며 키운다.<br/>
          강아지에게 해도 되는 것과 하지 말아야 할 것을 꾸준히 가르쳐 주어야 한다.<br/>
        </p>
        <h2><StyledMarker/><span>훈육 및 훈련 시기</span></h2>
        <p>
        훈육은 생후 2~3개월부터 시작하는데 처음에는 쉽고 간단하며 단시간에 끝낼 수 있는 배설요령, 식사요령 등을 교육한다.<br/>
        생후 7~8 개월이 되면 신체의 성장과 행동범위가 넓어지므로 본격적으로 훈련을 시작한다.<br/>
        훈련은 훈육보다는 더 많은 시간과 노력이 필요하며 개에게도 더 많은 체력과 힘이 요구된다.<br/>
        </p>
      </Training>
    </TrainingContainer>
  );
}

export default AnimalTraining;