import styled from "styled-components";

export const Container = styled.div`
   
section {
display:flex;
flex-direction:row;
flex-wrap: wrap;
/* height: 811px; */
background: #5E5E5E;
padding:50px
}

h1{
top: 220px; 
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
margin-top: -10px;
margin-left: 28px;
}
.cardscomp{
  height: 140px;
  margin-top: 100px;
}

.onclickpokemon{
  width: 210px;
height: 36px;
left: 100px;
top: 62px;
margin-left: 27px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 6px;
/* identical to box height */
margin: -64px 0px 38px 35px;

text-decoration-line: underline;

color: #1A1A1A;
}
/* .cards{
  display: flex;
    gap: 0.5px;
  
} */
.cards{ 
display: flex;
gap: 160px;
flex-wrap: wrap;
justify-content: center;
margin-top: -41px;
/* padding-bottom: 495px; */
}






.buttondel{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
/* padding: 4px 10px; */
width: 110px;
height: 35px;
background: #FF6262;
border-color: #FF6262;
border-radius: 8px;
border-color:#FF6262;
margin-left: 96px;
margin-top: 161px;
color: white;
cursor: pointer;
}
.headercompleto{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 189px; 
   margin-right: 120px;
}
h1{
width: 100%;
font-family: 'Poppins';
font-style: normal;
font-size: 48px;
color: #FFFFFF;
margin-left: 53px;
margin-bottom: 74px;
cursor: pointer;
}


` 
export const Cards = styled.div`
display: flex;
gap: 20px;
flex-wrap: wrap;
justify-content: center;
padding-bottom: 495px;

`