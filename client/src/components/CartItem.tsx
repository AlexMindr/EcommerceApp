import { CartItemType } from "@/shared/types";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
} from "@/store/cartSlice";
import FlexBox from "@/components/FlexBox";

type Props = {
  item: CartItemType;
};

const CartItem = ({ item }: Props) => {
  const { palette } = useTheme();
  const dispatch = useDispatch();

  return (
    <Box key={`${item.attributes.name}-${item.id}`}>
      <FlexBox p="15px 0">
        <Box flex="1 1 40%">
          <img
            alt={item?.attributes?.name}
            height="165px"
            width="125px"
            src={`${import.meta.env.VITE_BASE_URL}${
              item?.attributes?.image?.data?.attributes?.formats?.medium?.url
            }`}
          />
        </Box>
        <Box flex="1 1 60%">
          {/* Item name */}
          <FlexBox mb="5px">
            <Typography fontWeight="bolt">{item.attributes.name}</Typography>
            <IconButton
              onClick={() => dispatch(removeFromCart({ id: item.id }))}
            >
              <CloseIcon />
            </IconButton>
          </FlexBox>
          <Typography>{item.attributes.shortDescription}</Typography>
          {/* Amount */}
          <FlexBox m="15px 0">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${palette.neutral[500]}`}
            >
              <IconButton
                onClick={() => dispatch(decreaseCount({ id: item.id }))}
              >
                <RemoveIcon />
              </IconButton>
              <Typography>{item.count}</Typography>
              <IconButton
                onClick={() => dispatch(increaseCount({ id: item.id }))}
              >
                <AddIcon />
              </IconButton>
            </Box>
            {/* Price */}
            <Typography fontWeight="bold">${item.attributes.price}</Typography>
          </FlexBox>
        </Box>
      </FlexBox>
      <Divider />
    </Box>
  );
};

export default CartItem;
