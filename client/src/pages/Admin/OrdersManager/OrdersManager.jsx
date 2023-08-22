import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems } from "../../../components/ListItems/listItems";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import Chart from './Chart';
// import Deposits from "../../../components/Deposits/Deposits";
// import Orders from "../../../components/Orders/Orders";
import { useNavigate } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../../../components/Title/Title";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Helmet } from "react-helmet";
import TablePagination from "@mui/material/TablePagination";
import jwtDecode from "jwt-decode";
import { Col, Row } from "react-bootstrap";
import numeral from "numeral";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function OrdersManager() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleExit = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login-admin");
  };

  const [orders, setOrders] = useState(null);
  const [selectedOrderStatus, setSelectedOrderStatus] = useState(0);

  const fetchData = async () => {
    await axios
      .get("http://localhost:8000/api/v1/orders")
      .then((res) => setOrders(res.data.orders))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedOrderDetail, setSelectedOrderDetail] = useState(null);

  const handleOrderDetail = async (order) => {
    setSelectedOrder(order);
    await axios
      .get(`http://localhost:8000/api/v1/orders/${order.order_id}`)
      .then((res) => setSelectedOrderDetail(res.data.orderDetail))
      .catch((error) => console.log(error));
    handleShow();
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Pagination change event handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChange = (value, id) => {
    Swal.fire({
      title: "Are you sure?",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`http://localhost:8000/api/v1/orders/${id}`, { value: value })
          .then((res) => {
            if (res.status === 200) {
              Swal.fire({ icon: "success", title: "success", timer: 2000 });
              fetchData();
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Helmet>
        <title>Orders Manager</title>
      </Helmet>
      <>
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="mt-5 pb-3"
        >
          <Modal.Header closeButton>
            <Modal.Title>Order Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedOrder && (
              <>
                <Typography>ID: {selectedOrder.order_id}</Typography>
                <Typography>User ID: {selectedOrder.user_id}</Typography>
                <Typography>User Name: {selectedOrder.user_name}</Typography>
                <Typography>Order Date: {selectedOrder.order_date}</Typography>
                <Typography>
                  Total Amount:{" "}
                  {numeral(selectedOrder.total_amount).format("0,")}
                </Typography>
                <Typography>
                  Shipping Address: {selectedOrder.shipping_address}
                </Typography>
                <Typography>
                  Order Status: {selectedOrder.order_status}
                </Typography>
                <Typography>Products:</Typography>
                {selectedOrderDetail?.map((item, i) => (
                  <Row key={i} xs={1} sm={3} md={4}>
                    <Col className="d-flex justify-content-center align-items-center">
                      <img
                        src={item.image_url}
                        alt=""
                        width={"80px"}
                        height={"auto"}
                      />
                    </Col>
                    <Col>
                      <p className="fw-bold">{item.name}</p>
                      <p>
                        <span className="fw-bold">Màu sắc: </span>
                        {item.color_name}
                      </p>

                      <p>
                        <span className="fw-bold">Bộ nhớ: </span>
                        {item.storage_capacity} GB
                      </p>
                    </Col>
                    <Col>
                      <div className="d-flex ">
                        <input
                          type="number"
                          className="form-control rounded-0"
                          value={item.quantity}
                          readOnly
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="mt-4 d-flex justify-content-between flex-wrap fw-bold">
                        <span>Giá bán: </span>
                        <span className="text-danger">
                          {numeral(item.quantity * item.price).format("0, ")} đ
                        </span>
                      </div>
                    </Col>
                  </Row>
                ))}
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/FTEL_Logo.svg/1200px-FTEL_Logo.svg.png"
                alt=""
                width={"100px"}
              />
            </Typography>
            <DropdownButton
              id="dropdown-basic-button"
              title={jwtDecode(localStorage.getItem("admin_token")).data.name}
              variant="info"
            >
              <Dropdown.Item onClick={handleExit}>Logout</Dropdown.Item>
            </DropdownButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper
                  sx={{ p: 2, display: "flex", flexDirection: "column" }}
                  className="overflow-x-auto bg-white"
                >
                  <React.Fragment>
                    <Title>Orders</Title>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>#</TableCell>
                          <TableCell>Order Id</TableCell>
                          <TableCell>User Id</TableCell>
                          <TableCell>User Name</TableCell>
                          <TableCell>Order Date</TableCell>
                          <TableCell>Total Amount</TableCell>
                          <TableCell>Order Status</TableCell>
                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {orders
                          ?.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((order, index) => (
                            <TableRow key={index}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{order.order_id}</TableCell>
                              <TableCell>{order.user_id}</TableCell>
                              <TableCell>{order.user_name}</TableCell>
                              <TableCell>{order.order_date}</TableCell>
                              <TableCell>{order.total_amount}</TableCell>
                              <TableCell>
                                {order.order_status === 0
                                  ? "Pending"
                                  : order.order_status === 1
                                  ? "Delivery"
                                  : order.order_status === 2
                                  ? "Completed"
                                  : "Canceled"}
                              </TableCell>
                              <TableCell>
                                <Button
                                  variant="primary"
                                  onClick={() => handleOrderDetail(order)}
                                  className="w-100 mb-2"
                                >
                                  Detail
                                </Button>

                                <Form.Select
                                  defaultValue={order.order_status}
                                  disabled={
                                    order.order_status === 3 ||
                                    order.order_status === 2
                                  }
                                  onChange={(e) =>
                                    handleChange(e.target.value, order.order_id)
                                  }
                                >
                                  <option value={0}>Pending</option>
                                  <option value={1}>Delivery</option>
                                  <option value={2}>Completed</option>
                                  <option value={3}>Canceled</option>
                                </Form.Select>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      component="div"
                      count={orders?.length || 0}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </React.Fragment>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
