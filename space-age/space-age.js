const secondsInEarthYear = 31557600;

const orbitalPeriods = {
  "earth":     1.00000000,
  "mercury":   0.24084670,
  "venus":     0.61519726,
  "mars":      1.88081580,
  "jupiter":  11.86261500,
  "saturn":   29.44749800,
  "uranus":   84.01684600,
  "neptune": 164.79132000,
}

export const age = (planet, seconds) => {
  return round(seconds / secondsInEarthYear / orbitalPeriods[planet]);
};

const round = (n) => {
  return Math.round(n * 100) / 100;
}