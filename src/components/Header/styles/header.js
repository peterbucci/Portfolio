import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import colors from "../../../assets/colors";

export const Menu = styled.menu`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: ${({ height }) =>
    height > 400 ? "rgba(0, 0, 0, 0.6)" : "transparent"};
  box-shadow: ${({ height }) => (height > 400 ? "1px 0 5px #000" : "none")};
  color: #fff;
  user-select: none;
  overflow: hidden;
  z-index: 100;
`;

export const InneWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

export const Logo = styled.header`
  flex: 0 0;
  display: flex;
  align-items: center;
  margin: 5px 0;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Icon = styled(Link)`
  all: unset;
  padding: 10px 5px 0 10px;
  background-color: ${`rgba(${colors.paletteOne.join(", ")}, .6)`};
  border: solid 3px #fff;
  box-shadow: 5px 5px ${`rgba(${colors.paletteThree.join(", ")}, 1)`};
  font-family: "Roboto Mono", monospace;
  font-size: 24px;
  color: ${`rgba(${colors.paletteFour.join(", ")}, 1)`};
`;

export const Navigation = styled.nav`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
  font-size: 16px;
`;

export const NavLink = styled(Link)`
  all: unset;
  padding: 10px 20px;
  font-family: "Roboto Mono", monospace;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${`rgba(${colors.paletteFour.join(", ")}, 1)`};
    transform: scale(1.1);
  }
`;

export const NavIcon = styled.div`
  color: #fff;
  -webkit-filter: drop-shadow(1px 1px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(1px 1px rgba(0, 0, 0, 0.7));
  &:hover {
    color: ${`rgba(${colors.paletteFour.join(", ")}, 1)`};
  }
`;
