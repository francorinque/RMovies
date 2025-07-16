import { styled } from "styled-components";

export const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  grid-auto-rows: var(--h-card);
  row-gap: 50px;
  column-gap: 10px;
  place-content: center;
  justify-content: space-evenly;
`;

export const ButtonGlobal = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  transition: transform ease-in 0.3s;
  background-color: var(--color-ui);
  color: var(--color-text);
  padding: 10px 20px;
  border-radius: var(--radius);
  font-weight: var(--semibold);
  font-size: 16px;

  &:active {
    transition: transform ease-in 0.1s;
    transform: scale(0.95);
  }
`;

export const Title = styled.h3`
  font-size: clamp(18px, 3vw, 27px);
  background: var(--gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
//carousel
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 50px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;
//slides
export const WrapperSlide = styled.div`
  padding: 20px;
  width: 100%;
  display: grid;
  align-content: center;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  grid-auto-rows: max-content;
  overflow-x: scroll;
  gap: 20px;
  margin-top: 5px;
  user-select: none;
  min-height: ${({ h }) => h};

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 600px) {
    &::-webkit-scrollbar {
      display: block;
    }
    &::-webkit-scrollbar {
      height: 8px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: var(--radius);
      background-color: var(--color-ui);
    }
  }
`;

export const Slide = styled.div`
  width: ${({ w }) => w};
  min-width: ${({ w }) => w};
  height: ${({ h }) => h};
  user-select: none;

  img {
    height: 100% !important;
    border-radius: var(--radius);
  }
`;

export const Subtitle = styled.h4`
  font-size: 17px;
  font-weight: var(--semibold);
`;
