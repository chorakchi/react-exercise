import styled from 'styled-components'

const ListWraper = styled.div`
width: 500px;
margin:20px;
padding:20px;
overflow:auto;
height:100%;
`;

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

const Item  = styled.div`
color: gray;
padding:10px;
margin:10px;

cursor: pointer;
`;

const Title = styled.div`
font-size: 17px;
color:#4d90fe;
`;

const Content = styled.div`
color: gray;
text-justify: auto;
padding:10px;
line-height:25px;
`;

export {
    Item,
    Tag,
    Title,
    Content,
    ListWraper
}