import styled from "styled-components";

const DiseaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const DiseaseBox = styled.div`
  display: flex;
  border: 1px solid #E6E7E8;
  margin-bottom: 1px;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    padding: 10px;
  }
  h2 {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-left: 1px solid #E6E7E8;
  }
`

const Animaldisease = () => {
  return ( 
    <DiseaseContainer>
      <DiseaseBox>
        <h1>질환기</h1>
        <h2>질환 내용</h2>
      </DiseaseBox>
      <DiseaseBox>
        <h1>호흡기</h1>
        <h2>콧물, 계속되는 재채기, 기침, 구역질, 호흡 곤란, 심한코골이</h2>
      </DiseaseBox>
      <DiseaseBox>
        <h1>눈</h1>
        <h2>눈의 분비물, 시력 감퇴, 염증, 감염으로 인한 출혈, 흐린 테가 끼는 경우</h2>
      </DiseaseBox>
      <DiseaseBox>
        <h1>귀</h1>
        <h2>귀 고름, 머리를 흔들어 대는 경우, 귀가 부어 오르는 경우, 균형상실, 난청</h2>
      </DiseaseBox>
      <DiseaseBox>
        <h1>입</h1>
        <h2>침을 질질 흘리는 경우, 식욕 저하, 잇몸의 염증, 구취, 이빨이 부러지거나 흔들리는 경우</h2>
      </DiseaseBox>
      <DiseaseBox>
        <h1>외부기생충</h1>
        <h2>지나치게 핥는 경우, 기생충이 발견되는 경우, 비듬, 탈모, 긁적거림</h2>
      </DiseaseBox>
      <DiseaseBox>
        <h1>피와 심장</h1>
        <h2>지나친 기침, 빈혈, 무기력증, 지나친 기침, 운동을 기피하는 경우</h2>
      </DiseaseBox>
      <DiseaseBox>
        <h1>뼈, 근육, 관절</h1>
        <h2>감염된 부분의 부어 오름, 다리를 만지면 통증을 느끼는 경우, 마비, 절룩거림</h2>
      </DiseaseBox>
      <DiseaseBox>
        <h1>신경성</h1>
        <h2>발작이나 경련, 비틀거리는 걸음걸이 일부 또는 전신 마비</h2>
      </DiseaseBox>
      <DiseaseBox>
        <h1>소화기</h1>
        <h2>행동상의 변화, 균형의 상실, 체중의 과도한 변화, 식욕 상실, 변비, 설사 구토</h2>
      </DiseaseBox>
      <DiseaseBox>
        <h1>피부 및 털</h1>
        <h2>갑자기 씹어 대거나 핥는 경우, 염증 또는 종양, 탈모, 계속 긁어 대는 경우</h2>
      </DiseaseBox>
      <DiseaseBox>
        <h1>생식기</h1>
        <h2>유방의 통증, 생식 불능, 유산, 출산 후의 이상, 이상 분비물</h2>
      </DiseaseBox>
      <DiseaseBox>
        <h1>비뇨기</h1>
        <h2>배뇨가 힘든 경우, 혈뇨, 대소변 실금, 소변량의 증가, 배뇨의 감소</h2>
      </DiseaseBox>
      <DiseaseBox>
        <h1>기생충</h1>
        <h2>분비물에서 기생충을 발견하는 경우, 배가 부어 오르는 경우, 설사, 항문에서 이 물질을 발견 하는 경우, 체중 감소</h2>
      </DiseaseBox>
    </DiseaseContainer>
  );
}
 
export default Animaldisease;