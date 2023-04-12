import React from "react";
import { Grid, Toolbar, Box, AppBar, Stack, Avatar, Chip } from "@mui/material";
import MailDialogBox from "./MailDialogBox";
import NotificationDialogBox from "./NotificationDialogBox";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Topbar() {
  const router = useRouter();

  const logout = (e: any) => {
    e.preventDefault();
    localStorage.removeItem("accessToken");
    window.location.reload();
    router.push("/login");
  };

  return (
    <AppBar
      position="static"
      className="customNavbar">
      <Toolbar>
        <Grid
          container
          justifyContent="space-between">
          <div className="d-flex  align-items-center gap-3">
            <Link href={"/"}>
              <h2 className="no_selection phc cp">Gadget Galaxy</h2>
            </Link>
          </div>

          <Box>
            <Grid
              container
              gap={2}>
              <MailDialogBox />
              <NotificationDialogBox />
              <Stack
                direction="row"
                spacing={1}>
                <Chip
                className="phc cp"
                  avatar={<Avatar alt="Natacha" />}
                  label="Admin"
                  variant="outlined"
                />

                <div className="div ms-3">
                  <BiLogOut
                    onClick={logout}
                    type="button"
                    size={30}
                  />
                </div>
              </Stack>
            </Grid>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
