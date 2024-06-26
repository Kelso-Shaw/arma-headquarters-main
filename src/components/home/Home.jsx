import React from "react";
import Layout from "../layouts/Layout";
import {
	Paper,
	Typography,
	Grid,
	Container,
	Box,
	Button,
	Avatar,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import "./assets/swiper.css";

const Home = () => {
	return (
		<Layout hideButton>
			<Container sx={{ textAlign: "center", py: 1 }}>
				<Typography variant="h2" sx={{ fontWeight: "bold", mb: 1 }}>
					{process.env.REACT_APP_CLAN_NAME}
				</Typography>
				<Swiper
					slidesPerView={1}
					centeredSlides={true}
					spaceBetween={20}
					loop={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Autoplay]}
					className="mySwiper"
					sx={{ mb: 5 }}
				>
					<SwiperSlide>
						<img src="https://via.placeholder.com/1920x540" alt="test" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="https://via.placeholder.com/1920x540" alt="test" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="https://via.placeholder.com/1920x540" alt="test" />
					</SwiperSlide>
				</Swiper>

				<Box sx={{ mt: 5 }}>
					<Grid container spacing={4} justifyContent="center">
						<Grid item xs={12} md={3}>
							<Paper
								variant="outlined"
								elevation={3}
								sx={{
									padding: 3,
									borderRadius: 3,
									backgroundColor: "background.paper",
									textAlign: "center",
								}}
							>
								<Avatar
									sx={{ width: 56, height: 56, mx: "auto", mb: 2 }}
									src="/path/to/icon1.jpg"
								/>
								<Typography variant="h6" sx={{ mb: 1 }}>
									Title 1
								</Typography>
								<Typography variant="body1" sx={{ mb: 2 }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
									et interdum justo, non tristique turpis.
								</Typography>
								<Button variant="outlined" color="primary">
									Read more
								</Button>
							</Paper>
						</Grid>
						<Grid item xs={12} md={3}>
							<Paper
								variant="outlined"
								elevation={3}
								sx={{
									padding: 3,
									borderRadius: 3,
									backgroundColor: "background.paper",
									textAlign: "center",
								}}
							>
								<Avatar
									sx={{ width: 56, height: 56, mx: "auto", mb: 2 }}
									src="/path/to/icon2.jpg"
								/>
								<Typography variant="h6" sx={{ mb: 1 }}>
									Title 2
								</Typography>
								<Typography variant="body1" sx={{ mb: 2 }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
									et interdum justo, non tristique turpis.
								</Typography>
								<Button variant="outlined" color="primary">
									Read more
								</Button>
							</Paper>
						</Grid>
						<Grid item xs={12} md={3}>
							<Paper
								variant="outlined"
								elevation={3}
								sx={{
									padding: 3,
									borderRadius: 3,
									backgroundColor: "background.paper",
									textAlign: "center",
								}}
							>
								<Avatar
									sx={{ width: 56, height: 56, mx: "auto", mb: 2 }}
									src="/path/to/icon3.jpg"
								/>
								<Typography variant="h6" sx={{ mb: 1 }}>
									Title 3
								</Typography>
								<Typography variant="body1" sx={{ mb: 2 }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
									et interdum justo, non tristique turpis.
								</Typography>
								<Button variant="outlined" color="primary">
									Read more
								</Button>
							</Paper>
						</Grid>
						<Grid item xs={12} md={3}>
							<Paper
								variant="outlined"
								elevation={3}
								sx={{
									padding: 3,
									borderRadius: 3,
									backgroundColor: "background.paper",
									textAlign: "center",
								}}
							>
								<Avatar
									sx={{ width: 56, height: 56, mx: "auto", mb: 2 }}
									src="/path/to/icon4.jpg"
								/>
								<Typography variant="h6" sx={{ mb: 1 }}>
									Title 4
								</Typography>
								<Typography variant="body1" sx={{ mb: 2 }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
									et interdum justo, non tristique turpis.
								</Typography>
								<Button variant="outlined" color="primary">
									Read more
								</Button>
							</Paper>
						</Grid>
					</Grid>
				</Box>

				<Box sx={{ mt: 5 }}>
					<Typography variant="h4" sx={{ mb: 3 }}>
						Testimonials
					</Typography>
					<Grid container spacing={4} justifyContent="center">
						<Grid item xs={12} md={4}>
							<Paper
								variant="outlined"
								elevation={3}
								sx={{
									padding: 3,
									borderRadius: 3,
									backgroundColor: "background.paper",
									textAlign: "center",
									minHeight: "225px",
									maxHeight: "225px",
									overflow: "auto",
								}}
							>
								<Avatar
									sx={{ width: 56, height: 56, mx: "auto", mb: 2 }}
									src="/path/to/avatar1.jpg"
								/>
								<Typography
									variant="body1"
									sx={{ color: "text.primary", mb: 1 }}
								>
									"Joining this community has been a life-changing experience.
									The missions are exciting and the people are amazing!"
								</Typography>
								<Typography
									variant="subtitle2"
									sx={{ color: "text.secondary" }}
								>
									- Member 1
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={12} md={4}>
							<Paper
								variant="outlined"
								elevation={3}
								sx={{
									padding: 3,
									borderRadius: 3,
									backgroundColor: "background.paper",
									textAlign: "center",
									minHeight: "225px",
									maxHeight: "225px",
									overflow: "auto",
								}}
							>
								<Avatar
									sx={{ width: 56, height: 56, mx: "auto", mb: 2 }}
									src="/path/to/avatar2.jpg"
								/>
								<Typography
									variant="body1"
									sx={{ color: "text.primary", mb: 1 }}
								>
									"A great place to meet like-minded individuals and participate
									in thrilling missions!"
								</Typography>
								<Typography
									variant="subtitle2"
									sx={{ color: "text.secondary" }}
								>
									- Member 2
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={12} md={4}>
							<Paper
								variant="outlined"
								elevation={3}
								sx={{
									padding: 3,
									borderRadius: 3,
									backgroundColor: "background.paper",
									textAlign: "center",
									minHeight: "225px",
									maxHeight: "225px",
									overflow: "auto",
								}}
							>
								<Avatar
									sx={{ width: 56, height: 56, mx: "auto", mb: 2 }}
									src="/path/to/avatar3.jpg"
								/>
								<Typography
									variant="body1"
									sx={{ color: "text.primary", mb: 1 }}
								>
									"The best community I've ever been a part of. Highly recommend
									joining!"
								</Typography>
								<Typography
									variant="subtitle2"
									sx={{ color: "text.secondary" }}
								>
									- Member 3
								</Typography>
							</Paper>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Layout>
	);
};

export default Home;
