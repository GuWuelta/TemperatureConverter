import { ConvertTemperatureUseCase, Scales } from "./useCase/convertTemperature/ConvertTemperatureUseCase";
const convertTemperatureUseCase = new ConvertTemperatureUseCase();

console.log(convertTemperatureUseCase.execute({temperature: 293.15, scale: Scales.kelvin, scaleToConvert: Scales.celsius}));
