import { renderHook, act } from "@testing-library/react";
import { usePlayer } from "../usePalyer";
import { TECTROMINOS } from "../../Utils/Tetrominos";
import { CELLS_PER_LIGN, createStage } from "../../Utils/gameHelper";

// to mock the random function(){}
const mockMath = Object.create(global.Math);
mockMath.random = () => 1;
global.Math = mockMath;

describe('usePlayers unique test suite', () => {
	it('updatePlayerPos', () => {

		const { result } = renderHook(usePlayer)

		act(function () {
			result.current.updatePlayerPos({ x: 2, y: 1, collided: false })
		})

		expect(result.current.player).toEqual(expect.objectContaining({
			position: { x: 2, y: 1 },
			collided: false,
			tectromino: TECTROMINOS.J.shape
		}))
	});

	it('resetPlayer', () => {

		const { result } = renderHook(usePlayer)
		act(function () {
			result.current.updatePlayerPos({ x: 2, y: 1, collided: false })
		})

		expect(result.current.player).toEqual(expect.objectContaining({
			position: { x: 2, y: 1 },
			collided: false,
			tectromino: TECTROMINOS.J.shape
		}))

		act(function () {
			result.current.resetPlayer()
		})

		expect(result.current.player).toEqual(expect.objectContaining({
			position: { x: (CELLS_PER_LIGN / 2) - 2, y: 0 },
			collided: false,
			tectromino: TECTROMINOS.J.shape
		}))


	});
	it("should transform this [[1,2],[3,4]] to that [[3,1],[4,2]]", function () {
		const { result } = renderHook(usePlayer)
		let matrix
		act(function () {
			matrix = result.current.rotateMatrix([[1, 2], [3, 4]], 1)
		})
		expect(matrix).toEqual([[3, 1], [4, 2]])
	})

	it("should transform this [[1,2],[3,4]] to that [[2,4],[1,3]]", function () {
		const { result } = renderHook(usePlayer)
		let matrix
		act(function () {
			matrix = result.current.rotateMatrix([[1, 2], [3, 4]], -1)
		})
		expect(matrix).toEqual([[2, 4], [1, 3]])
	})


	it('rotatePlayer', () => {
		// TODO not completed
		const { result } = renderHook(usePlayer)

		act(function () {
			result.current.rotatePlayer(createStage(), 1)
		})

		expect(result.current.player).toEqual(expect.objectContaining({
			collided: false, tectromino: expect.arrayContaining([["J", 0, 0], ["J", "J", "J"], [0, 0, 0]]), position: { x: 0, y: 0 }
		}))

		expect(result.current.player.tectromino).toEqual(expect.arrayContaining([["J", 0, 0], ["J", "J", "J"], [0, 0, 0]]))

	});

});