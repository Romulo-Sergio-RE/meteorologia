import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .container-search{
        height: 11.25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    .input-btn-search{
        display: block;
    }
    .title{
        font-size: 2rem;
        font-weight: bold;
        margin-top: 1.25rem;
        color: #064789;
    }
    .label-search{
        font-size: 1.125rem;
        color: #064789;
    }
    .icon-search{
        position: absolute;
        margin: 0.75rem 0 0 0.5rem;
        color: #EBF2FA;
    }
    .input-search{
        width: 13.313rem;
        height: 2.813rem;
        border-radius: 0.75rem;
        padding-left: 2rem;
        background-color: #427AA1;
        border: 2px solid #064789;
        font-size: 1rem;
        :focus{
            box-shadow: 0 0 0 0;
            outline: 0;
            color: #EBF2FA;
        }
        ::placeholder{
            color: #EBF2FA;
        }
    }
    .btn-search{
        display: block;
        width: 6.875rem;
        height: 2.813rem;
        background-color: #064789;
        border-radius: 0.75rem;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        cursor: pointer;
        transition: all 1s;
        margin: 0.625rem 0 0 3.438rem;
        color: #EBF2FA;
        :hover{
            transform: scale(1.1);
        }
    }
    .btn-temperature{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 1.25rem 0.5rem;
        .temperature-c{
            width: 3.125rem;
            height: 1.563rem;
            border-radius: 0.5rem;
            border: none;
            background-color: ${(props)=> props.btnColorC};
            color: #EBF2FA;
            margin: 0 0.313rem;
        }
        .temperature-f{
            width: 3.125rem;
            height: 1.563rem;
            border-radius: 0.5rem;
            border: none;
            background-color: ${(props)=> props.btnColorF};
            color: #EBF2FA;
            margin: 0 0.313rem;
        }
    }
    @media only screen and (min-width: 426px){
        .label-search{
            font-size: 1.25rem;
        }
        .input-btn-search{
            display: flex;
        }
        .btn-search{
            margin: 0 0 0 0.625rem;
        }
    }
`;