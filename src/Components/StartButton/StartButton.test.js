import { fireEvent, render, screen } from "@testing-library/react";
import StarButton from "./StartButton";
import '@testing-library/jest-dom'

const callback = jest.fn()

describe('start button unique test suite', () => {
	render(<StarButton callback={callback} />)

	it('should call callback function went the button is clicked', async () => {

		const btnStart = screen.getByRole("button", { name: "Start Game" })
		fireEvent.click(btnStart)

		expect(btnStart).toBeInTheDocument()
		expect(callback).toHaveBeenCalledTimes(1)
	});
})