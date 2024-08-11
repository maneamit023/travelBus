import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { Container } from "react-bootstrap";
import APP_STORE from "../../assets/logo/App-Store-Black.svg";
import GOOGLE_PLAY from "../../assets/logo/Google-Play-Black.svg";
import FB_LOGO from "../../assets/logo/Social/ic_facebook.svg";
import INSTAGRAM_LOGO from "../../assets/logo/Social/ic_instagram.svg";
import LINKEDIN_LOGO from "../../assets/logo/Social/ic_linkedin.svg";
import X_LOGO from "../../assets/logo/Social/ic_x.svg";
import COOKIE from "../../assets/logo/ic_cookie.svg";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        mt: "auto",
        backgroundColor: "#ffff",
        textAlign: "center",
      }}
    >
      <Container>
        <Divider sx={{ opacity: 2, boxShadow: 0.8 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            padding: "3rem 0",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <div>
            <Grid item sx={{ paddingBottom: "1rem" }}>
              <Typography
                variant="h6"
                fontWeight="600"
                fontSize="medium"
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "justify",
                  }, fontFamily: "Ubuntu-Medium"
                }}
              >
                TravelBus App
              </Typography>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "start",
                },
                alignItems: "center",
                flexWrap: "wrap"
              }}
            >
              <Grid item>
                <img alt="App Store" src={APP_STORE} />
              </Grid>
              <Grid item>
                <img alt="Google Play" src={GOOGLE_PLAY} />
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid item sx={{ paddingBottom: "1rem" }}>
              <Typography
                variant="h6"
                fontWeight="600"
                fontSize="medium"
                sx={{
                  fontFamily: "Ubuntu-Medium",
                  textAlign: {
                    xs: "center",
                    sm: "justify",
                  },
                }}
              >
                TravelBus on
              </Typography>
            </Grid>
            <Grid container spacing={3} sx={{ justifyContent: { xs: "center", sm: "start" } }}>
              <Grid item>
                <img src={INSTAGRAM_LOGO} alt="Instagram" />
              </Grid>
              <Grid item>
                <img src={LINKEDIN_LOGO} alt="LinkedIn" />
              </Grid>
              <Grid item>
                <img src={X_LOGO} alt="X" />
              </Grid>
              <Grid item>
                <img src={FB_LOGO} alt="Facebook" />
              </Grid>
            </Grid>
          </div>
        </Box>
      </Container>
      <Container>
        <Divider sx={{ opacity: 2, boxShadow: 0.8 }} />
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "1rem",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            textAlign: {
              xs: "center",
              sm: "left",
            },
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              alignItems: "center",
            }}
          >
            <Typography sx={{ mx: 2, whiteSpace: "nowrap", fontSize: "smaller", fontFamily: "Ubuntu-Medium", color: "grey" }}>Legal</Typography>
            <Typography sx={{ mx: 2, whiteSpace: "nowrap", fontSize: "smaller", fontFamily: "Ubuntu-Medium", color: "grey" }}>Privacy Policy</Typography>
            <Typography sx={{ mx: 2, whiteSpace: "nowrap", fontSize: "smaller", fontFamily: "Ubuntu-Medium", color: "grey" }}>Photo Credits</Typography>
            <Grid item sx={{ display: "flex", alignItems: "center" }}>
              <img src={COOKIE} style={{ width: "1rem", height: "1rem" }} alt="Cookie" />
              <Typography sx={{ mx: 0.5, whiteSpace: "nowrap", fontSize: "smaller", color: "grey", fontFamily: "Ubuntu-Medium" }}>Change Cookie Settings</Typography>
            </Grid>
          </Grid>
          <Grid item sx={{ mt: { xs: 2, sm: 0 } }}>
            <Typography sx={{ mx: 0.5, whiteSpace: "nowrap", fontSize: "smaller", fontFamily: "Ubuntu-Medium", color: "grey" }}>
              &copy; 2024 TravelBus Inc
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
