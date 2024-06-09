"use client";

import { Tooltip } from "react-tooltip";

interface TooltipProp {
	tooltiptext: string;
	text: string;
}

export default function TooltipComp({ tooltiptext, text }: TooltipProp) {
	return (
		<>
			<p
				data-tooltip-id={tooltiptext}
				data-tooltip-content={tooltiptext}
				data-tooltip-place="bottom"
			>
				{text}
			</p>
			<Tooltip id={tooltiptext} style={{ fontSize: "14px" }} />
		</>
	);
}
