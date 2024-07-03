import { ThemeProvider } from "@mui/material/styles"
import { Container, CssBaseline, Grid } from '@mui/material'
import './App.css'
import Profile from './Components/Profile/Profile'
import Header from './Components/Header/Header'
import { theme } from '../theme'
import Home from "./Pages/Home/Home"
import Footer from "./Components/Footer/Footer"
import { BrowserRouter, Router, Route, Routes } from "react-router-dom"
import Resume from "./Pages/Resume/Resume"
import Protfolio from "./Pages/Portfolio/Portfolio"
import Contact from "./Pages/Contact/Contact"
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ padding: '50px 0' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={9}>
            <Grid container spacing={3}>
              <Grid item xs={12} >
                <Header />
              </Grid>
              <Grid item xs={12}>

                <Routes>
                  <Route path="/home" Component={Home} />
                  <Route path="/resume" Component={Resume} />
                  <Route path="/portfolio" Component={Protfolio} />
                  <Route path="/contact" Component={Contact} />
                </Routes>

                <Footer />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App



