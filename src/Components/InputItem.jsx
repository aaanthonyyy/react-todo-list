import styled from "styled-components";

const InputItem = styled.input`
    position: sticky;
    outline: none !important;
    border: 3px solid transparent;
    background-color: #FFFFFF;
    border-radius: 8px;
    margin: auto;
    width: 100%;
    padding: 20px;
    box-shadow: 0 5px 12px -4px #32343517;
    
    transition: 200ms border ease-in-out !important;
    
    &:focus{
        border-color: #4d6ac43b;
    }

    &::placeholder{
        color: #4247577b
    }
`


export default InputItem