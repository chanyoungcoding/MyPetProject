import styled from 'styled-components';
import Growth1 from '../imgs/growth1.png';
import Growth2 from '../imgs/growth2.png';
import Growth3 from '../imgs/growth3.png';
import Growth4 from '../imgs/growth4.png';
import Growth5 from '../imgs/growth5.png';

import dog1 from '../imgs/dog1.png';
import InformationTopBox from '../components/InformationTopBox';

const GrowthContainer = styled.div`
  p {
    font: inherit;
    line-height: 20px;
  }
`

const ProcedureBigContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 15px 15px 0px 0px;
`

const ProcedureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2개의 동일한 폭의 열을 생성 */
  gap: 16px; /* 열 사이의 간격 설정 */
  margin: 25px 0px 100px;
  padding: 5px;
`

const ProcedureBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProcedureImg = styled.div`
  width: 144px;
  height: 92px;
  background: url(${props => props.property || ''}) no-repeat center/cover;
`

const ProcedureProduceBox = styled.div`
  margin-top: 10px;
  li {
    margin: 3px 0px;
    font-weight: bold;
  }
`

const AnimalGrowth = () => {
  return ( 
    <GrowthContainer>
      <InformationTopBox text='강아지의 성장' img={dog1} position={74} width={110}/>
      <ProcedureBigContainer>
        <p>
          출생에서 3주까지 건강한 강아지는 대체로 평온하다. 강아지는 90%의 시간은 잠을 자고 10%의 시간은 젖을 빨며 젖꼭지를 차지하기 위해 경쟁한다.
          처음 이틀 동안은 머리를 밑으로 묻고 잠을 잔다. 자는 동안 강아지는 놀라기도 하고 소리에 반응을 나타내는데, 이것을 활동하는 잠이라고 한다.
          활동 잠은 강아지들이 하는 유일한 운동 방법이고 후에 쓸 근육을 발달을 돕기도 하기 때문에 지극히 정상적이다.
        </p>
        <ProcedureContainer>
          <ProcedureBox>
            <ProcedureImg property={Growth1}/>
              <ProcedureProduceBox>
                <li>눈을 뜨지 못함</li>
                <li>5~6일 뒤 귀 들림</li>
                <li>5~6일 탯줄 떨어짐</li>
                <li>추위에 약함</li>
              </ProcedureProduceBox>
          </ProcedureBox>
          <ProcedureBox>
            <ProcedureImg property={Growth2}/>
              <ProcedureProduceBox>
                <li>젖니 생성</li>
                <li>움직임 활발</li>
                <li>14~17일 눈뜸</li>
                <li>20시간 이상 수면</li>
              </ProcedureProduceBox>
          </ProcedureBox>
          <ProcedureBox>
            <ProcedureImg property={Growth3}/>
              <ProcedureProduceBox>
                <li>젖니 모두 생성</li>
                <li>장난이 심함</li>
                <li>젖을 뗌</li>
                <li>체형의 완성</li>
                <li>전엽병 쉽게 노출</li>
              </ProcedureProduceBox>
          </ProcedureBox>
          <ProcedureBox>
            <ProcedureImg property={Growth4}/>
              <ProcedureProduceBox>
                <li>어미로부터 독립가능</li>
              </ProcedureProduceBox>
          </ProcedureBox>
          <ProcedureBox>
            <ProcedureImg property={Growth5}/>
              <ProcedureProduceBox>
                <li>성견의 80% 도달</li>
                <li>전체적인 균형 형성</li>
                <li>첫 발정시기</li>
              </ProcedureProduceBox>
          </ProcedureBox>
        </ProcedureContainer>
      </ProcedureBigContainer>
    </GrowthContainer>
  );
}

export default AnimalGrowth;