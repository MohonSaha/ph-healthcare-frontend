import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialities", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialities } = await res.json();

  return (
    <Container>
      <Box
        sx={{
          margin: "50px 0px",
          textAlign: "center",
        }}
      >
        <Box sx={{ textAlign: "start", zIndex: 2 }}>
          <Typography variant="h4" fontWeight={600}>
            Explore Tretments Across Specialties
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18}>
            Experienced Doctors Across All Specialties
          </Typography>
        </Box>

        <Stack direction="row" gap={4} mt={5}>
          {specialities.slice(2, 8).map((speciality: any) => (
            <Box
              key={speciality.id}
              sx={{
                flex: 1,
                width: "150px",
                textAlign: "center",
                padding: "40px 10px",
                backgroundColor: "rgba(84, 82, 82, 0.1)",
                border: "1px solid rgba(84, 82, 82, 0.1)",
                borderRadius: "10px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid blue",
                  borderRadius: "10px",
                  padding: "40px 10px",
                },
              }}
            >
              <Image
                width={100}
                height={100}
                src={speciality.icon}
                alt="speciality icon"
              />
              <Box>
                <Typography component="p" fontWeight={600} fontSize={18} mt={2}>
                  {speciality.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>

        <Button sx={{ marginTop: "30px" }} variant="outlined">
          View All
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
