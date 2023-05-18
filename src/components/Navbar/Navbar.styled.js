import { NavLink } from 'react-router-dom'
import { css, styled } from 'styled-components'

export const Header = styled.header`
  height: var(--h-header);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  transition: ease 0.3s;
  background: ${({ showmenu, showinput }) =>
    showinput === 'true' || showmenu === 'true' ? 'var(--color-bg)' : 'none'};

  ${({ showheader }) => {
    switch (showheader) {
      case 'hide':
        return css`
          translate: 0 -200px;
          transition: ease 0.3s;
        `
      case 'show':
        return css`
          background: #0005005d;
          backdrop-filter: blur(3.5px);
          transition: ease 0.3s;
        `
      default:
        css`
          background: none;
          translate: none;
        `
    }
  }}
`

export const Nav = styled.nav`
  width: min(1300px, 100%);
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

export const NavToggle = styled.div`
  display: block;
  order: 2;
  @media (min-width: 768px) {
    display: none;
  }
`

export const Menu = styled.div`
  background-color: var(--color-bg);
  position: fixed;
  right: 0;
  top: var(--h-header);
  height: calc(100vh - var(--h-header));
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  translate: ${({ show }) => (show === 'true' ? '0px' : '600px')};
  transition: translate ease 0.4s;

  @media (min-width: 768px) {
    position: unset;
    translate: 0px;
    background: none;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: flex-end;
  }
`

export const MenuItem = styled(NavLink)`
  width: 100%;
  padding: 10px;
  transition: ease 0.3s;
  @media (min-width: 768px) {
    width: unset;
    border-radius: var(--radius);
  }

  &:hover {
    background-color: var(--color-ui);
    transition: ease 0.3s;
  }

  &.active {
    background-color: var(--color-ui);
  }

  div {
    display: flex;
    gap: 5px;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
  }
`

export const NavSearchIcon = styled.div`
  cursor: pointer;
  display: grid;
  place-content: center;
  transition: ease 0.3s;
  margin-left: auto;
  margin-right: 10px;

  &:hover {
    transition: ease 0.3s;
    color: var(--color-ui);
  }

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`
