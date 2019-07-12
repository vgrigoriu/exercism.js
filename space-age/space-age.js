const secondsInEarthYear = 31557600;

const orbitalPeriods = {
  "earth":   1,
  "mercury": 0.2408467
}

export const age = (planet, seconds) => {
  return round(seconds / secondsInEarthYear / orbitalPeriods[planet]);
};

const round = (n) => {
  return Math.round(n * 100) / 100;
}