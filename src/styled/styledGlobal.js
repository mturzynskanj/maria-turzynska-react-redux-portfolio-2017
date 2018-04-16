import styled from 'styled-components'


export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    height:100vh;
    flex: 1;
    flex-base: 100%;
    `;

export const Page = styled.section`
        box-sizing: border-box;
        align-self: center;
        flex: 1;
        
        padding: 0 10px;
        @media (min-width: 1200px){
           width: 980px;
        }    
    `;


export const Link = styled.a`
    border: 1px solid rgba(255,255,255, .4);
    border-radius: 4px;
    transition: all .3s ease-in-out;
    @media (min-width: 768px){
        font-size: 16px;
        padding: 2px 15px;
    } 
    @media (min-width: 375px){
        font-size: 14px;
        padding: 2px 10px;
    }  

 &:hover {
    border: 1px solid rgba(255,255,255, 1);
}

`;




