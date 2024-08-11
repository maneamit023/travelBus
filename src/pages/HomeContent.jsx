import React from "react";
import HERO_IMAGE from "../../src/assets/images/hero-img.png";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Container } from "react-bootstrap";
import web0 from "../assets/logo/web-icon-0.svg";
import web1 from "../assets/logo/web-icon-1.svg";
import web2 from "../assets/logo/web-icon-2.svg";
import web3 from "../assets/logo/web-icon-3.svg";
// import "../App.css"
import "../styles/HomeContent.css"
import "../assets/fonts/IBMPlexSans-Bold.ttf";
import "../assets/fonts/IBMPlexSans-Bold.ttf";
import "../assets/fonts/IBMPlexSans-BoldItalic.ttf";
import "../assets/fonts/IBMPlexSans-ExtraLight.ttf";
import "../assets/fonts/IBMPlexSans-ExtraLightItalic.ttf";
import "../assets/fonts/IBMPlexSans-Italic.ttf";
import "../assets/fonts/IBMPlexSans-Light.ttf";
import "../assets/fonts/IBMPlexSans-LightItalic.ttf";
import "../assets/fonts/IBMPlexSans-Medium.ttf";
import "../assets/fonts/IBMPlexSans-MediumItalic.ttf";
import "../assets/fonts/IBMPlexSans-Regular.ttf";
import "../assets/fonts/IBMPlexSans-SemiBold.ttf";
import "../assets/fonts/IBMPlexSans-SemiBoldItalic.ttf";
import "../assets/fonts/IBMPlexSans-Thin.ttf";
import "../assets/fonts/IBMPlexSans-ThinItalic.ttf";
import "../assets/fonts/Ubuntu-Bold.ttf";
import "../assets/fonts/Ubuntu-BoldItalic.ttf";
import "../assets/fonts/Ubuntu-Italic.ttf";
import "../assets/fonts/Ubuntu-Light.ttf";
import "../assets/fonts/Ubuntu-LightItalic.ttf";
import "../assets/fonts/Ubuntu-Medium.ttf";
import "../assets/fonts/Ubuntu-MediumItalic.ttf";



const HomeContent = () => {
  const features = [
    {
      icon: web0,
      title: "Health and Safety",
      description: "Keep yourself and others safe while traveling with us.",
    },
    {
      icon: web1,
      title: "Comfort on board",
      description:
        "Our buses are equipped with large and comfortable seats, a toilet, Wi-Fi, and power outlets.",
    },
    {
      icon: web2,
      title: "Book & Manage Your Trip",
      description:
        "You can not only book tickets on our website, but also via our TravelBus App or at our TravelShops and official ticket resellers.",
    },
    {
      icon: web3,
      title: "The Green Choice",
      description:
        "TravelBus is one of the most eco-friendly ways to travel. Learn more about our sustainability initiatives and carbon offset programs.",
    },
  ];

  return (
    <Box sx={{ width: "100%", overflow: "hidden", background: "#ffff" }}>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <img src={HERO_IMAGE} className="img-fluid" alt="Responsive image" />
        </Grid>
        <Grid item xs={12}>
          <div className="">
            <Typography variant="h4" className="text-center"
              sx={{ marginTop: "-1rem", fontWeight: "700", fontFamily: "Ubuntu-Medium", fontSize: "2.5rem" }}>
              Low cost Bus Travel in Canada and across
            </Typography>
            <Typography
              sx={{ marginTop: "1rem", fontSize: "19px", color: "#606060", textAlign: "center", fontFamily: "Ubuntu-Medium", fontWeight: "bold" }}
            >
              Get ready to choose from almost 2,300 destinations across the US
              and Canada.
            </Typography>
          </div>
        </Grid>
        <Container>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            sx={{ marginTop: "2rem" }}
          >
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box textAlign="center">
                  <img src={feature.icon} alt={feature.title} />
                  <Typography
                    variant="h6"
                    sx={{ marginTop: "1rem", fontWeight: "400", fontFamily: "Ubuntu-Medium" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography sx={{ fontSize: "12px", marginTop: "1rem", fontFamily: "Ubuntu-Medium", color: "grey" }}>
                    {feature.description}
                  </Typography>
                </Box>

              </Grid>
            ))}


          </Grid>
          <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", padding: "3rem" }}>
            <Grid item>
              <Button type="button" style={{
                backgroundColor: "#20aa5c", padding: "0.7rem 2rem", border: "none", fontSize: "small",
                fontWeight: "600"
              }}>JOIN WAITLIST</Button>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
};

export default HomeContent;
