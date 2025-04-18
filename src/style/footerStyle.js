import styled from "styled-components";

export const Footer = styled.footer `
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;

    & > p {
        font-size: var(--midFontSize);
    }
`;

export const FooterLogo = styled.div `
    filter: grayscale(1);
    width: 100px;
    height: 100px;
    overflow: hidden;
    object-fit: cover;

    & img {
        width: 100%;
        height: 100%;
    }
    
`;