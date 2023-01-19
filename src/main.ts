import { ConvertTemperatureUseCase } from "./useCase/convertTemperature/ConvertTemperatureUseCase";
const convertTemperatureUseCase = new ConvertTemperatureUseCase();

console.log(convertTemperatureUseCase.execute({temperature: 293.15, scale: "kelvin", scaleToConvert: "celsius"}));
