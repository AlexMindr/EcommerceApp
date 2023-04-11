import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";
type Props = {};

const Subscribe = (props: Props) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton disabled>
        <MarkEmailUnreadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">Subscribe to Our Newsletter</Typography>
      <Typography>
        and receive $20 coupon for your first order when you checkout
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        bgcolor="#F2F2F2"
      >
        {subscribed ? (
          <Typography variant="h3" sx={{ ml: 1, flex: 1 }}>
            Successfuly Subscribed
          </Typography>
        ) : (
          <>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <Typography
              sx={{ p: "10px", ":hover": { cursor: "pointer" } }}
              onClick={() => setSubscribed(true)}
            >
              Subscribe
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Subscribe;
