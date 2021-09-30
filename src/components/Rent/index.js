import { useState } from 'react';
import {
  RentContainer,
  RentForm,
  Search,
  SearchHeading,
  SearchBar,
  SearchInput,
  ClientList,
  Information,
  InformationHeading,
  ClientInfo,
  Client,
  ClientInput,
  ClientVehicle,
  VehicleContainer,
  VehicleHeading,
  VehicleSelect,
  Option,
  ExtraLabel,
  ExtraInput,
  Days,
  DaysInput,
  FormBtnWrap,
  Submit,
  Reset,
  CarImgs,
  TotalPrice,
} from './style';
import Compact from './pics/compact.png';
import Luxury from './pics/luxury.png';
import MidSize from './pics/midsize2.png';
import Van from './pics/van.png';
import Footer from '../Footer';

const carsToRent = [
  { value: 15, label: 'Compact ($15/day)', name: 'Compact' },
  { value: 20, label: 'Mid-size ($20/day)', name: 'Mid-size' },
  { value: 35, label: 'Luxury ($35/day)', name: 'Luxury' },
  { value: 40, label: 'Van/Truck ($40/day)', name: 'Van/Truck' },
];

const extraCharge = [
  { price: 5, label: 'Roof or Bicycle Rack ($5/day)' },
  { price: 10, label: 'GPS ($10/day)' },
  { price: 0, label: 'Child Seat (free)' },
];

const Rent = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedData, setSelectedData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    state: '',
    email: '',
    phone: '',
  });

  const [selectedCar, setSelectedCar] = useState(carsToRent[0]);
  const [carImage, setCarImage] = useState(Compact);
  const [checkBox, setCheckBox] = useState(
    new Array(extraCharge.length).fill(false)
  );
  const [showSubmit, setShowSubmit] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [days, setDays] = useState('1');
  const [totalPrice, setTotalPrice] = useState(0);
  const [showTotalPrice, setShowTotalPrice] = useState(false);

  const handleClients = (e) => {
    const { value } = e.target;

    const clientSearch = value;
    const client = data.filter((person) => {
      return person.last_name
        .toUpperCase()
        .startsWith(clientSearch.toUpperCase());
    });

    if (clientSearch === '') {
      setFilteredData([]);
    } else {
      setFilteredData(client);
    }
  };

  const handleOption = (value) => {
    setSelectedData({
      firstName: value.first_name,
      lastName: value.last_name,
      address: value.address,
      state: value.state_prov,
      email: value.email,
      phone: value.phone,
    });
    setShowSubmit(true);
    setShowReset(true);
  };

  const handleData = (e) => {
    e.preventDefault();
    const { value, name } = selectedCar;

    let rentPrice = 0;

    switch (name) {
      case 'Compact':
        rentPrice += value;
        break;
      case 'Mid-size':
        rentPrice += value;
        break;
      case 'Luxury':
        rentPrice += value;
        break;
      case 'Van/Truck':
        rentPrice += value;
        break;
      default:
        rentPrice += 15;
        break;
    }

    const extraPrice = checkBox.reduce((total, currentState, index) => {
      if (currentState) {
        return total + extraCharge[index].price;
      }
      return total;
    }, 0);

    const totalRent = (rentPrice + extraPrice) * days;
    setTotalPrice(totalRent);
    setShowTotalPrice(true);
  };

  const handleCheckbox = (position) => {
    const updateCheckbox = checkBox.map((item, i) =>
      i === position ? !item : item
    );

    setCheckBox(updateCheckbox);
  };

  const handleVehicle = (e) => {
    setSelectedCar(e);
    if (e.value === 20) {
      setCarImage(MidSize);
    } else if (e.value === 35) {
      setCarImage(Luxury);
    } else if (e.value === 40) {
      setCarImage(Van);
    } else {
      setCarImage(Compact);
    }
  };

  const handleDays = (e) => {
    setDays(e.target.value);
  };

  const handleReset = () => {
    setFilteredData([]);
    setSelectedData({
      firstName: '',
      lastName: '',
      address: '',
      state: '',
      email: '',
      phone: '',
    });
    setShowSubmit(false);
    setShowReset(false);
    setSelectedCar(carsToRent[0]);
    setCarImage(Compact);
    setCheckBox(new Array(extraCharge.length).fill(false));
    setTotalPrice(0);
    setShowTotalPrice(false);
    setDays('1');
  };

  return (
    <>
      <RentContainer id='rent'>
        <RentForm>
          <Search>
            <SearchHeading>Search Clients</SearchHeading>
            <SearchBar>
              Enter Client's Last Name:
              <SearchInput
                name='searchBar'
                type='text'
                id='searchClients'
                onChange={handleClients}
              />
            </SearchBar>
            <ClientList name='clients' size='10'>
              {filteredData.length !== 0 &&
                filteredData.map((val, index) => {
                  return (
                    <>
                      <option key={index} onClick={() => handleOption(val)}>
                        {val.first_name} {val.last_name}
                      </option>
                    </>
                  );
                })}
            </ClientList>
          </Search>
          <Information>
            <InformationHeading>Information and Rental</InformationHeading>
            <ClientInfo>
              <Client htmlFor='firstname'>
                First Name:
                <ClientInput
                  type='text'
                  name='firstName'
                  value={selectedData.firstName}
                  disabled
                />
              </Client>
              <Client htmlFor='lastname'>
                Last Name:
                <ClientInput
                  type='text'
                  name='lastName'
                  value={selectedData.lastName}
                  disabled
                />
              </Client>
              <Client htmlFor='address'>
                Address:
                <ClientInput
                  type='text'
                  name='address'
                  value={selectedData.address}
                  disabled
                />
              </Client>
              <Client htmlFor='state'>
                State/Prov:
                <ClientInput
                  type='text'
                  name='state_prov'
                  value={selectedData.state}
                  disabled
                />
              </Client>
              <Client htmlFor='email'>
                Email:
                <ClientInput
                  type='email'
                  name='email'
                  value={selectedData.email}
                  disabled
                />
              </Client>
              <Client htmlFor='phone'>
                Phone:
                <ClientInput
                  type='tel'
                  name='phone'
                  value={selectedData.phone}
                  disabled
                />
              </Client>
            </ClientInfo>
            <ClientVehicle>
              <VehicleContainer>
                <VehicleHeading>Vehicle</VehicleHeading>
                <VehicleSelect
                  options={carsToRent}
                  value={selectedCar}
                  isSearchable={false}
                  onChange={handleVehicle}
                />
                <Option htmlFor='option'>Option</Option>
                {extraCharge.map((extra, index) => {
                  return (
                    <ExtraLabel key={index}>
                      <ExtraInput
                        type='checkbox'
                        name={extra.label}
                        value={extra.label}
                        checked={checkBox[index]}
                        onChange={() => handleCheckbox(index)}
                      />
                      {extra.label}
                    </ExtraLabel>
                  );
                })}
                <Days htmlFor='days'>
                  Days:
                  <DaysInput
                    type='number'
                    value={days}
                    min='1'
                    max='30'
                    name='days'
                    onChange={(e) => handleDays(e)}
                  />
                </Days>
                <FormBtnWrap>
                  {showReset ? (
                    <Reset type='reset' name='reset' onClick={handleReset} />
                  ) : null}
                  {showSubmit ? (
                    <Submit type='submit' onClick={handleData} />
                  ) : null}{' '}
                </FormBtnWrap>
                {showTotalPrice ? (
                  <TotalPrice>
                    Total Price to Rent: ${totalPrice.toFixed(2)}
                  </TotalPrice>
                ) : null}
              </VehicleContainer>

              <CarImgs alt='Cars to rent' src={carImage} />
            </ClientVehicle>
          </Information>
        </RentForm>
      </RentContainer>
      <Footer />
    </>
  );
};

export default Rent;
