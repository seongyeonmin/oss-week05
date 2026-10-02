import chalk from "chalk";

const code = Number(process.argv[2]);

const weather = {
  0: "clear sky",
  1: "mainly clear",
  2: "partly cloudy",
  3: "overcast",
  45: "fog",
  61: "rain",
  71: "snow",
  95: "thunderstorm",
};

if (code in weather) {
  console.log(chalk.green(weather[code]));
} else {
  console.log(chalk.red(`unknown code: ${code}`));
}