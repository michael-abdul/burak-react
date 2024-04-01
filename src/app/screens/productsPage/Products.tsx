import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import SearchIcon from "@mui/icons-material/Search"
import { Box, Button, Container, Stack } from "@mui/material"
import Pagination from "@mui/material/Pagination"
import PaginationItem from "@mui/material/PaginationItem"
import Badge from "@mui/material/Badge"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const products = [
	{ productName: "Cutlet", imagePath: "/img/cutlet.webp" },
	{ productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
	{ productName: "Kebab", imagePath: "/img/kebab.webp" },
	{ productName: "Lavash", imagePath: "/img/lavash.webp" },
	{ productName: "Lavash", imagePath: "/img/lavash.webp" },
	{ productName: "Cutlet", imagePath: "/img/cutlet.webp" },
	{ productName: "Kebab", imagePath: "/img/kebab.webp" },
	{ productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
]

export default function Products() {
	return (
		<div className={"products"}>
			<Container>
				<Stack flexDirection={"column"} alignItems={"center"}>
					<Stack className={"avatar-big-box"}>
						<Box className={"top-text"}>
							<p>Burak Restaurant</p>
							<Box className={"search-big-box"}>
								<form className={"search-form"} action={""} method={""}>
									<input
										type={"search"}
										className={"single-search-input"}
										name={"single-resSearch"}
										placeholder={"Type here"}
									/>
									<Button
										className={"single-button-search"}
										variant='contained'
										endIcon={<SearchIcon />}
									>
										Search
									</Button>
								</form>
							</Box>
						</Box>
					</Stack>
					<Stack>
						<Stack
							display={"flex"}
							flexDirection={"row"}
							justifyContent={"flex-end"}
							width={"250%"}
							sx={{ mt: "65px" }}
						>
							<Box className={"dishes-filter-box"}>
								<Button
									variant={"contained"}
									color='primary'
									className={"order"}
								>
									New
								</Button>
								<Button
									variant={"contained"}
									color='secondary'
									className={"order"}
								>
									Price
								</Button>
								<Button
									variant={"contained"}
									color='secondary'
									className={"order"}
								>
									Views
								</Button>
							</Box>
						</Stack>
					</Stack>
				</Stack>

				<Stack className={"list-category-section"}>
					<Stack className={"product-category"}>
						<div className={"category-main"}>
							<Button variant={"contained"} color={"secondary"}>
								Other
							</Button>
							<Button variant={"contained"} color={"secondary"}>
								Dessert
							</Button>
							<Button variant={"contained"} color={"secondary"}>
								Drink
							</Button>
							<Button variant={"contained"} color={"secondary"}>
								Salad
							</Button>
							<Button variant={"contained"} color={"primary"}>
								Dish
							</Button>
						</div>
					</Stack>
					<Stack className={"product-wrapper"}>
						{products.length !== 0 ? (
							products.map((product, index) => {
								return (
									<Stack key={index} className={"product-card"}>
										<Stack
											className={"product-img"}
											sx={{ backgroundImage: `url(${product.imagePath})` }}
										>
											<div className={"product-sale"}>Normal size</div>
											<Button className={"shop-btn"}>
												<img
													src={"/icons/shopping-cart.svg"}
													style={{ display: "flex" }}
												/>
											</Button>
											<Button className={"view-btn"} sx={{ right: "36px" }}>
												<Badge badgeContent={20} color='secondary'>
													<RemoveRedEyeIcon
														sx={{ color: 20 ? "gray" : "white" }}
													/>
												</Badge>
											</Button>
										</Stack>
										<Box className={"product-desc"}>
											<span className={"product-title"}>
												{product.productName}
											</span>
											<div className={"product-desc-text"}>
												<MonetizationOnIcon />
												{12}
											</div>
										</Box>
									</Stack>
								)
							})
						) : (
							<Box className='no-data'>Products are not available!</Box>
						)}
					</Stack>
				</Stack>
				<Stack className={"pagination-section"}>
					<Pagination
						count={3}
						page={1}
						renderItem={item => (
							<PaginationItem
								components={{
									previous: ArrowBackIcon,
									next: ArrowForwardIcon,
								}}
								{...item}
								color={"secondary"}
							/>
						)}
					/>
				</Stack>
			</Container>

			<div className={"brands-logo"}>
				<Container
					sx={{ mt: "100px" }}
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Box className={"category-title"}>Our Family Brands</Box>
					<Stack
						flexDirection={"row"}
						display={"flex"}
						justifyContent={"space-between"}
						width={"100%"}
					>
						{["/img/doner.webp",
						"/img/gurme.webp",
						"/img/sweets.webp",
						"/img/seafood.webp"

						].map((url, index) => (
							<Box className={"review-box"} key={index}>
								<Box display={"flex"} justifyContent={"center"}>
									<img src={url} className={"review-img"} />
									
								</Box>
							</Box>
						))}
					</Stack>
				</Container>
			</div>

			<div className={"address"}>
				<Container>
					<Stack className={"address-area"}
					    sx={{ mt: "60px" }}
						style={{
						  display: "flex",
						  flexDirection: "column",
						  alignItems: "center",
						}}
					>
						<Box className={"title"}>Our address</Box>
						<iframe
							style={{ marginTop: "60px" }}
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.363734762081!2d692267250514616!3d41.322703307863044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9a0a33281d%3A0x9c5015eab678e435!2z0KDQsNC50YXQvtC9!5e0!3m2!1sko!2skr!4v1655461169573!5m2!1sko!skr'
							width='1320'
							height='500'
							referrerPolicy='no-referrer-when-downgrade'
						></iframe>
					</Stack>
				</Container>
			</div>
		</div>
	)
}
