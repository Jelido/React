import styled from 'styled-components'
import ImgWave from '../../img/wave.png';

export const Lista = styled.ul`

    margin: 0;
    list-style: none;
    color: #3F3D56;
    font-size: 15px;
    font-weight: 700;
    line-height: 147%;
    display: flex;
    margin-right: 40px;

`
export const Espacamento = styled.span`

    margin: 55px;
    margin-top: 0;

`
export const Baixo = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    background-image: url(${ImgWave});
    background-size: 100% 60%;
    background-repeat: no-repeat;
    background-position: bottom;
    z-index: 1000;
`;

export const ImagemBackground = styled.img`

    background-image: url(../../img/wave.png);
    background-size: 100% 60%;
    background-repeat: no-repeat;
    background-position: bottom;
`
