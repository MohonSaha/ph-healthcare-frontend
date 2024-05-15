import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container color="white">
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="white" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="white" component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography color="white" component={Link} href="/medicins">
            Medicins
          </Typography>
          <Typography color="white" component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography color="white" component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>

        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
        </Stack>

        {/* <div className="border-b-[1px] border-dashed"></div> */}
        <Box
          sx={{
            border: "1px dashed lightgray",
          }}
        ></Box>

        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography color="white" component="p">
            &copy; 2024 PH Health Care. All Rights Reserved.
          </Typography>

          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>

          <Typography color="white" component="p">
            Privacy Policy | Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
