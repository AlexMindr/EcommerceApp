import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box, Typography, useMediaQuery } from "@mui/material";
import StoreItem from "@/components/StoreItem";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "@/state/cartSlice";
import { RootState } from "@/state";
import { ItemType } from "@/shared/types";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);
  const [value, setValue] = useState("all");
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/items?populate=image`,
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []); //eslint-disable-line

  const topRatedItems = items.filter(
    (item: ItemType) => item.attributes.category === "topRated"
  );
  const newArrivalsItems = items.filter(
    (item: ItemType) => item.attributes.category === "newArrivals"
  );
  const bestSellersItems = items.filter(
    (item: ItemType) => item.attributes.category === "bestSellers"
  );

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
          centered
          TabIndicatorProps={{
            sx: { display: isNonMobile ? "block" : "none" },
          }}
          sx={{ m: "25px", "& .MuiTabs-flexContainer": { flexWrap: "wrap" } }}
        >
          <Tab label="ALL" value="all" />
          <Tab label="NEW ARRIVALS" value="newArrivals" />
          <Tab label="BEST SELLERS" value="bestSellers" />
          <Tab label="TOP RATED" value="topRated" />
        </Tabs>
        <Box
          display="grid"
          margin="0 auto"
          gridTemplateColumns="repeat(auto-fill,300px)"
          justifyContent="space-around"
          rowGap="20px"
          columnGap="1.33%"
        >
          {value === "all" &&
            items.map((item: ItemType) => (
              <StoreItem
                item={item}
                key={`${item.attributes.name}-${item.id}`}
              />
            ))}
          {value === "newArrivals" &&
            newArrivalsItems.map((item: ItemType) => (
              <StoreItem
                item={item}
                key={`${item.attributes.name}-${item.id}`}
              />
            ))}
          {value === "bestSellers" &&
            bestSellersItems.map((item: ItemType) => (
              <StoreItem
                item={item}
                key={`${item.attributes.name}-${item.id}`}
              />
            ))}
          {value === "topRated" &&
            topRatedItems.map((item: ItemType) => (
              <StoreItem
                item={item}
                key={`${item.attributes.name}-${item.id}`}
              />
            ))}
        </Box>
      </Typography>
    </Box>
  );
};

export default ShoppingList;
