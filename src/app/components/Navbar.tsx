import React from "react";
import Link from "next/link";
import { Stack } from "@mui/material";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px={"20px"}
    >
      <Link href={"/"}></Link>

      <Stack
        direction={"row"}
        gap={"40px"}
        fontSize={"24px"}
        alignItems={"flex-end"}
      >
        <Link
          href={"/"}
          style={{
            textDecoration: "none",
            color: "#3073c9",
            borderBottom: "3px solid #FFF",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3073c9" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
