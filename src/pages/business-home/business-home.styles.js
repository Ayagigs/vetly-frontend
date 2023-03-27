import styled from "styled-components";
import { device } from '../../utils/device';

export const BusinessHomeParent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BusinessHomeTop = styled.div`
    width: 90%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: #0570fb;
    margin: 3rem 1rem;
    border-radius: 5px;

    & div {
        width: 30%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-radius: 5px;
        color: #03387E;
    }

    & h1 {
        font-family: "Inter";
        font-weight: 400;
        font-size: 2.8rem;
        line-height: 2.8rem;
        margin: 1rem;
    }

    & h3 {
        font-family: "Inter";
        font-weight: 300;
        font-size: .8rem;
        line-height: 1.2rem;
        margin: 1rem;
    }

    @media ${device.laptop} {
        height: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        background: #0570fb;
        margin: 3rem 1rem;
        border-radius: 5px;

        & div {
            width: 30%;
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #fff;
            border-radius: 5px;
            color: #03387E;
        }
        & h1 {
            font-family: "Inter";
            font-weight: 400;
            font-size: 7rem;
            line-height: 3rem;
            margin: 1rem;
        }

        & h3 {
            font-family: "Inter";
            font-weight: 300;
            font-size: 1.8rem;
            line-height: 1.8rem;
            margin: 1rem;
        }
    }
`;

export const BusinessHomeBottom = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & h1 {
        font-family: "Inter";
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 1.6rem;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 100%;
    height: auto;

    background: #FFFFFF;
    border: 1px solid rgba(1, 22, 50, 0.1);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
    border-radius: 5px;

    & thead tr th {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1rem;
        color: #011632;
        padding: 1rem .4rem;
    }

    & thead tr {
        border-bottom: 1px solid rgba(1, 22, 50, 0.1);
    }
    
    & tbody tr {
        border-bottom: 1px solid rgba(1, 22, 50, 0.1);
    }

    & tbody tr td {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1rem;
        color: #011632;
        padding: 1rem .4rem;
    }

    @media ${device.laptop} {
        & thead tr th {
            font-size: 1.6rem;
            line-height: 1.6rem;
            color: #011632;
            padding: 1rem .4rem;
        }
    
        & tbody tr td {
            font-size: 1.2rem;
            line-height: 1.2rem;
            color: #011632;
            padding: 1rem .4rem;
        }
    }
`;

export const StatusBadge = styled.span`
  background: ${(props) =>
        props.status === "success"
            ? "#F2FCF9"
            : props.status === "failed"
                ? "#FEF1F1"
                : "#fff9e5"};
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  width: 100%;
  height: 40%;
  color: ${(props) =>
        props.status === "success"
            ? "#22A57E"
            : props.status === "failed"
                ? "#B21015"
                : "#BFA24C"};

    @media ${device.laptop} {
        width: 60%;
        height: 60%;
    }
`;