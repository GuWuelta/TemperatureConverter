// CELSIUS > KELVIN = CELSIUS + 273
// CELSIUS > fahrenheit = 1.8 * CELSIUS + 32

// KELVIN > CELSIUS = KELVIN - 273
// KELVIN > fahrenheit = (converter kelvin para celsius e realizar CELSIUS > fahrenheit)

// fahrenheit > CELSIUS = (fahrenheit - 32) / 1.8
// fahrenheit > KELVIN = (converter fahrenheit para celsius e realizar CELSIUS > KELVIN)

export enum Scales {
  fahrenheit = "fahrenheit",
  celsius = "celsius",
  kelvin = "kelvin",
}
interface ConvertTemperatureProps {
  temperature: number;
  scale: Scales;
  scaleToConvert: Scales;
}

export class ConvertTemperatureUseCase {
  execute({
    temperature,
    scale,
    scaleToConvert,
  }: ConvertTemperatureProps): Record<string, number | string> {
    if (scale === scaleToConvert) throw new Error("Scales cannot be equal!");
    const scalesArr = Object.values(Scales);
    const isValidScale = scalesArr.find((value) => value === scale);
    const isValidScaleToConvert = scalesArr.find((value) => value === scaleToConvert);
    if (!isValidScale || !isValidScaleToConvert) throw new Error("Scale does not exist!");

    const concatedScales: string = `${scale}To${scaleToConvert}`;

    const convertOperations: Record<string, number> = {
      kelvinTocelsius: temperature - 273.15,
      fahrenheitTocelsius: (temperature - 32) / 1.8,
      kelvinTofahrenheit: ((temperature - 273.15) * 9) / 5 + 32,
      fahrenheitTokelvin: ((temperature - 32) * 5) / 9 + 273.15,
      celsiusTofahrenheit: 1.8 * temperature + 32,
      celsiusTokelvin: temperature + 273.15,
    };

    const convertedTemperature: number = convertOperations[concatedScales];

    return {
      [scale]: temperature,
      [scaleToConvert]: Number(convertedTemperature.toFixed(0)),
    };
  }
}
