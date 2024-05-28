import Cookies from '../Cookies';
import { setTimeZone } from '../setTimeZone';

describe('setTimeZone() helper', () => {
  // Sets the 'time-zone' cookie with the correct value.
  it("should set the 'time-zone' cookie with the correct value when 'timeZone' and 'tzOffset' are not null", () => {
    // Arrange
    const { timeZone: mockTimeZone } = Intl.DateTimeFormat().resolvedOptions();
    const mockTzOffset = new Date().getTimezoneOffset().toString();
    const setSpy = jest.spyOn(Cookies, 'set');
    // Act
    setTimeZone();

    // Assert
    expect(setSpy).toHaveBeenCalledWith('time-zone', mockTimeZone);
    expect(setSpy).toHaveBeenCalledWith('time-zone-offset', mockTzOffset);

    // Clean up
    setSpy.mockRestore();
    jest.restoreAllMocks();
  });
});
