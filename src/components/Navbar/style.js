import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const NavBar = styled.nav`
  background: #6b7aa1;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 50px;
`;

export const NavBarLogo = styled(LinkScroll)`
  background-color: #ffff;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-family: 'Righteous', cursive;

  @media screen and (max-width: 765px) {
    padding-left: 25px;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 520px) {
    padding: 0px;
    font-size: 1.3rem;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 520px) {
    font-size: 1rem;
  }
`;

export const NavBarItem = styled.li`
  height: 80px;
`;

export const NavBarLink = styled(LinkScroll)`
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  text-decoration: none;
  height: 100%;
  transition: all 0.3s ease;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid #11324d;
  }

  &:hover {
    color: #d9fff5;
    transition: all 0.3s ease;
  }
`;

export const NavBarButton = styled(LinkScroll)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 10px 20px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 4px;
  color: #ffff;
  background: #11324d;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #d9fff5;
    transition: all 0.3s ease;
  }
`;
export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
`;
