import { renderHook } from "@testing-library/react";
import useScore from "../useScore";

describe('useScore unique test suite', () => {
	it("should render correctly initialy", function () {
		const { result } = renderHook(useScore, { clearedRow: 0 })
		expect(result.current.Level).toBe(0)
		expect(result.current.rows).toBe(0)
		expect(result.current.score).toBe(0)
	})
	// it('should set score to 40', () => {
	// 	const { result } = renderHook(useScore, { clearedRow: 1 })
	// 	expect(result.current.score).toBe(40)
	// })
});