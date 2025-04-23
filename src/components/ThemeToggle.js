import React from 'react';
import styled from 'styled-components';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

const ToggleContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  padding: 0.5rem;
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme}>
      {theme === 'light' ? <BsMoonStarsFill /> : <BsSun />}
    </ToggleContainer>
  );
};

export default ThemeToggle;