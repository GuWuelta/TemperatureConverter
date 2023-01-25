import { ConvertTemperatureUseCase, Scales } from "./ConvertTemperatureUseCase";

const convertTemperatureUseCase = new ConvertTemperatureUseCase();

describe("Convert temperature", () => {
  it("should be able to convert celsius temperature to kelvin", () => {
    const convertedTemperature = convertTemperatureUseCase.execute({
      temperature: 37,
      scale: Scales.celsius,
      scaleToConvert: Scales.kelvin,
    });
    expect(convertedTemperature).toEqual({ celsius: 37, kelvin: 310 });
  });

  it("should be able to convert celsius temperature to fahrenheit", () => {
    const convertedTemperature = convertTemperatureUseCase.execute({
      temperature: 100,
      scale: Scales.celsius,
      scaleToConvert: Scales.fahrenheit,
    });
    expect(convertedTemperature).toEqual({
      celsius: 100,
      fahrenheit: 212,
    });
  });

  it("should be able to convert kelvin temperature to celsius", () => {
    const convertedTemperature = convertTemperatureUseCase.execute({
      temperature: 293.15,
      scale: Scales.kelvin,
      scaleToConvert: Scales.celsius,
    });
    expect(convertedTemperature).toEqual({ kelvin: 293.15, celsius: 20 });
  });

  it("should be able to convert kelvin temperature to fahrenheit", () => {
    const convertedTemperature = convertTemperatureUseCase.execute({
      temperature: 276,
      scale: Scales.kelvin,
      scaleToConvert: Scales.fahrenheit,
    });
    expect(convertedTemperature).toEqual({ kelvin: 276, fahrenheit: 37 });
  });

  it("should be able to convert fahrenheit temperature to celsius", () => {
    const convertedTemperature = convertTemperatureUseCase.execute({
      temperature: 100,
      scale: Scales.fahrenheit,
      scaleToConvert: Scales.celsius,
    });
    expect(convertedTemperature).toEqual({
      fahrenheit: 100,
      celsius: 38,
    });
  });

  it("should be able to convert fahrenheit temperature to kelvin", () => {
    const convertedTemperature = convertTemperatureUseCase.execute({
      temperature: 50,
      scale: Scales.fahrenheit,
      scaleToConvert: Scales.kelvin,
    });
    expect(convertedTemperature).toEqual({ fahrenheit: 50, kelvin: 283 });
  });

  it("should be able to throw a error if scale and scale to convert are equal", () => {
    expect(() =>
      convertTemperatureUseCase.execute({
        temperature: 100,
        scale: Scales.celsius,
        scaleToConvert: Scales.celsius,
      })
    ).toThrowError("Scales cannot be equal!");
  });

  it("should be able to throw a error if scale not exist", () => {
    expect(() =>
      convertTemperatureUseCase.execute({
        temperature: 100,
        scale: "inexistentScale",
        scaleToConvert: "celsius",
      })
    ).toThrowError("Scale does not exist!");
  });

  it("should be able to throw a error if scale to convert not exist", () => {
    expect(() =>
      convertTemperatureUseCase.execute({
        temperature: 100,
        scale: "celsius",
        scaleToConvert: "inexistentScale",
      })
    ).toThrowError("Scale does not exist!");
  });
});
