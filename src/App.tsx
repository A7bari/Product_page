import { Card, Grid, Stack } from "@mui/material";
import { Container} from "@mui/system";
import ProductsCarousel from "./components/ProductsCarousel";
import ProductDetails from "./components/ProductDetails";

export interface Product {
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
  return (
    <Container sx={{mt: 7}}>
      <Card sx={{p: 3}}>
        <Grid container>
          <Grid item xs={12} md={6} lg={7}>
            <Stack height={'100%'}  justifyContent='center'> 
              <ProductsCarousel images={exampleProduct.images} />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <ProductDetails product={exampleProduct} />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default App;
