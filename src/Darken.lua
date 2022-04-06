local Assert = require(script.Parent._Util.Assert)
local assertTypeOf = Assert.prepTypeOf("Darken")

local clampColour = require(script.Parent._Util.ClampColour)

return function(colour: Color3, coefficient: number): Color3
	assertTypeOf("colour", "Color3", colour)
	assertTypeOf("coefficient", "number", coefficient)

	return clampColour(colour:Lerp(Color3.new(), coefficient))
end
