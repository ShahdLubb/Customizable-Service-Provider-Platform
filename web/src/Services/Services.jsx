import React from "react";
import style from "./Services.module.css";
import Navbar from "../Home/Header/Navbar/Navbar";
import Footer from "../Home/Footer/Footer.jsx";
import PathBar from "./PathBar/PathBar.jsx";
import img1 from "./portrait-man-cleaning-his-house (1).jpg";
import img2 from "./portrait-man-cleaning-his-house (2).jpg";
import img3 from "./young-female-cleaner-showing-detergent-spray-bottle.jpg";
import algoliasearch from "algoliasearch/lite";
import CustomHits from "./CustomHits.jsx";
import "instantsearch.css/themes/satellite.css";
import { Panel } from "./Panel.jsx";
import {
	Menu,
	SortBy,
	RangeInput,
	Configure,
	DynamicWidgets,
	RefinementList,
	Hits,
	InstantSearch,
	Pagination,
	SearchBox,
	ToggleRefinement,
	ClearRefinements,
	CurrentRefinements,
} from "react-instantsearch";

const searchClient = algoliasearch(
	"80LP28SUOT",
	"6a5b8e3610610c751b8ddfa6bb304b6e"
);
const index = "servicesAndcategories";
const future = { preserveSharedStateOnUnmount: true };
export default function Services({ userData, setUserData }) {
	React.useEffect(() => {
		const storedUserData = localStorage.getItem("user");
		if (storedUserData) {
			const parsedUserData = JSON.parse(storedUserData);
			setUserData(parsedUserData);
		}
	}, []);
	return (
		<div>
			<Navbar userData={userData} setUserData={setUserData} />

			<div className={`${style.services}`}>
				<div className={`${style.servicesImg}`}>
					<div
						id="servicesImgSlideShow"
						className="carousel slide carousel-fade"
						data-bs-ride="carousel"
					>
						<div className="carousel-inner">
							<div className="carousel-item active" data-bs-interval="2500">
								<img src={img1} className="" alt="..." />
							</div>
							<div className="carousel-item" data-bs-interval="2500">
								<img src={img2} className="" alt="..." />
							</div>
							<div className="carousel-item" data-bs-interval="2500">
								<img src={img3} className="" alt="..." />
							</div>
						</div>
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#servicesImgSlideShow"
							data-bs-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#servicesImgSlideShow"
							data-bs-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>

				<div className={`${style.servicesBathBar} my-5`}>
					{/* <PathBar /> */}
				</div>
				<div
					className={` ${style.servicesMiddle} d-flex justify-content-start`}
				>
					<InstantSearch
						searchClient={searchClient}
						indexName={index}
						future={future}
						insights
					>
						<Configure hitsPerPage={9} />
						<div
							className={`${style.servicesMiddle} search-panel d-flex gap-5 mb-5`}
						>
							<div
								className={`${style.servicesSideBarGeneral} search-panel__filters`}
							>
								<DynamicWidgets>
									<Panel header="Category">
										<Menu
											attribute="category.name"
											searchable={true}
											searchablePlaceholder="Search Categories"
											showMore={true}
										/>
									</Panel>
									<Panel header="Company">
										<RefinementList
											attribute="category.company.name"
											searchable={true}
											searchablePlaceholder="Search companies"
											showMore={true}
										/>
									</Panel>
									<Panel header="Provider City">
										<RefinementList
											attribute="category.company.address.city"
											searchable={true}
											searchablePlaceholder="Search city"
											showMore={true}
										/>
									</Panel>
									<Panel header="Price">
										<RangeInput attribute="avgPrice" precision={1} />
									</Panel>
									<Panel header="Consultation">
										<ToggleRefinement
											attribute="type"
											on="2"
											label=" Consultation"
										/>
									</Panel>
									<Panel header="Instant Booking">
										<ToggleRefinement
											attribute="type"
											on="1"
											label="Instant Booking"
										/>
									</Panel>
								</DynamicWidgets>
							</div>

							<div
								className={` search-panel__results d-flex flex-column justify-content-start align-content-between`}
							>
								<SearchBox
									placeholder="search"
									autoFocus
									className={`gap-5 mb-3`}
								/>
								<div
									className={` d-flex flex-wrap justify-content-start gap-3 mb-3`}
								>
									<div className="ais-Panel-header">Filters:</div>
									<CurrentRefinements
										classNames={{
											root: "d-flex flex-wrap",
											button: "",
										}}
										transformItems={(items) =>
											items.map((item) => {
												const label = item.label.startsWith(
													"hierarchicalCategories"
												)
													? "Hierarchy"
													: item.label;

												return {
													...item,
													attribute: label,
												};
											})
										}
									/>
									<ClearRefinements
										translations={{
											resetButtonText: "Clear all",
										}}
									/>
								</div>

								<div className={`gap-5 mb-3`}>
									<CustomHits />
								</div>

								<Pagination className={`gap-5 mb-3 `} />
							</div>
						</div>
					</InstantSearch>
				</div>
			</div>

			<Footer />
		</div>
	);
}
function Hit({ hit }) {
	return (
		<article>
			<p>
				<code>{JSON.stringify(hit).slice(0, 100)}...</code>
			</p>
		</article>
	);
}
