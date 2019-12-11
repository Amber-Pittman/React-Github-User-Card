import React from "react";
import Styled from "styled-components";

const StyledDiv = Styled("followerCard")`
    display: flex;
    margin: 0 auto;
    width: 66%;
    height: 66%;
    padding: 1%;
    background-color: #eeedff;
    border-bottom: 2px solid DarkGrey;
`;

const StyledImg = Styled("img")`
    border-radius: 25px;
    width: 40%;
    margin: 2%;
`;

const StyledH3 = Styled("h3")`
    margin: 0 auto;
    text-transform: capitalize;
    font-size: 1.8em;
    line-height: 2;
`;


function FollowerData(props) {
    return(
        <StyledDiv className="followerCard">
            <StyledImg src={props.item.avatar_url} 
                data-pin-nopin="true"
                alt="Follower User Profile Head Shot on Github"/>
            <br></br>
            <StyledH3> {props.item.login} </StyledH3>
        </StyledDiv>
    )    
}

export default FollowerData;