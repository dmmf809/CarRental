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
          <ImgBg src='/pics/homebg.jpg' alt='Home background' />
        </HomeBg>
        <HomeContent>
          <HomeHeading>Choose your car</HomeHeading>
          <HomeImages>
            <Img src='/pics/genesis.png' alt='Genesis G8' />
            <Img src='/pics/gmc.png' alt='GMC' />
            <Img src='/pics/aston-martin.png' alt='Aston Martin' />
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
