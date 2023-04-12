import { FormikErrors, FormikTouched, FormikValues } from "formik";
import React from "react";
import { Box, Typography, TextField } from "@mui/material";

type Props = {
  values: FormikValues;
  errors: FormikErrors<FormikValues>;
  touched: FormikTouched<any>;
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
};

const Payment = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}: Props) => {
  return (
    <Box m="30px 0">
      {/* Contact info */}
      <Box>
        <Typography mb="15px" fontSize="18px">
          Contact Info
        </Typography>
        <TextField
          fullWidth
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={(touched.email && errors.email) as string}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />
        <TextField
          fullWidth
          type="text"
          label="Phone Number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name="phoneNumber"
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helperText={(touched.phoneNumber && errors.phoneNumber) as string}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />
      </Box>
    </Box>
  );
};

export default Payment;
