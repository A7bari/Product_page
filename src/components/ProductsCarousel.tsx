import {  Box, CardMedia, Stack } from '@mui/material'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/system';

const MAIN_IMG = 500 ;
const NAV_IMG = 60 ;

interface Props {
   images : string[];
}

const CarouselContainer = styled(Box)(() => ({
   position: 'relative',
   '&:before': {
      left: -.5,
      zIndex: 50,
      content: "''",
      height: '100%',
      position: 'absolute',
      width: '12%',
      background: `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);`,
    },
    '&:after': { 
      right: -.5,
      top: 0,
      zIndex: 50,
      content: "''",
      height: '100%',
      position: 'absolute',
      width: '12%',
      background: `linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);`,
     },
 }));

function ProductsCarousel({images}: Props) {
   const mainSlider= useRef(null);
   const NavSlider= useRef(null);

   // taken from https://react-slick.neostack.com/docs/example/as-nav-for
   const [nav1, setNav1] = useState();
   const [nav2, setNav2] = useState();

   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      if (mainSlider.current && NavSlider.current) {
         setNav1(mainSlider.current);
         setNav2(NavSlider.current);
       }
   }, [])
   

   const settings = {
      className: "center",
      dots: false,
      arrows: false,
      draggable: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      beforeChange: (oldIndex: number, newIndex: number) => setCurrentIndex(newIndex),
    };

    const Navsettings = {
      className: "center",
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      slidesToShow: 3,
      swipeToSlide: true,
      variableWidth: true,
    };

  return (
      <Stack>

         <Box sx={{mr: {md: 0, lg: 3}, my: 3, position: 'relative' }}>
            <Slider ref={mainSlider} asNavFor={nav2} {...settings} >
               {images.map((img, i) => (
                  <Box
                     key={i}
                     component='div'
                  >
                        <CardMedia
                           component="img"
                           height={MAIN_IMG}
                           image={img}
                           sx={{
                              borderRadius: 4,
                           }}
                        />
                  </Box>
               ))}
            </Slider>
         </Box>

         <Box
         sx={{
            mx: 'auto' ,
            mb: 4,
            ...(images.length < 5 && {maxWidth: (images.length+1)* NAV_IMG }) ,  
            ...(images.length >= 5 && {maxWidth: 5*NAV_IMG }) , 
            position: 'relative'
         }}
         >
            <CarouselContainer >
               <Slider ref={NavSlider} {...Navsettings} asNavFor={nav1} >
                  {images.map((img, i) => (
                     <Box
                        key={i}
                        component='div'
                        sx={{py:.5}}
                     >
                        <Box
                           sx={{
                              mx: 1,
                              my: 'auto',
                              height: NAV_IMG,
                              width: NAV_IMG,
                              border: '1px solid #f0f0f0',
                              ...(currentIndex==i && {                     
                                 border: '1px solid #22c1c3',
                                 transform: 'scale(1.1)',
                                 transition: (theme) =>
                                 theme.transitions.create('all', {
                                    duration: 170,
                                 }),
                              }),
                              overflow: 'hidden',  
                              borderRadius: 3,
                           }}>
                           <CardMedia
                              component="img"
                              height={NAV_IMG}
                              image={img}
                           />
                        </Box>
                     </Box>
                  ))}
               </Slider>
            </CarouselContainer>
         </Box> 
      </Stack>
  )
}

export default ProductsCarousel