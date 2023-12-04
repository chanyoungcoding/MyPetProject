import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

const SearchContainer = styled.div`
  width: 90%;
  margin: 100px auto;
  p {
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0px;
  }
`

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  .searchicon {
    position: relative;
    left: -40px;
  }
`

const SearchInput = styled.input`
  width: 50%;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 10px 60px 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`
const Search = () => {
  return ( 
    <SearchContainer>
      <p>어떤 음식이 강아지에게<br/>안전한지 궁금하시죠?</p>
      <SearchInputContainer>
        <SearchInput type="text"/>
        <IoSearchOutline className="searchicon" size={35}/>
      </SearchInputContainer>

      <p>추천 검색어</p>
      <div>
        <div><p>#양파</p></div>
        <div><p>#감자</p></div>
        <div><p>#오징어</p></div>
      </div>
      <div>
        <div>hello</div>
        <div>hello</div>
      </div>
    </SearchContainer>
  );
}

export default Search;