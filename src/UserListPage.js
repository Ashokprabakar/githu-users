import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function UserListPage() {
  const [users, setUsers] = useState([]);
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  };

  return (
    <div style={style}>
      <ul>
        {users.map((user) => (
          <Button href={`/user/${user.login}`} key={user.id}>
            <Box
              sx={{ minWidth: 300, padding: "20px" }}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Card variant="elevation" style={style}>
                <CardContent style={style} key={user.id}>
                  <div style={style}> <Avatar src={user.avatar_url} /></div>
                  <Typography
                    sx={{ fontSize: 16, fontWeight: "bold" }}
                    color="text.primary"
                    gutterBottom
                  >
                    {user.login}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 10, fontWeight: "bold" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Click to know more
                  </Typography>
                </CardContent>
                <Divider orientation="horizontal" flexItem />
                <CardActions></CardActions>
              </Card>
            </Box>
          </Button>
        ))}
      </ul>
    </div>
  );
}

export default UserListPage;
