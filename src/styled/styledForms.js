import styled from 'styled-components';


export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%
`;


export const Form = styled.form`
    @media (min-width: 1200px){
        width: 40%;
        padding: 25px; 
    } 
    @media(min-width: 768px ){
        width: 50%;
        padding: 10px;
    }
    text-align: center;

        label {
            display: inline-block;
            font-size: 16px;
            margin-right: 10px;
            min-width: 80px;
            text-align: right;
        }

        input + span {
            font-size: 14px
            position: absolute;
            right: 0; 
        }
`;

export const Input = styled.input`
    padding: 8px 16px;
    border-radius: 4px;
    
    border-color: ${(props) => props.myerror === true ? 'red' : 'rgba(255,255,255,.3)'}
    @media (min-width: 375px){
        width: 200px;
    } 
    @media (min-width: 768px){
        width: 280px;
    }  
`;

export const FieldSet = styled.fieldset`
    padding: 10px 0;
    position: relative;
    text-align: right;
    bottom: -15px; 
   
    span {
        position: absolute; 
        @media (min-width: 768px){
            right: 0;
            bottom:15px;
        }  
    }
`;

export const Button = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border: none;
    border-radius: 3px;
    background-color: ${props => props.primary ? '#1E88E5' : '#90CAF9'}
    margin-top:15px;
`;