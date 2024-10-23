/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Conversion constants
const SECONDS_IN_HOUR = 3600;
const KM_TO_M = 1000;

// Given Parameters
const initialVel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

// Helper: Convert verlocity from km/h to m/s
const convertKmHtoMs = (velInKmH) => (velInKmH * KM_TO_M) / SECONDS_IN_HOUR;

// Helper: Convert verlocity from m/s to km/h
const convertMStoKms = (velInMS) => (velInMS * SECONDS_IN_HOUR) / KM_TO_M;

// Calculate new velocity based on acceleration
const calcNewVel = (initialVel, acc, time) => {
  const initialVelMS = convertKmHtoMs(initialVel); // Convert to m/s
  const newVelMS = initialVelMS + acc * time; // v = u + at
  return convertMStoKms(newVelMS); // Convert back to km/h
};

// Calculate new distance using the kinematic equation
const calcNewDistance = (initialDistance, initialVel, acc, time) => {
  const initialVelMS = convertKmHtoMs(initialVel); // Convert to m/s
  const distanceMeters = (initialVelMS * time) + (0.5 * acc * time ** 2); // s = ut + 1/2 at^2
  return initialDistance + distanceMeters / KM_TO_M; // Convert to km
};

// Calculate remaining fuel
const calcRemainingFuel = (fuel, burnRate, time) => {
  const fuelUsed = burnRate * time;
  if (fuelUsed > fuel) throw new Error("Not enough fuel.");
  return fuel - fuelUsed;
};

// Main calculations
const newVel = calcNewVel(initialVel, acc, timeInSeconds);
const newDistance = calcNewDistance(initialDistance, initialVel, acc, timeInSeconds);
const remainingFuel = calcRemainingFuel(fuel, fuelBurnRate, timeInSeconds);

console.log(`Corrected New Velocity: ${newVel.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);






