import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HouseIcon from '@mui/icons-material/House';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Aldo Burgos
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1];

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <StarBorderIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Curriculum
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Avatar justifyContent="center" sx={{ width: 156, height: 156 }} alt="Aldo Burgos" src={"../img/foto.JPG"} />
            </div>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              marginTop="10px"
            >
              Aldo Burgos
            </Typography>
            <div style={{
              display: 'flex',
            }}>
              <div style={{ flex: 1 }}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                  <ListItem alignItems='flex-start'>
                    <ListItemIcon>
                      <FlagCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="OBJETIVOS" secondary="Encontrar un lugar el cual pueda desarrollarme y crecer como persona al tiempo que estudio el mundo de la tecnología que es mi gran pasión.  ">
                      <Divider variant="inset" component="li" />
                      <Typography variant="h6" color="inherit" noWrap>
                        304580698
                      </Typography>
                    </ListItemText>
                  </ListItem>

                  <ListItem alignItems='flex-start'>
                    <ListItemIcon>
                      <CenterFocusStrongIcon />
                    </ListItemIcon>
                    <ListItemText primary="ACTITUDES" secondary="Siempre dispuesto y deseoso de aprender cosas nuevas. Para alcanzar grandes objetivos ">
                      <Divider variant="inset" component="li" />
                      <Typography variant="h6" color="inherit" noWrap>
                        304580698
                      </Typography>
                    </ListItemText>
                  </ListItem>

                </List>
              </div>
              <div style={{ flex: 1 }}>
                <ListItem alignItems='flex-start'>
                  <ListItemIcon>
                    <AlternateEmailIcon />
                  </ListItemIcon>
                  <ListItemText primary="EMAIL" secondary="aldo.burgos@cuc.cr">
                    <Divider variant="inset" component="li" />
                    <Typography variant="h6" color="inherit" noWrap>
                      304580698
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem alignItems='flex-start'>
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <a href="https://github.com/javierBurgosCR" style={{ textDecoration: 'none' }}>
                    <ListItemText primary="GITHUB" secondary="https://github.com/javierBurgosCR">
                      <Divider variant="inset" component="li" />
                      <Typography variant="h6" color="inherit" noWrap>
                        304580698
                      </Typography>
                    </ListItemText>
                  </a>
                </ListItem>

                <ListItem alignItems='flex-start'>
                  <ListItemIcon>
                    <LocalPhoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Celular" secondary={`8622-9786 / 7170-3963`}>
                    <Divider variant="inset" component="li" />
                    <Typography variant="h6" color="inherit" noWrap>
                      304580698
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem alignItems='flex-start'>
                  <ListItemIcon>
                    <HouseIcon />
                  </ListItemIcon>
                  <ListItemText primary={"dirección".toUpperCase()} secondary="Costa Rica, Cartago, Concepción de Tres Ríos.">
                    <Divider variant="inset" component="li" />
                    <Typography variant="h6" color="inherit" noWrap>
                      304580698
                    </Typography>
                  </ListItemText>
                </ListItem>

              </div>
            </div>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/*
                <Button variant="contained">Main call to action</Button>
                <Button variant="outlined">Secondary action</Button>
              */}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://tinder.com/static/tinder.png"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Tinder clone
                    </Typography>
                    <Typography>
                      App clone de Tinder. Creada usando React Native, Expo, Firebase Auth, Tailwindcss...
                    </Typography>
                  </CardContent>
                  <CardActions>
                      <Button size="small">Demo</Button>
                    <a href="https://github.com/javierBurgosCR/TinderClone">
                      <Button size="small">Codigo</Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Proyecto portafolio actualmente en desarrollo.
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}