import React from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
import Followers from "./Components/Followers";
import Styled from "styled-components";


const StyledH1 = Styled("h1")`
  font-size: 3.6em;
  display: flex;
  margin: 1em 28%;
  // width: 0 auto;
`;

const StyledCardInfo = Styled("div")`
  // border: 2px solid red;
  display: inline-block;
  margin: 1em 33% 1.5em;
  background-color: MediumSeaGreen;
  border-radius: 25px;
`;

const StyledImg = Styled("img")`
  border-radius: 25px;
`;

const StyledH3 = Styled("h3")`
  font-size: 2.4em;
  padding-left: 1em;
`;

const StyledP = Styled("p")`
  font-size: 1.2em;
  padding-left: 1em;
`;

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            //set initial default state values
            avatar: "",
            name: "", // remember not to hardcode information here
            followers: "",
            following: "",
            location: "",
            bio: ""
        }
    }

    componentDidMount() {
      this.fetchUserInfo() //fetch data for the default state value
    }
  
    // For reference, here's the GH API info: https://developer.github.com/v3/users/
    fetchUserInfo = () => {
        axios.get(`https://api.github.com/users/Amber-Pittman`) // gets my personal card information
        .then(response => {
          
          this.setState({
              avatar: response.data.avatar_url,
              name: response.data.name,
              followerNumber: response.data.followers,
              followingNumber: response.data.following,
              location: response.data.location,
              bio: response.data.bio
          })
        })
        .catch(error => {
          console.log("Error getting GH User Info: ", error)
        })
      }

    
    render() {
        return (
            <div className="card">
              <StyledH1>GitHub Profile Card</StyledH1>
              <StyledCardInfo className="card-info">
                <StyledImg src={this.state.avatar} 
                           data-pin-nopin="true" 
                           alt="user's github profile avatar" />
                <StyledH3 className="name">{this.state.name}</StyledH3>
                <StyledP className="username">{this.state.username}</StyledP>
                <StyledP>Location: {this.state.location || "Not Available"}</StyledP>
                {/* <p>Profile:  
                <a href={address to users github page}>{address to users github page}</a>
                </p>  */}
                <StyledP>Followers: {this.state.followerNumber}</StyledP>
                <StyledP>Following: {this.state.followingNumber}</StyledP>
                <StyledP>Bio: {this.state.bio}</StyledP>
              </StyledCardInfo>
              <StyledH3> {this.state.name}'s Followers</StyledH3>
              <Followers />
            </div>
        )
    }
}


export default App;