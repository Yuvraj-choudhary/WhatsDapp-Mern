import { Box } from "@chakra-ui/react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

const Text = () => {
  return (
    <Box w="full">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            Chat Dapp
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Text;
