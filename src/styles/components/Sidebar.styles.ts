import styled from "styled-components";

export const SidebarStyles = styled.div`
    height: 100dvh;
    border-radius: 0px 20px 20px 0px;
    background: ${({ theme }) => theme.colors.darkGray};
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 0 24px 0;
    }

    @media (max-width: 800px) {
        height: fit-content;
        width: 100dvw;
        flex-direction: row;
        border-radius: 0;

        img {
            width: 32px;
            height: 32px;
            margin: 0 24px 0 0;
        }
        svg {
            width: 80px;
            height: 80px;
        }
    }
`
