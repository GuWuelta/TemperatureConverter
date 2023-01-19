import { ConvertTemperatureUseCase } from "./ConvertTemperatureUseCase";

const convertTemperatureUseCase = new ConvertTemperatureUseCase();

describe("Temperatures Conversion", () => {
  it("should be able to convert celsius temperature to kelvin", () => {
    const convertedTemperature = convertTemperatureUseCase.execute({
      temperature: 37,
      scale: "celsius",
      scaleToConvert: "kelvin",
    });
    expect(convertedTemperature).toEqual({ celsius: "37°", kelvin: "310°" });
  });

  it("should be able to convert celsius temperature to farenheit", () => {
    const convertedTemperature = convertTemperatureUseCase.execute({
      temperature: 100,
      scale: "celsius",
      scaleToConvert: "farenheit",
    });
    expect(convertedTemperature).toEqual({
      celsius: "100°",
      farenheit: "212°",
    });
  });

  it("should be able to convert kelvin temperature to celsius", () => {
    const convertedTemperature = convertTemperatureUseCase.execute({
      temperature: 293.15,
      scale: "kelvin",
      scaleToConvert: "celsius",
    });
    expect(convertedTemperature).toEqual({ kelvin: "293.15°", celsius: "20°" });
  });

  it("should be able to convert kelvin temperature to farenheit", () => {
    const convertedTemperature = convertTemperatureUseCase.execute({
      temperature: 276,
      scale: "kelvin",
      scaleToConvert: "farenheit",
    });
    expect(convertedTemperature).toEqual({ kelvin: "276°", farenheit: "37°" });
  });

  it("should be able to convert farenheit temperature to celsius", () => {
    const convertedTemperature = convertTemperatureUseCase.execute({
      temperature: 100,
      scale: "farenheit",
      scaleToConvert: "celsius",
    });
    expect(convertedTemperature).toEqual({ farenheit: "100°", celsius: "38°" });
  });

  it("should be able to convert farenheit temperature to kelvin", () => {
    const convertedTemperature = convertTemperatureUseCase.execute({
      temperature: 50,
      scale: "farenheit",
      scaleToConvert: "kelvin",
    });
    expect(convertedTemperature).toEqual({ farenheit: "50°", kelvin: "283°" });
  });

  it("should be able to throw a error if scale and scale to convert are equal", async () => {
    await expect(async () => {
      await convertTemperatureUseCase.execute({
        temperature: 100,
        scale: "celsius",
        scaleToConvert: "celsius",
      });
    }).rejects.toEqual(new Error("Scales cannot be equal!"));
  });

  it("should be able to throw a error if scale dont exist", async () => {
    await expect(async () => {
      await convertTemperatureUseCase.execute({
        temperature: 100,
        scale: "inexistentScale",
        scaleToConvert: "celsius",
      });
    }).rejects.toEqual(new Error("Scale does not exist!"));
  });

  it("should be able to throw a error if scale to convert dont exist", async () => {
    await expect(async () => {
      await convertTemperatureUseCase.execute({
        temperature: 100,
        scale: "celsius",
        scaleToConvert: "inexistentScale",
      });
    }).rejects.toEqual(new Error("Scale to convert does not exist!"));
  });
});
