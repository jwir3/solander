
const ntc = require('../lib/ntc');

class Solander {
  constructor(colors) {
    this._colorName = null;

    // Take argument (assuming it's a hex notation)
    if (colors.length != 1) {
      throw new Error("You must pass a hexadecimal color, optionally preceded by a hash mark");
    }

    // Send to library for color name
    this._colorName = this._lookupColorName(this._interpretAsHexColor(colors[0]));
  }

  get colorName() {
    if (!this._colorName) {
      throw new Error("No color was initialized; Color name cannot be returned.");
    }

    return this._colorName;
  }

  _interpretAsHexColor(color) {
    // Aside from the '#' mark, there should be either three or six characters.
    let interpretedColor = color;
    if (color.startsWith('#')) {
      interpretedColor = color.slice(1);
    }

    // TODO: Check that the hex color is valid.

    if (interpretedColor.length === 3) {
      return interpretedColor[0] + interpretedColor[0]
             + interpretedColor[1] + interpretedColor[1]
             + interpretedColor[2] + interpretedColor[2];
    } else if (interpretedColor.length === 6) {
      return interpretedColor;
    } else {
      throw new Error("Expected color to have 3 or 6 characters, not including the # sign. It had: " + interpretedColor.length);
    }
  }

  _lookupColorName(color) {
    var nameMatch = ntc.name('#' + color);
    if (nameMatch) {
      return nameMatch[1];
    }

    return "Unknown";
  }
}

module.exports = Solander;
