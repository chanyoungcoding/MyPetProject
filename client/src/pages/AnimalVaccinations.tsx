import styled from "styled-components";

const VaccinationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 60px;
`

const VaccinationBox = styled.div`
  width: 370px;
  margin: 30px 0px;
`

const VaccinationBoxTop = styled.div`
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 15px 0px 0px;
  h1 {
    padding: 50px;
  }
`

const VaccinationBoxBottom = styled.div`
  padding: 20px 5px;
  background-color: white;
  line-height: 30px;
  border-radius: 0px 0px 15px 15px;
`

const AnimalVaccinations = () => {
  return ( 
    <VaccinationContainer>
      <VaccinationBox>
        <VaccinationBoxTop>
          <h1>혼합예방주사</h1>
        </VaccinationBoxTop>
        <VaccinationBoxBottom>
          <li>기초접종 : 생후 6~8주에 1차 접종</li>
          <li>추가접종 : 1차 접종 후 2~4주 간격으로 2~4회</li>
          <li>보강접종 : 추가접종 후 매년 1회 주사</li>
        </VaccinationBoxBottom>
      </VaccinationBox>
      <VaccinationBox>
        <VaccinationBoxTop>
          <h1>코로나바이러스성 장염</h1>
        </VaccinationBoxTop>
        <VaccinationBoxBottom>
          <li>기초접종 : 생후 6~8주에 1차 접종</li>
          <li>추가접종 : 1차 접종 후 2~4주 간격으로 1~2회</li>
          <li>보강접종 : 추가접종 후 매년 1회 주사</li>
        </VaccinationBoxBottom>
      </VaccinationBox>
      <VaccinationBox>
        <VaccinationBoxTop>
          <h1>기관ㆍ기관지염</h1>
        </VaccinationBoxTop>
        <VaccinationBoxBottom>
          <li>기초접종 : 생후 6~8주에 1차 접종</li>
          <li>추가접종 : 1차 접종 후 2~4주 간격으로 1~2회</li>
          <li>보강접종 : 추가접종 후 매년 1회 주사</li>
        </VaccinationBoxBottom>
      </VaccinationBox>
      <VaccinationBox>
        <VaccinationBoxTop>
          <h1>광견병</h1>
        </VaccinationBoxTop>
        <VaccinationBoxBottom>
          <li>기초접종 : 생후 3개월 이상 1회 접종</li>
          <li>보강접종 : 6개월 간격으로 주사</li>
        </VaccinationBoxBottom>
      </VaccinationBox>
    </VaccinationContainer>
  );
}
export default AnimalVaccinations;