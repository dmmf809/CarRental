import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  text-align: center;
  padding: 0 30px;
  background: #11324d;
  position: relative;
  z-index: 1;
`;
export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const HomeHeading = styled.h1`
  font-size: 100px;
  margin-bottom: 24px;
  color: #ffff;

  @media screen and (max-width: 780px) {
    font-size: 80px;
  }

  @media screen and (max-width: 550px) {
    font-size: 50px;
  }
`;

export const ImgBg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const HomeContent = styled.div`
  z-index: 1;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeImages = styled.div`
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 30%;
  height: auto;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    width: 240px;
    height: auto;
  }
`;

export const HomeBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(LinkScroll)`
  font-size: 1.5rem;
  background: #046e8f;
  padding: 20px 50px;
  border: none;
  border-radius: 10px;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.35s;
  outline: none;
  position: relative;
  color: #ffff;
  z-index: 1;

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #00253b;
    transition: all 0.35s;
    border-radius: 10px;
  }

  &:hover:after {
    width: 100%;
    z-index: -100;
  }
`;
