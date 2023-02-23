import { Box, Button, Card, Divider, FormLabel, Grid, IconButton, Radio, RadioGroup, Rating, Stack, Typography } from "@mui/material";
import { Container} from "@mui/system";
import ProductsCarousel from "./components/ProductsCarousel";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from "react";
import Chip from "@mui/material/Chip";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  categories: string[];
  averageRating: number;
  reviews: Review[];
  colors: string[];
  sizes: string[];
}

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: Date;
}

// Example headphones data
const exampleProduct: Product = {
  id: 456,
  name: "Bose QuietComfort 35 II Wireless Headphones",
  description: "The Bose QuietComfort 35 II wireless headphones are designed with world-class noise cancellation that makes quiet sound quieter and music sound better.",
  price: 299.99,
  images: [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg',
  ],
  categories: ["Electronics", "Headphones"],
  averageRating: 4.8,
  colors: ["red", "green", "Black", "Silver"],
  sizes: ["sm", "md", "lg"],
  reviews: [
    {
      id: 1,
      author: "John Doe",
      rating: 5,
      comment: "These headphones are amazing! The noise cancellation is incredible and the sound quality is top-notch.",
      date: new Date("2022-02-01"),
    },
    {
      id: 2,
      author: "Jane Smith",
      rating: 4,
      comment: "I really like these headphones, but I wish the battery life was a little longer.",
      date: new Date("2022-02-15"),
    },
  ],
};



function App() {
  const [quantity, setQuantiy] = useState(1);
  const {
  name,
  description,
  price,
  images,
  categories,
  averageRating,
  reviews,
  colors,
  sizes
  } = exampleProduct;

  return (
    <Container sx={{mt: 7}}>
      <Card sx={{p: 3}}>
        <Grid container>
          <Grid item xs={12} md={6} lg={7}>
          <Stack height={'100%'}  justifyContent='center'> 
              <ProductsCarousel images={images} />
              </Stack>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <Box sx={{p: 2}}>
            <Stack direction="row" spacing={1} sx={{mb: 2}}>
              {categories.map(c => <Chip label={c} key={c} color="primary" variant="outlined"  size="small" />)}
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
              <Rating value={averageRating} precision={0.1} readOnly />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                ({reviews.length}
                reviews)
              </Typography>
            </Stack>

            <Typography variant="h4" paragraph sx={{fontWeight: 700}} >
              {name}
            </Typography>
            <Typography
              variant="body2"
              
            >
              {description}
            </Typography>

            <Typography variant="h4" sx={{ my: 3 ,fontWeight: 600}}>
                ${price}
            </Typography>

            <Divider sx={{ borderStyle: 'dashed' }} />

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 3 }}>
              <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
                Select a color
              </Typography>

              <RadioGroup row >
                {colors.map((color) => {

                  return (
                    <Radio
                      key={color}
                      value={color}
                      color="default"
                      icon={
                        <Box
                          sx={{
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            bgcolor: 'currentColor',
                            border: '1px solid',
                            borderColor: 'background.default'
                          }}
                        />
                        
                      }
                      checkedIcon={
                        <Box
                          sx={{
                            width: 22,
                            height: 22,
                            borderRadius: '50%',
                            bgcolor: 'currentColor',
                            border: '2px solid',
                            borderColor: 'primary.main',
                            transition: (theme) =>
                              theme.transitions.create('all', {
                                  duration: 70,
                              }),
                          }}
                        />
                       
                      }
                      sx={{
                        color,
                        '&:hover': { opacity: 0.72 },
                      }}
                    />
                  );
                })}
              </RadioGroup>
            </Stack>

            <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ mt: 1.7 }}>
                Select a size
              </Typography>
              <RadioGroup row >
                {sizes.map((size) => {

                  return (
                    <Radio
                      key={size}
                      value={size}
                      icon={
                        <Box
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: '50%',
                            backgroundColor: '#f0f0f0',
                            display:'flex',
                            justifyContent: 'center',
                            alignItem: 'center'
                          }}
                        >
                          <Typography variant="subtitle2" sx={{textAlign: 'center', lineHeight: 2}} >{size}</Typography>
                        </Box>
                      }
                      checkedIcon={
                        <Box
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: '50%',
                            border: '1px solid',
                            borderColor: 'primary.main',
                            display:'flex',
                            justifyContent: 'center',
                            alignItem: 'center',
                            backgroundColor: '#f0f0f0',
                          }}
                        >
                          <Typography variant="subtitle2" sx={{textAlign: 'center', lineHeight: 2}}>{size}</Typography>
                        </Box>
                      }
                      sx={{
                        '&:hover': { opacity: 0.72 },
                      }}
                    />
                  );
                })}
              </RadioGroup>
              </Stack>
                <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
                Quantity
              </Typography>

              <Box
                sx={{
                  p: 0.5,
                  border: '1px solid #f0f0f0',
                  lineHeight: 0,
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <IconButton size="small" disabled={quantity <= 1} onClick={()=> setQuantiy(prev => --prev )}>
                  <KeyboardArrowDownIcon />
                </IconButton>

                <Typography variant="body2" component="span" sx={{ width: 40, textAlign: 'center' }}>
                  {quantity}
                </Typography>

                <IconButton size="small" onClick={()=> setQuantiy(prev => ++prev )}>
                  <KeyboardArrowUpIcon />
                </IconButton>
              </Box>
            </Stack>

            <Divider sx={{ borderStyle: 'dashed' }} />
            <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
              <Button
                fullWidth
                size="large"
                color="warning"
                variant="outlined"
                startIcon={<AddShoppingCartIcon />}
                sx={{ whiteSpace: 'nowrap' }}
              >
                Add to Cart
              </Button>

              <Button fullWidth size="large" type="submit" variant="contained">
                Buy Now
              </Button>
            </Stack>
          </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default App;
