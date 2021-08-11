/// <reference types="@rbxts/types" />

// ColourUtils Library
declare namespace ColourUtils {
  /*
   * Darkens a colour
   * @param {Color3} colour - The Color3 to darken
   * @param {number} coefficient - A multiplier in the range of 0-1
   * @returns {Color3}
   */
  function Darken(colour: Color3, coefficient: number): Color3

  /*
   * Lightens a colour
   * @param {Color3} colour - The Color3 to lighten
   * @param {number} coefficient - A multiplier in the range of 0-1
   * @returns {Color3}
   */
  function Lighten(colour: Color3, coefficient: number): Color3

  /*
   * Automatically darken a light colour or lighten a dark colour, depending on its luminance
   * @param {Color3} colour - The Color3 to affect
   * @param {number} coefficient - A multiplier in the range of 0-1
   * @param {number} [threshold=0.5] - The threshold for luminance
   * @returns {Color3}
   */
  function Emphasise(
    colour: Color3,
    coefficient: number,
    threshold?: number
  ): Color3

  /*
   * Get the relative brightness of a given Color3, using the formula provided by WCAG
   * @param {Color3} colour - The Color3 to get luminance of
   * @returns {number}
   */
  function GetLuminance(colour: Color3): number

  /*
   * Calculates the contrast ratio between two colours, using the formula provided by WCAG. The result is a number in the range of 0-21
   * @param {Color3} background - A Color3 representing the background
   * @param {Color3} foreground - A Color3 representing the foreground
   * @returns {number}
   */
  function GetContrastRatio(background: Color3, foreground: Color3): number

  /*
   * Invert a colour
   * @param {Color3} colour - The Color3 to invert
   * @returns {Color3}
   */
  function Invert(colour: Color3): Color3

  /*
   * Determine if a colour is a dark colour
   * @param {Color3} colour - The Color3 to analyse
   * @returns {boolean}
   */
  function isDark(colour: Color3): boolean

  /*
   * Determine if a colour is a light colour
   * @param {Color3} colour - The Color3 to analyse
   * @returns {boolean}
   */
  function isLight(colour: Color3): boolean

  // Hex Submodule
  namespace Hex {
    /*
     * Converts a hex string into a Color3. This method accepts hex strings of any length (but will only respect the first 6 characters; with or without a preceding hash (#)
     * @param {string} hex - A hex colour string
     * @returns {Color3}
     */
    function fromHex(hex: string): Color3

    /*
     * Converts a Color3 into a hex value. Note that this method does not prepend a hash (#) to the beginning of the string
     * @param {Color3} colour - A Color3 to convert to hex
     * @returns {string}
     */
    function toHex(colour: Color3): string
  }

  // Int Submodule
  namespace Int {
    /*
     * Converts an integer into a Color3
     * @param {number} integer - An integer representing a colour
     * @returns {Color3}
     */
    function fromInt(integer: number): Color3

    /*
     * Converts a Color3 into an integer value
     * @param {Color3} colour - A Color3 to convert into an integer
     * @returns {number}
     */
    function toInt(colour: Color3): number
  }
}

export = ColourUtils