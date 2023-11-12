import React, { FC } from "react";
import {
  Typography,
  Box,
  Stack,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import Image from "next/image";
import styles from "../page.module.css";
const ExerciseVideos: FC<any> = ({ exerciseVideos, name }) => {

  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography
        textAlign={"center"}
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#FFFFFF"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#3073c9", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Grid container spacing={2} mx={'auto'} >
        {exerciseVideos?.slice(0, 3)?.map((item:any, index:number) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <a
              key={index}
              className={styles.exerciseVideo}
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <Card sx={{ height: 300, width: 350 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.video.thumbnails[0].url}
                    alt={item.video.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ fontSize: { lg: "15px", xs: "8px" } }}
                      component="div"
                    >
                      {item.video.title}
                    </Typography>
                    <Typography fontSize="14px" color="text.secondary">
                      {item.video.channelName}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExerciseVideos;
