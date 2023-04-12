import React from "react";
import { useTheme, Box, Typography } from "@mui/material";

const Footer = () => {
  const { palette } = useTheme();
  return (
    <Box mt="70px" p="40px 0" bgcolor={palette.neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px,30px,40px)"
      >
        <Box width="clamp(20%,30%,40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={palette.secondary[500]}
          >
            ECMAG
          </Typography>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            vel accusamus harum rerum aut, molestiae a officiis autem ratione
            nisi modi. Quia a labore ab cumque unde itaque laudantium quam.
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>
        <Box width="clamp(20%,25%,30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            50 north Whatever Blvd, Bucharest, 201021
          </Typography>
          <Typography mb="30px">Email: contact@ecmag.com</Typography>
          <Typography mb="30px">(123) 123 1234</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
