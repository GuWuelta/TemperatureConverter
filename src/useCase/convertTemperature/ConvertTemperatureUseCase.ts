// CELSIUS > KELVIN = CELSIUS + 273
// CELSIUS > FARENHEIT = 1.8 * CELSIUS + 32

// KELVIN > CELSIUS = KELVIN - 273
// KELVIN > FARENHEIT = (converter kelvin para celsius e realizar CELSIUS > FARENHEIT)

// FARENHEIT > CELSIUS = (FARENHEIT - 32) / 1.8
// FARENHEIT > KELVIN = (converter farenheit para celsius e realizar CELSIUS > KELVIN)

interface IData {
    temperature: number;
    scale: string;
    scaleToConvert: string
}

export class ConvertTemperatureUseCase {
  execute({temperature, scale, scaleToConvert}: IData): Record<string, number | string> {
    if (scale === scaleToConvert) throw new Error("Scales cannot be equal!");

    if (scale !== "celsius" && scale !== "kelvin" && scale !== "farenheit")
      throw new Error("Scale does not exist!");

    if (scaleToConvert !== "celsius" && scaleToConvert !== "kelvin" && scaleToConvert !== "farenheit")
      throw new Error("Scale to convert does not exist!");

    const concatedScales: string = `${scale}To${scaleToConvert}`;

    const convertOperations: Record<string, number> = {
      kelvinTocelsius: temperature - 273.15,
      farenheitTocelsius: (temperature - 32) / 1.8,
      kelvinTofarenheit: ((temperature - 273.15) * 9) / 5 + 32,
      farenheitTokelvin: ((temperature - 32) * 5) / 9 + 273.15,
      celsiusTofarenheit: 1.8 * temperature + 32,
      celsiusTokelvin: temperature + 273.15,
    };

    const convertedTemperature: number = convertOperations[concatedScales];

    return {
      [scale]: `${temperature}°`,
      [scaleToConvert]: `${convertedTemperature.toFixed(0)}°`,
    };
  }
}
