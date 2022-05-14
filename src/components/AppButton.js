import React from "react";

export const AppButton = (props) => {
	const { label, onClick } = props;
	return (
		<button
			className="bg-blue-500 hover:bg-blue-700 label-white font-bold py-2 px-4 rounded text-white"
			onClick={onClick}
		>
			{label}
		</button>
	);
};
