import styled from "styled-components";
import { TbChristmasTree } from "react-icons/tb";
import { GiPartyPopper } from "react-icons/gi";

export const christmastree = TbChristmasTree;
export const firework = GiPartyPopper;

export const xmasclose = new Date("December 22, 2023 14:30:00");
xmasclose.setDate(22);

export const nyopen = new Date("January 8, 2024 00:00:00");
nyopen.setDate(8);

export const xmas = new Date("December 24, 2023 00:00:00");
xmas.setDate(24);

export const box = new Date("December 26, 2023 00:00:00");
box.setDate(26);

export const nye = new Date("December 31, 2023 00:00:00");
nye.setDate(31);

export const nyd = new Date("January 1, 2024 00:00:00");
nyd.setDate(1);

export const ChristmasTree = styled(christmastree)`
  margin-left: 2px;
  font-size: 40px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  &:hover {
    color: var(--color-xmas);
  }
`;
export const Firework = styled(firework)`
  margin-left: 2px;
  font-size: 40px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  &:hover {
    color: var(--color-xmas);
  }
`;
