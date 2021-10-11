import React from 'react';
import { Button, Menu, MenuItem, Link } from "@material-ui/core"; //tslint:disable-line

const BlockchainMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Blockchain
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Althea</MenuItem>
        <Link color="inherit" underline="none" href="/bakonpool"><MenuItem onClick={handleClose}>Cardano</MenuItem></Link>
        <MenuItem onClick={handleClose}>Gravity Bridge</MenuItem>
      </Menu>
      </>
  );
}

export default BlockchainMenu;