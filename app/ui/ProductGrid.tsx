/* eslint-disable react/jsx-key */
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
  styled,
} from "@mui/material";
import { useProduct } from "../context/AdminContext"; // Adjust the path accordingly

// interface Props {
//   product?: Product;
// }

// Your existing StyledCard component
const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  color: "black",
}));

export default function ProductGrid() {
  // const { removeProduct } = useProduct();

  // Using the context to select a product
  const { products, removeProduct } = useProduct();

  //  const handleDelete = (data: Product) => {
  //    const newData = { ...data, id: nanoid() };
  //    if (isEdit) {
  //      editProduct(data);
  //    }
  //  };

  return (
    <Container fixed>
      <Box sx={{ flexGrow: 1 }} data-cy="product">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <StyledCard>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{ color: "primary.main" }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{ color: "secondary.main" }}
                    >
                      {product.price}Kr
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Link href={"/admin/" + product.id}>
                        <EditNoteIcon
                          fontSize="large"
                          data-cy="admin-edit-product"
                        />
                      </Link>
                      <DeleteIcon
                        fontSize="large"
                        data-cy="admin-remove-product"
                        onClick={() => removeProduct(product.id)}
                      />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
