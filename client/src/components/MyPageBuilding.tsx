import React from "react";
import styled from "styled-components";
import { usePetBuildingDeleteMutation } from "../services/api";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MapUnderBox = styled.div`
  position: relative;
  width: 90%;
  height: 140px;
  margin: 0px auto 20px;
  padding: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 20px;
  h1 {
    font-style: normal;
    padding: 10px 0px;
    font-size: 24px;
  }
  h2 {
    margin: 10px 0px;
  }
  p {
    position: absolute;
    bottom: -8px;
    left: 20px;
    display: inline-block;
    margin-top: 20px;
    padding: 10px 30px;
    font-size: 20px;
    background-color: white;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 15px;
  }
  .delete {
    position: absolute;
    bottom: 10px;
    right: 20px;
  }
`


interface BuildingData {
  buildingName: string;
  buildingAddress: string;
  buildingPhoneNumber: string;
}

const MyPageBuilding:React.FC<BuildingData> = ({buildingName,buildingAddress,buildingPhoneNumber }) => {

  const { mutate } = usePetBuildingDeleteMutation();

  const handleDeleteClick = (buildingName:string ) => {
    
    const alertDeleteSuccess = () => {
      Swal.fire({
        icon: "question",
        title: "삭제하시겟습니까?",
        confirmButtonText: "확인",
        confirmButtonColor: "#3085d6",
        showConfirmButton: true,
      }).then(result => {
        if(result.isConfirmed) {
          return mutate({ buildingName });
        }
      });
    }

    alertDeleteSuccess();
  }

  return ( 
    <MapUnderBox>
      <h1>{buildingName}</h1>
      <h2>{buildingAddress}</h2>
      <p>{buildingPhoneNumber}</p>
      <MdDelete className="delete" size={30} onClick={() => handleDeleteClick(buildingName)}/>
    </MapUnderBox>
  );
}

export default MyPageBuilding;