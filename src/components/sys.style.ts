import styled from 'styled-components';

interface SystemCardStyleProps {
  imgUrl: string;
}

export const SystemCardStyle = styled.div<SystemCardStyleProps>`
    margin: 15px;
    width: 400px;
    height: 280px;
    background-image: ${({ imgUrl }) => `url(${imgUrl})`};
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 2px 4px 8px black;
    border-radius: 5px;
    // border: 1px solid black;
//  background-blend-mode: screen;
`;
export const SystemCardATagStyle = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffffde;
    margin-bottom: -46px;
`;

//a
// display: flex;
//     flex-direction: column;
//     align-items: center;