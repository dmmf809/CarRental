import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #022f40;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin: 16px;
`;

export const FooterHeading = styled.h2`
  color: #ffff;
  margin-bottom: 12px;
  border-bottom: 2px solid #ffff;
`;

export const Email = styled.a`
  color: #c1cfc0;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: 0.3 ease-out;

  &:hover {
    color: #0052fa;
    transition: 0.3 ease-out;
  }
`;

export const Phone = styled.a`
  color: #c1cfc0;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: 0.3 ease-out;

  &:hover {
    color: #0052fa;
    transition: 0.3 ease-out;
  }
`;

export const Icon = styled.a`
  color: #9d9fa3;
  text-decoration: none;
  transition: 0.3 ease-out;

  &:hover {
    color: #ffff;
    transition: 0.3 ease-out;
  }
`;

export const IconP = styled.p`
  margin-top: 10px;
  font-size: 12px;
  color: #9d9fa3;
`;
