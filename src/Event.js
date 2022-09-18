import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import './App.css';
import {Box,Grid, Typography,CardMedia,Button, Container} from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';
import image29 from './img/image29.png';

function Event(){
    return(
        <div className="wrapper-main">
             <Header />
            <section class="wrapper-gallery">
            <img src={image29} alt="gl1"/>
                <p style={{color:'black'}}>JOIN US WITH OUR BEST MEMORIES</p>                              
            </section>
            <section className='m-60'>
                
            </section>
            <Footer/>

        </div>
    );
}

export default Event;