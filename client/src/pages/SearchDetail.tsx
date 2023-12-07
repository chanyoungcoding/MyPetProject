import { useParams } from "react-router-dom";

const SearchDetail = () => {

  const {name} = useParams();

  return ( 
    <div className="">
      {name}
    </div>
  );
}
export default SearchDetail;