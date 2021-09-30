import styled from 'styled-components';
import Select from 'react-select';

export const RentContainer = styled.div`
  background-color: #11324d;
  padding: 5rem 0;
`;

export const RentForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin: 0 auto;
  height: 90%;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  padding: 0 50px;
  color: #ffff;

  @media screen and (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

export const Search = styled.div`
  @media screen and (max-width: 880px) {
    margin-bottom: 30px;
  }
`;

export const SearchHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 32px;
  font-family: 'Besley', serif;
  font-weight: 600;

  @media screen and (max-width: 880px) {
    font-size: 1.5rem;
  }
`;

export const SearchBar = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 10px;
  font-size: 18px;

  @media screen and (max-width: 880px) {
    padding: 0 5px;
  }
`;

export const SearchInput = styled.input`
  margin-left: 10px;
`;

export const ClientList = styled.select`
  width: 100%;
  max-width: 400px;
  padding: 5px;
  border-style: none;
`;

export const Information = styled.div`
  margin-left: 20px;
`;

export const InformationHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 25px;
  font-family: 'Besley', serif;
  font-weight: 600;

  @media screen and (max-width: 880px) {
    font-size: 1.5rem;
  }
`;

export const ClientInfo = styled.div`
  border-bottom: 2px solid #c1cfc0;
  margin-bottom: 25px;
`;

export const Client = styled.label`
  display: flex;
  text-align: right;
  line-height: 26px;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const ClientInput = styled.input`
  height: 20px;
  flex: 0 0 100px;
  margin-left: 10px;
  color: black;
`;

export const VehicleHeading = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 30px;
`;

export const ClientVehicle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const VehicleContainer = styled.div`
  grid-template-columns: 1fr 1fr;
`;

export const Option = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const VehicleSelect = styled(Select)`
  margin-bottom: 15px;
  color: black;
`;

export const ExtraLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const ExtraInput = styled.input`
  margin-right: 5px;
`;

export const Days = styled.label`
  margin-right: 10px;
`;

export const DaysInput = styled.input`
  margin-left: 10px;
  width: 40px;
`;

export const FormBtnWrap = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Submit = styled.input`
  padding: 3px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover {
    background: #6b7aa1;
    color: #ffff;
  }
`;

export const Reset = styled.input`
  text-decoration: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 3px;
  margin-right: 10px;

  &:hover {
    background: #6b7aa1;
    color: #ffff;
  }
`;

export const CarImgs = styled.img`
  width: 100%;
  padding: 10px;
`;

export const TotalPrice = styled.div`
  display: flex
  font-size: 2rem;
  margin-top: 10px;
  background: #D9FFF5;
  color: black;
  justify-content: center;
  align-items: center;
`;
