import Navbar from '../Navbar';
import {
  HomeContainer,
  HomeHeading,
  HomeBg,
  ImgBg,
  HomeContent,
  HomeImages,
  Img,
  HomeBtnWrapper,
  Button,
} from './style';

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeContainer id='home'>
        <HomeBg>
          <ImgBg src='%PUBLIC_URL%/homebg.jpg' alt='Home background' />
        </HomeBg>
        <HomeContent>
          <HomeHeading>Choose your car</HomeHeading>
          <HomeImages>
            <Img src='%PUBLIC_URL%/genesis.png' alt='Genesis G8' />
            <Img src='%PUBLIC_URL%/gmc.png' alt='GMC' />
            <Img src='%PUBLIC_URL%/aston-martin.png' alt='Aston Martin' />
          </HomeImages>
          <HomeBtnWrapper>
            <Button to='rent'>Rent a car</Button>
          </HomeBtnWrapper>
        </HomeContent>
      </HomeContainer>
    </>
  );
};

export default Home;
