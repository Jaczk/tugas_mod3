import styled, {css} from 'styled-components';
export default styled.input
`
font-family: 'roboto';
font-size:1.3rem;
border:2px solid;
border-radius:5px;
padding:7px 10px;
margin: 20px 30px;
background:white;
${(props) => props.border && css`
border-color:${(props) =>props.border}; `}
color:black; `;