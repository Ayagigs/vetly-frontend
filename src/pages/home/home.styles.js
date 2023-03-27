import styled from "styled-components";
import { device } from '../../utils/device';

export const HomeParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const HomeNav = styled.div`
    width: 100%;
    height: 10%;
    background: #fff;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column-reverse;
    background: #f8f8f8;
    
    @media ${device.laptop} {
        display: flex;
        flex-direction: row;
    }
`;

export const HomeLeft = styled.div`
    width: 100%;
    height: 50%;
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Inter";

    h1 {
        font-weight: 400;
        font-size: 2.8rem;
        line-height: 2.8rem;
        margin: 3rem;
    }

    h3 {
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 1.2rem;
        margin: 0 3rem 0 3rem;
    }
    
    @media ${device.laptop} {
        width: 50%;
        height: 100%;

        h1 {
            font-weight: 400;
            font-size: 4.2rem;
            line-height: 4.2rem;
            margin: 12rem 12rem 3rem 12rem;
        }
    
        h3 {
            font-weight: 300;
            font-size: 2rem;
            line-height: 2rem;
            margin: 0 12rem 0 12rem;
        }
    }
;`

export const HomeRight = styled.div`
    width: 100%;
    height: 50%;
    
    @media ${device.laptop} {
        width: 50%;
        height: 100%;

        & img {
            width: 100%;
            height: 100%;
        }
    }
;`

export const LogoContainer = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    color: #011632;
    padding: 1rem;

    & h1 {
        font-family: "Urbane";
        font-style: normal;
        font-weight: 600;
        font-size: 2.5rem;
    }

    & img {
    width: 2.5rem;
    height: 2.5rem;
    }

@media ${device.laptop} {
    margin-top: 1rem;
    margin-left: 9rem;
    width: 20%;
    height: 15%;
    display: flex;
    align-items: center;
    color: #011632;
    padding: 3rem 2rem;

    & h1 {
        font-family: "Urbane";
        font-style: normal;
        font-weight: 600;
        font-size: 3.75rem;
    }

    & img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        margin: 1rem;
    }
}
`;

export const MainContainer = styled.div`    
    width: 100%;
    height: 80%;
`;

export const TrusteesContainer = styled.div`
    width: 80%;
    height: 20%;
    margin-left: 3rem;
    margin-bottom: 3rem;

    @media ${device.laptop} {
        width: 50%;
        height: 20%;
        margin-left: 12rem;
        margin-bottom: 3rem;
    }
`;

export const TrusteesWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;

    & img {
        width: 6rem;
        height: 3rem;
    } 

    @media ${device.laptop} {
        & img {
            width: 15rem;
            height: 5rem;
        }
    }
`;

export const ButtonWrapper = styled.div`
    margin: 3rem 3rem 0 3rem;

    @media ${device.laptop} {
        margin: 6rem 12rem 0 12rem;
    }
`;