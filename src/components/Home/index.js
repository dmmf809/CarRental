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
import MainBg from './pics/homebg.jpg';
import GMC from './pics/gmc.png';
import Genesis from './pics/genesis.png';
import AstonMartin from './pics/aston-martin.png';

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeContainer id='home'>
        <HomeBg>
          <ImgBg src={MainBg} alt='Home background' />
        </HomeBg>
        <HomeContent>
          <HomeHeading>Choose your car</HomeHeading>
          <HomeImages>
            <Img src={Genesis} alt='Genesis G8' />
            <Img src={GMC} alt='GMC' />
            <Img src={AstonMartin} alt='Aston Martin' />
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
