import styled from "styled-components";

export const Button_choice = styled.button`

margin : 10%;
width: 50%;           
height: 70%;
padding: 5%;
margin-top : 25%;
`;

const Basic_image3= () =>{
    return(
        <svg width="320" height="358" viewBox="0 0 320 358" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-33.255 23.1175C44.5758 -59.1683 163.378 111.581 256.942 23.1175C350.505 -65.3458 330.968 219.723 256.942 297.004C178.585 378.805 -121.815 379.144 -33.255 293.093C55.3049 207.041 -106.792 100.863 -33.255 23.1175Z" fill="white"/>
</svg>

    );
};

export default Basic_image3; 

const Background_image3= styled(Basic_image3)`
rectangle{
width: 373px;
height: 358px;

background: #FFFFFF;
}
`

