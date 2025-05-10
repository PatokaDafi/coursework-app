import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

const videos = [
  {
    id: "0fB5erd0Gro",
    title: "Toyota Seecrets",
    description: "I EXPOSED Toyota Secrets!",
  },
  {
    id: "ctEHDSgP2FI",
    title: "GR DragRace",
    description: "NEW Toyota GR Yaris: DRAG RACE & review!",
  },
  {
    id: "gSTzgGDUHXk",
    title: "GR Beating Ferrari",
    description: "Ferrari 812 v Tuned GR Yaris: DRAG RACE!",
  },
];

const Dashboard = () => {
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
