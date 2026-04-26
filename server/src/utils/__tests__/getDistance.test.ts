import { getDistance } from '../utils/getDistance';

describe('getDistance', () => {
  it('should calculate distance between two points', () => {
    const point1 = { lat: 48.8566, lng: 2.3522 }; // Paris
    const point2 = { lat: 51.5074, lng: -0.1278 }; // London

    const distance = getDistance(point1, point2);

    // Approximate distance between Paris and London is about 344 km
    expect(distance).toBeCloseTo(344, 0); // Allow some tolerance
  });

  it('should return 0 for same point', () => {
    const point = { lat: 0, lng: 0 };
    const distance = getDistance(point, point);
    expect(distance).toBe(0);
  });
});