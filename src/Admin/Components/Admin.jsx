import * as React from "react";
import { Box, Avatar, IconButton, AppBar, Toolbar, Typography, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, ListItemButton, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { customTheme } from "./Theme";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../user/redux/Auth/Action";
import { useEffect } from "react";
import { deepPurple } from "@mui/material/colors";
import Dashboard from "./Dashboard";
import CreateProductForm from "./CreateProductForm";
import UpdateProductForm from "./UpdateProductForm";
import ProductsTable from "./ProductsTable";
import OrdersTable from "./OrdersTable";
import ManageHerosection from "./ManageHerosection";
import ManageGallery from "./ManageGallery";
import ManageOurBestSellerProduct from "./ManageOurBestSellerProduct";
import ManageOurProduct from "./ManageOurProduct";
import ManageFeaturedProduct from "./ManageFeaturedProduct";
import AdminOrderDetails from "./AdminOrderDetails";
import Contact from "./Contact";

const drawerWidth = 240;

const menu = [
  { name: "Dashboard", path: "/admin" },
  { name: "Products", path: "/admin/product" },
  { name: "Orders", path: "/admin/orders" },
  { name: "Add Product", path: "/admin/products" },
  { name: "Manage Herosection", path: "/admin/manageHeroSection" },
  { name: "Gallery", path: "/admin/gallery" },
  { name: "Manage Best Seller Product", path: "/admin/ourBestSeller" },
  { name: "Manage Our Product Top - Featured - Workshop", path: "/admin/ourProduct" },
  { name: "Manage Featured Product", path: "/admin/ourFeaturedProduct" },
];

export default function AdminPannel() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  const toggleSideBar = () => {
    setSideBarVisible(!sideBarVisible);
  };

  const drawer = (
    <Box sx={{ overflow: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <List>
        {menu.map((item, index) => (
          <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Divider />
        <ListItem disablePadding onClick={handleLogout}>
          <ListItemButton>
            <Avatar sx={{ bgcolor: deepPurple[500], color: "white", cursor: "pointer" }}>
              {auth.user?.firstName[0].toUpperCase()}
            </Avatar>
            <ListItemText primary={"Logout"} sx={{ ml: 2 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
          <Toolbar>
            {!isLargeScreen && (
              <IconButton color="inherit" edge="start" onClick={toggleSideBar}>
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" noWrap component="div">
              Admin Panel
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant={drawerVariant}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open={isLargeScreen || sideBarVisible}
          onClose={toggleSideBar}
        >
          {drawer}
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<CreateProductForm />} />
            <Route path="/product/update/:productId" element={<UpdateProductForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<ProductsTable />} />
            <Route path="/orders" element={<OrdersTable />} />
            <Route path="/manageHeroSection" element={<ManageHerosection />} />
            <Route path="/gallery" element={<ManageGallery />} />
            <Route path="/ourBestSeller" element={<ManageOurBestSellerProduct />} />
            <Route path="/ourProduct" element={<ManageOurProduct />} />
            <Route path="/ourFeaturedProduct" element={<ManageFeaturedProduct />} />
            <Route path="/orders/:orderId" element={<AdminOrderDetails />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

