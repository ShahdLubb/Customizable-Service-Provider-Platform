import React from "react";
import { useHits } from "react-instantsearch";
import ServiceView from "./ServiceView/ServiceView.jsx";

export default function CustomHits(props) {
	const { hits, sendEvent } = useHits(props);
	React.useEffect(() => {}, [hits]);
	return (
		<div>
			<div className={`d-flex flex-wrap justify-content-start gap-4`}>
				{hits.map((hit) => (
					<ServiceView hit={hit}></ServiceView>
				))}
			</div>
		</div>
	);
}
