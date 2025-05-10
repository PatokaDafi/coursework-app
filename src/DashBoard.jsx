import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const Dashboard = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3001/videos");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    getData();
  }, []);

  return (
    <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
      {videos.map((video) => (
        <Grid item key={video.id} xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea
              component="a"
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardMedia
                component="img"
                height="180"
                image={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                alt={video.title}
              />
              <CardContent>
                <Typography variant="h6">{video.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {video.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
