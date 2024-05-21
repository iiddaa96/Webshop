import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../assets/logo.png";

export default function HomeButton() {
  return (
    <Box
      component={Link}
      href="/"
      sx={{
        display: { xs: "none", md: "inline-block" },
        borderRadius: "50%",
        overflow: "hidden",
        width: 70,
        height: 70,
        marginRight: "30rem",
      }}
    >
      <Image src={LogoImage} height={75} width={75} alt="Logo" />
    </Box>
  );
}
