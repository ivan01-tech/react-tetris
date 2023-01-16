import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Button from "./Button";

describe("display unique test suite", () => {
	render(
		<Button
			text={"Bonjour"}
		/>
	);
	it("should render the buttons with the match text", function () {
		let statBtn = screen.getByText(/bonjour/i);
		expect(statBtn).toBeInTheDocument()
	});
});
