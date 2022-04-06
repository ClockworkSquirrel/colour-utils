local BasicallyIdentical = require(script.Parent.Parent._Util.BasicallyIdentical)

return function()
	local SplitComplementary = require(script.Parent.SplitComplementary)

	local swatch = Color3.new(1, 0, 0)
	local results = {
		Color3.new(0, 1, 0.5),
		Color3.new(0, 0.5, 1),
	}

	it("throws if argument is not a Color3", function()
		expect(pcall(SplitComplementary, true)).to.equal(false)
		expect(pcall(SplitComplementary, 1)).to.equal(false)
	end)

	it("returns an array of Color3s", function()
		local result = SplitComplementary(Color3.new())

		expect(type(result)).to.equal("table")
		expect(typeof(result[1])).to.equal("Color3")
	end)

	it("returns a valid palette for red", function()
		local result = SplitComplementary(swatch)

		expect(BasicallyIdentical(results[1], result[1])).to.equal(true)
		expect(BasicallyIdentical(results[2], result[2])).to.equal(true)
	end)
end
