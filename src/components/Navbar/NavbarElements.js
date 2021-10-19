import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
width: 100%;
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1250px) / 2);
  z-index: 99;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #2E4562;
  font-weight: 700;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  z-index: 99;
  &.active {
    color: #2E4562;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #2E4562;
  z-index: 99;
  @media screen and (max-width: 900px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 130px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #2E4562;
  padding: 10px 22px;
  color: #fff;
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
