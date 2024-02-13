import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";

function UserDetailsPage() {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);
  // eslint-disable-next-line

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }
      const data = await response.json();
      setUserDetails(data);
    } catch (error) {
      console.error("Error fetching user details:", error.message);
    }
  };

  return (
    <div style={style }>
      {userDetails ? (
        <div>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                padding: "30px",
              },
            }}
          >
            <Paper elevation={3}>
              <div style={style}> <Avatar src={userDetails.avatar_url} /></div>
              <p>Name: {userDetails.name}</p>
              <p>Username: {userDetails.login}</p>
              <p>Company: {userDetails.company}</p>
              <p>Followers: {userDetails.followers}</p>
              <p>Following: {userDetails.following}</p>
              <p>Public Repositories: {userDetails.public_repos}</p>
              {/* <Link to="/">Back to User List</Link> */}
              <Button href="/" variant="contained"> Back to user List</Button>
            </Paper>
          </Box>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
}

export default UserDetailsPage;
