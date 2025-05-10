import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";
import { useUser } from "@clerk/clerk-react";

const images = [
  {
    src: "https://www.auto-press.net/gallery/article/images_big/gallery_picture_0423057001719661375.jpg",
    title: "Yaris GR Rovanperä Edition",
    desc: "The Yaris GR is a high-performance version of the Toyota Yaris, designed for rally racing champion Rovanperä.",
    detail:
      "Rovanperä Edition DONUT Mode maximizes slide control. KALLE Mode allows aggressive rear swing and front pull for tighter curves and shorter lap times.",
  },
  {
    src: "https://scene7.toyota.eu/is/image/toyotaeurope/GR+YARIS+HERO_tcm-10-2240363-1:Medium-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0",
    title: "Yaris GR",
    desc: "The Yaris GR is a high-performance hatchback developed by Toyota Gazoo Racing, known for its rally heritage.",
    detail:
      "The GR Yaris was created by special request for the WRC team. It's a passion project led by Akio Toyoda to build a pure Toyota sports car.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2w1OMUkZyoZ4tk3fFxpuX8h8I0Xf_gmjiDw&s",
    title: "Yaris GR Ogier Edition",
    desc: "The Yaris GR Ogier Edition is a special version of the Yaris GR, named after rally legend Sébastien Ogier.",
    detail:
      "Ogier's MORIZO Mode optimizes traction with controlled restraint. SEB. Mode favors rear-wheel power for high-speed control and sharp turns.",
  },
];

const Home = () => {
  const { isSignedIn } = useUser();
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  const handleClick = (item) => {
    if (!isSignedIn) {
      setSnackOpen(true);
      return;
    }
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        {images.map((img, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="180"
                image={img.src}
                alt={img.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {img.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {img.desc}
                </Typography>
                <Button
                  sx={{ mt: 1 }}
                  variant="outlined"
                  onClick={() => handleClick(img)}
                >
                  Read more
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedItem?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{selectedItem?.detail}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackOpen(false)}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Please log in to read more.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;
