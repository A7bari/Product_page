import { alpha, Box, Card, CardMedia, Grid, Stack } from '@mui/material'
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
   '&:before, &:after': {
      left: 0,
      zIndex: 9,
      content: "''",
      height: '10%',
      position: 'absolute',
      width: '100%',
      background: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);`,
    },
    '&:after': { bottom: -0.5, transform: 'scaleY(-1)' },
 }));

function ProductsCarousel({images}: Props) {
   const mainSlider= useRef(null);
   const NavSlider= useRef(null);
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
      centerPadding: '0px',
      slidesToShow: 3,
      vertical: true,
      verticalSwiping: true,
    };

  return (
   <Grid container spacing={1}>
      <Grid 
         item 
         xs={2} 
      >
         <Stack height={'100%'}  justifyContent='center'>
         <Box
         sx={{
            mt: 3,
            ...(images.length < 5 && {maxHeight: (images.length+1)* NAV_IMG }) ,  
            ...(images.length >= 5 && {maxHeight: 6*NAV_IMG }) , 
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
                           mx: 'auto',
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
      </Grid>
      <Grid item xs={10}>
         <Box sx={{mr: 3, my: 3, position: 'relative',   }}>
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
      </Grid>
   </Grid>
  )
}

export default ProductsCarousel