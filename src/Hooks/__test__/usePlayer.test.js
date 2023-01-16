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
		console.log(result.current.player.tectromino)
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


	it('rotatePlayer', () => {

		const { result } = renderHook(usePlayer)
		console.log(result.current.player.tectromino)

		act(function () {
			result.current.rotatePlayer(createStage(),)
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

});