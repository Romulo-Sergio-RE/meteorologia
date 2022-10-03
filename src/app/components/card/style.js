import styled from "styled-components";

export const ContainerCard = styled.div`
    width: 15.375rem;
    height: 19.438rem;
    border-radius: 0.75rem;
    background-color: #064789;
    color: #EBF2FA;
    box-shadow: 0.5rem 0.313rem 1.25rem rgba(66, 122, 161, 0.5);
    padding: 0.938rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .title-city-your{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .image-title-climate{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .imageClimate{
            width: 4.688rem;
            height: 4.813rem;
        }
    }
    .all-info-climate{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .info{
            display: flex;
            align-items: center;
            flex-direction: column;
            .icon-title{
                width: 5.625rem;
                height: 1.875rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
        .temperature{
            font-size: 2.813rem;
        }
    }
`