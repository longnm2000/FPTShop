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
import FacebookIcon from "@mui/icons-material/Facebook";
// import Chart from './Chart';
// import Deposits from "../../../components/Deposits/Deposits";
// import Orders from "../../../components/Orders/Orders";
import { useNavigate, NavLink } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../../../components/Title/Title";
import { Helmet } from "react-helmet";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { DataGrid } from "@mui/x-data-grid";
import TablePagination from "@mui/material/TablePagination";
import jwtDecode from "jwt-decode";
import moment from "moment";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  releaseDate: yup.date().required("Release Date is required"),
  brand: yup.string().required("Brand is required"),
  cpu: yup.string().required("CPU is required"),
  mainCamera: yup.string().required("Main Camera is required"),
  selfieCamera: yup.string().required("Selfie Camera is required"),
  screen: yup.string().required("Screen is required"),
  battery: yup.string().required("Battery is required"),
  charge: yup.string().required("Charge is required"),
  sim: yup.string().required("SIM is required"),
  ram: yup.string().required("RAM is required"),
  os: yup.string().required("OS is required"),
  description: yup.string().required("Description is required"),
});

function SmartphonesManager() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleExit = () => {
    localStorage.removeItem("admin_token");
    navigate("/admin/login");
  };

  const [smartphones, setSmartphones] = useState(null);
  const [brands, setBrands] = useState(null);
  const fetchData = async () => {
    await axios
      .get("http://localhost:8000/api/v1/smartphones")
      .then((res) => {
        console.log(res.data);
        setSmartphones(res.data);
      })
      .catch((err) => console.log(err));
  };

  const fetchBrand = async () => {
    await axios
      .get("http://localhost:8000/api/v1/smartphones/brands")
      .then((res) => setBrands(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
    fetchBrand();
  }, []);

  console.log(smartphones);
  const adminToken = localStorage.getItem("admin_token");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedSmartphone, setSelectedSmartphone] = useState(null);
  const handleSmartphoneDetail = (smartphone) => {
    setSelectedSmartphone(smartphone);
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

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = (smartphone) => {
    setSelectedSmartphone(smartphone);
    setShow1(true);
  };

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/v1/smartphone/",
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  const onSubmit = (data) => {
    console.log(data, selectedSmartphone.smartphone_id);
    axios
      .patch(
        `http://localhost:8000/api/v1/smartphone/:${selectedSmartphone.smartphone_id}`,
        data
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/${id}`)
          .then((res) => {
            console.log(res.data);
            Swal.fire({
              title: "success",
              icon: "success",
              timer: 2000,
            });
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Helmet>
        <title>smartphones Manager</title>
      </Helmet>
      <>
        <Modal show={show} onHide={handleClose} className="py-5">
          <Modal.Header closeButton>
            <Modal.Title>Smartphone Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {!!selectedSmartphone ? (
              <div>
                <p>ID: {selectedSmartphone.smartphone_id}</p>
                <p>Name: {selectedSmartphone.smartphone_name}</p>
                <p>Release Date: {selectedSmartphone.release_date}</p>
                <p>Brand Id: {selectedSmartphone.brand_id}</p>
                <p>Brand Name: {selectedSmartphone.brand_name}</p>
                <p>Chipset: {selectedSmartphone.chipset_info}</p>
                <p>Main Camera: {selectedSmartphone.main_camera_info}</p>
                <p>Selfie Camera:{selectedSmartphone.selfie_camera_info}</p>
                <p>Screen:{selectedSmartphone.screen_info}</p>
                <p>Battery: {selectedSmartphone.battery_info}</p>
                <p>Charge: {selectedSmartphone.charging_info}</p>
                <p>SIM: {selectedSmartphone.sim_info}</p>
                <p>Ram: {selectedSmartphone.ram_info}</p>
                <p>OS: {selectedSmartphone.os_info}</p>
                <p>Description: {selectedSmartphone.description}</p>
              </div>
            ) : (
              <></>
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
                    <Title>Smartphones</Title>
                    <div>
                      <NavLink to={"/admin/smartphones/add"}>
                        <Button>Add A Smartphone</Button>
                      </NavLink>
                    </div>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>#</TableCell>

                          <TableCell>Name</TableCell>

                          <TableCell>Release Date</TableCell>
                          <TableCell>Brand</TableCell>

                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {smartphones
                          ?.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((e, i) => (
                            <TableRow key={i}>
                              <TableCell>{i + 1}</TableCell>
                              <TableCell>{e.smartphone_name}</TableCell>
                              <TableCell>
                                {moment(e.release_date).format("DD/MM/YYYY")}
                              </TableCell>
                              <TableCell>{e.brand_name}</TableCell>

                              <TableCell>
                                <Button
                                  variant="info"
                                  onClick={() => handleSmartphoneDetail(e)}
                                  className="me-2"
                                >
                                  Detail
                                </Button>
                                <Button
                                  variant="light"
                                  className="me-2"
                                  onClick={() => handleShow1(e)}
                                >
                                  Update
                                </Button>
                                <Button
                                  variant="danger"
                                  onClick={() => handleDelete(e.smartphone_id)}
                                >
                                  Delete
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      component="div"
                      count={smartphones?.length || 0}
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
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
        className="mt-5 mb-5 p-5"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Smartphone</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Controller
                name="name"
                control={control}
                defaultValue={selectedSmartphone?.smartphone_name}
                render={({ field }) => <Form.Control type="text" {...field} />}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Release Date</Form.Label>
              <Controller
                name="releaseDate"
                control={control}
                defaultValue={
                  selectedSmartphone
                    ? moment(selectedSmartphone.release_date).format(
                        "YYYY-MM-DD"
                      )
                    : ""
                }
                render={({ field }) => <Form.Control type="date" {...field} />}
              />
              {errors.releaseDate && (
                <p className="error">{errors.releaseDate.message}</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Brand</Form.Label>
              <Controller
                name="brand"
                control={control}
                defaultValue={selectedSmartphone?.brand_id}
                render={({ field }) => (
                  <Form.Select aria-label="Brand" {...field}>
                    <option value="">Select a brand</option>
                    {brands.map((e, i) => (
                      <option key={i} value={e.brand_id}>
                        {e.brand_name}
                      </option>
                    ))}
                  </Form.Select>
                )}
              />
              {errors.brand && <p className="error">{errors.brand.message}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>CPU</Form.Label>
              <Controller
                name="cpu"
                control={control}
                defaultValue={selectedSmartphone?.chipset_info}
                render={({ field }) => <Form.Control type="text" {...field} />}
              />
              {errors.cpu && <p className="error">{errors.cpu.message}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Main Camera</Form.Label>
              <Controller
                name="mainCamera"
                control={control}
                defaultValue={selectedSmartphone?.main_camera_info}
                render={({ field }) => <Form.Control type="text" {...field} />}
              />
              {errors.mainCamera && (
                <p className="error">{errors.mainCamera.message}</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Selfie Camera</Form.Label>
              <Controller
                name="selfieCamera"
                control={control}
                defaultValue={selectedSmartphone?.selfie_camera_info}
                render={({ field }) => <Form.Control type="text" {...field} />}
              />
              {errors.selfieCamera && (
                <p className="error">{errors.selfieCamera.message}</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Screen</Form.Label>
              <Controller
                name="screen"
                control={control}
                defaultValue={selectedSmartphone?.screen_info}
                render={({ field }) => <Form.Control type="text" {...field} />}
              />
              {errors.screen && (
                <p className="error">{errors.screen.message}</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Battery</Form.Label>
              <Controller
                name="battery"
                control={control}
                defaultValue={selectedSmartphone?.battery_info}
                render={({ field }) => <Form.Control type="text" {...field} />}
              />
              {errors.battery && (
                <p className="error">{errors.battery.message}</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Charge</Form.Label>
              <Controller
                name="charge"
                control={control}
                defaultValue={selectedSmartphone?.charging_info}
                render={({ field }) => <Form.Control type="text" {...field} />}
              />
              {errors.charge && (
                <p className="error">{errors.charge.message}</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>SIM</Form.Label>
              <Controller
                name="sim"
                control={control}
                defaultValue={selectedSmartphone?.sim_info}
                render={({ field }) => <Form.Control type="text" {...field} />}
              />
              {errors.sim && <p className="error">{errors.sim.message}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>RAM</Form.Label>
              <Controller
                name="ram"
                control={control}
                defaultValue={selectedSmartphone?.ram_info}
                render={({ field }) => <Form.Control type="text" {...field} />}
              />
              {errors.ram && <p className="error">{errors.ram.message}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>OS</Form.Label>
              <Controller
                name="os"
                control={control}
                defaultValue={selectedSmartphone?.os_info}
                render={({ field }) => <Form.Control type="text" {...field} />}
              />
              {errors.os && <p className="error">{errors.os.message}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Controller
                name="description"
                control={control}
                defaultValue={selectedSmartphone?.description}
                render={({ field }) => (
                  <Form.Control as="textarea" {...field} rows={6} />
                )}
              />
              {errors.os && <p className="error">{errors.os.message}</p>}
            </Form.Group>

            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </ThemeProvider>
  );
}

export default SmartphonesManager;
