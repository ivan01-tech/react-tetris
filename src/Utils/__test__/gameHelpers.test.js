import { PlayerInitialState } from "../../Hooks/usePalyer"
// import { generateTectrominos } from "../Tetrominos"
import { checkCollisions, createFillStage, createStage } from "../gameHelper"

describe('checkCollision unique test suits', () => {

	it("should not collided at the start", function () {
		const isCollided = checkCollisions(createStage(), PlayerInitialState, { x: 0, y: 0 })
		expect(isCollided).toBeFalsy()
	})

	// it("should collided went the stage is fill", function () {
	// })

})