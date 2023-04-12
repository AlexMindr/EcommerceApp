import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { setIsCartOpen } from "@/store/cartSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/store";
import FlexBox from "@/components/FlexBox";
import CartItem from "@/components/CartItem";

const CartMenu = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, isCartOpen } = useSelector((state: RootState) => state.cart);

  const totalPrice = cart.reduce((total: number, item) => {
    return total + item.count * item.attributes.price;
  }, 0);

  return (
    /* Overlay */
    <Box
      display={isCartOpen ? "block" : "none"}
      bgcolor="rgba(0,0,0,0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left={0}
      top={0}
      overflow="auto"
    >
      {/* Modal */}
      <Box
        position="fixed"
        right={0}
        bottom={0}
        width="max(400px,30%)"
        height="100%"
        bgcolor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          <FlexBox mb="15px">
            <Typography variant="h3">Shopping Bag ({cart.length})</Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen())}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* Cart list */}
          <Box>
            {cart.map((item) => (
              <CartItem item={item} />
            ))}
          </Box>
          {/* Actions */}
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">${totalPrice}</Typography>
            </FlexBox>
            <Button
              sx={{
                bgcolor: palette.primary[400],
                color: "white",
                borderRadius: 0,
                minWidth: "100%",
                padding: "10px 20px",
                m: "20px 0",
                fontSize: "1.1rem",
              }}
              onClick={() => {
                navigate("/checkout");
                dispatch(setIsCartOpen());
              }}
            >
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;
