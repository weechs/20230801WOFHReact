import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { xmas, box } from "./Xmas";

export const Button = styled(LinkR)`
  border-radius: 25px;
  background: ${({ primary }) =>
    primary && new Date() >= new Date(xmas) && new Date() <= new Date(box)
      ? "var(--color-xmas)"
      : primary
      ? "var(--color-darkpink)"
      : "var(--color-lightergrey)"};
  white-space: nowrap;
  padding: ${({ primary }) => (primary ? "22px 48px" : "22px 48px")};
  color: ${({ primary }) =>
    primary && new Date() >= new Date(xmas) && new Date() <= new Date(box)
      ? "var(--color-lightergrey)"
      : primary
      ? "var(--color-lightergrey)"
      : "var(--color-darkpink)"};
  font-size: ${({ primary }) => (primary ? "20px" : "20px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-top: 20px;
  z-index: 3;

  @media screen and (max-width: 768px) {
    width: 240px;
    white-space: pre-wrap;
    font-size: ${({ primary }) => (primary ? "16px" : "14px")};
    padding: ${({ primary }) => (primary ? "22px 48px" : "22px 48px")};
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) =>
      primary && new Date() >= new Date(xmas) && new Date() <= new Date(box)
        ? "var(--color-lightergrey)"
        : primary
        ? "var(--color-lightergrey)"
        : "var(--color-darkpink)"};
    color: ${({ primary }) =>
      primary && new Date() >= new Date(xmas) && new Date() <= new Date(box)
        ? "var(--color-xmas)"
        : primary
        ? "var(--color-darkpink)"
        : "var(--color-lightergrey)"};
  }
`;
