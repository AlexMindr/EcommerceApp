import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  IconButton,
  Box,
  Typography,
  useTheme,
  Button,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { addToCart } from "@/state/cartSlice";
import { useParams, Link } from "react-router-dom";
import { ItemType } from "@/shared/types";
import StoreItem from "@/components/StoreItem";

const ItemDetails = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState<ItemType | null>(null);
  const [items, setItems] = useState<ItemType[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  async function getItem() {
    const item = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/items/${itemId}?populate=image`,
      { method: "GET" }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }
  async function getItems() {
    const items = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/items?populate=image`,
      { method: "GET" }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); //eslint-disable-line

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* Images */}
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.attributes?.name}
            width="100%"
            height="100%"
            src={`${import.meta.env.VITE_BASE_URL}${
              item?.attributes?.image?.data?.attributes?.formats?.medium?.url
            }`}
            style={{ objectFit: "contain" }}
          />
        </Box>
        {/* Actions */}
        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Link
                to={
                  Number(itemId) >= 2
                    ? `/item/${Number(itemId) - 1}`
                    : `/item/${items.length}`
                }
                style={{
                  textDecoration: "none",
                  color: palette.secondary[300],
                }}
              >
                Prev
              </Link>
            </Box>
            <Box>
              <Link to="/">Home</Link> / Item / {item?.attributes?.name}
            </Box>
            <Box>
              <Link
                to={
                  items.length > Number(itemId)
                    ? `/item/${Number(itemId) + 1}`
                    : "/item/1"
                }
                style={{
                  textDecoration: "none",
                  color: palette.secondary[300],
                }}
              >
                Next
              </Link>
            </Box>
          </Box>
          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.attributes?.name}</Typography>
            <Typography variant="h5" mt="5px">
              ${item?.attributes?.price}
            </Typography>
            <Typography mt="20px">
              {item?.attributes?.longDescription}
            </Typography>
          </Box>
          {/* Count and button */}
          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${palette.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography p="0 5px">{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              sx={{
                bgcolor: "#222222",
                color: "white",
                borderRadius: 0,
                minWidth: "150px",
                p: "10px 40px",
              }}
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
              ADD TO CART
            </Button>
          </Box>
          <Box>
            {" "}
            <Box m="20px 0 5px 0" display="flex">
              <FavoriteBorderOutlinedIcon />
              <Typography ml="5px">Add to wishlist</Typography>
            </Box>
            <Typography>CATEGORIES: {item?.attributes?.category}</Typography>
          </Box>
        </Box>
      </Box>
      {/* Information */}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
          <div>{item?.attributes?.longDescription}</div>
        )}

        {value === "reviews" && (
          <div>No reviews have been added for this product</div>
        )}
      </Box>
      {/* Related items */}
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Related Products
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {items.slice(0, 4).map((item: ItemType, idx: number) => (
            <StoreItem item={item} key={`${item.attributes?.name}-${idx}`} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;
