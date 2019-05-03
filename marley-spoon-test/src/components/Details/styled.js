import styled from 'styled-components'



const Tag = styled.div`
color: rgb(0,0,0,0.4);
background: rgba(0,0,0,0.1);
display: inline-block;
padding:2px 10px;
margin:10px;
line-height: 30px;
font-size:15px;
border-radius:4px;

`;

const DetailWraper  = styled.div`
color: gray;
width: 436px;
padding:10px;
margin:10px;

cursor: pointer;
`;

const Title = styled.div`
font-size: 17px;
color:#4d90fe;
`;
const Calories = styled.div`
font-size: 17px;
color:#4d90fe;
right: 33px;

bottom: 27px;
`;

const Content = styled.div`
color: gray;
text-justify: auto;
padding:10px;
line-height:25px;
`;

const Photo = styled.img`
width: 606px;
border-radius: 10px;
`;

const PhotoWraper = styled.div`
width: 452px;

height: 406px;
overflow: hidden;
border-radius: 10px;
`;



export {
    DetailWraper,
    Tag,
    Title,
    Content,
    Photo,
    Calories,
    PhotoWraper
}