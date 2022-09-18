import logo from './logo.svg';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import './App.css';
import {Box,Grid, Typography,CardMedia,Button, Container} from '@mui/material'
import gl1 from './img/gl1.png';
import image28 from './img/image28.png';
import image33 from './img/image33.png';
import image31 from './img/image31.png';
import image32 from './img/image32.png';
import 'bootstrap/dist/css/bootstrap.min.css';


function Gallery(){
    return(
        <div className="wrapper-main">
            <Header />
            <section class="wrapper-gallery">
            <img src={gl1} alt="gl1"/>
                <p style={{color:'black'}}>JOIN US WITH OUR BEST MEMORIES<br/><div className='display-1 mt-2 'style={{fontWeight:400}}>Gallery</div></p>                              
            </section>
            <section className="aboutUs m-60">
            <Container >
            <Grid container spacing={2}>
              <Grid item md={12}>
                <div className=' display-4'>
                <p style={{color:'#E78B49',fontFamily:'arial',padding:50}}>We have gathered many beautiful moments during our journey. The gallery that you must see in your lifetime</p>
                </div>
              </Grid>
            </Grid>
          </Container>
            </section>
            
          <section className="gallery m-60">
          <Box>
          <Container fixed>          
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img src={image31} alt="gallery1"/>
              </Grid>
              <Grid item xs={6}>
                <img src={image28} alt="gallery2"/>
              </Grid>
              <Grid item xs={6}>
                <img src={image33} alt="gallery3"/>
              </Grid>
              <Grid item xs={6}>
                <img src={image32} alt="gallery4"/>
              </Grid>
            </Grid>
          </Container>
        </Box>
          </section>

            <Footer />
        </div>
    );
}

export default Gallery;