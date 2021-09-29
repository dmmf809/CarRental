import {
  NavBar,
  NavContainer,
  NavBarLogo,
  NavMenu,
  NavBarItem,
  NavBarLink,
  NavBtn,
  NavBarButton,
} from './style';

const Navbar = () => {
  return (
    <>
      <NavBar>
        <NavContainer>
          <NavBarLogo to='home'>Dodgy Brakes Car Rental</NavBarLogo>
          <NavMenu>
            <NavBarItem>
              <NavBarLink to='home'>Home</NavBarLink>
            </NavBarItem>
            <NavBtn>
              <NavBarButton to='rent'>Rent a Car</NavBarButton>
            </NavBtn>
          </NavMenu>
        </NavContainer>
      </NavBar>
    </>
  );
};

export default Navbar;
