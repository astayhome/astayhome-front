import Cookie from '../Cookies';

describe('Cookies.deleteCookie() helper', () => {
  // Deletes a cookie with a given name.
  it('should delete the cookie with the given name', () => {
    // Arrange
    const cookieName = 'testCookie';
    const cookieValue = 'testValue';
    Cookie.set(cookieName, cookieValue);

    // Act
    Cookie.deleteCookie(cookieName);

    // Assert
    expect(Cookie.get(cookieName)).toBeNull();
  });

  // Works as expected when the cookie name is empty.
  it('should not throw an error when the cookie name is empty', () => {
    // Arrange
    const cookieName = '';

    // Act & Assert
    expect(() => {
      Cookie.deleteCookie(cookieName);
    }).not.toThrow();
  });
});

describe('Cookies.clearAllCookie() helper', () => {
  // Should delete all cookies when there are multiple cookies stored.
  it('should delete all cookies when there are multiple cookies stored', () => {
    Cookie.set('cookie13', 'value111');
    Cookie.set('cookie23', 'value211');

    // Act
    Cookie.clearAllCookie();

    // Assert
    expect(document.cookie).toBe('');
  });

  // Should not throw an error when there are no cookies stored.
  it('should not throw an error when there are no cookies stored', () => {
    // Arrange

    // Act
    Cookie.clearAllCookie();

    // Assert
    expect(document.cookie).toBe('');
  });

  // Should handle cookies with very long names.
  it('should delete all cookies with very long names', () => {
    // Arrange
    const longName1 = 'thisisaverylongcookiename1'.repeat(100);
    const longName2 = 'thisisaverylongcookiename2'.repeat(100);
    const value1 = 'value1';
    const value2 = 'value2';
    Cookie.set(longName1, value1);
    Cookie.set(longName2, value2);

    // Act
    Cookie.clearAllCookie();

    // Assert
    expect(document.cookie).toBe('');
  });
});

describe('Cookies.set() helper', () => {
  beforeEach(() => {
    Cookie.clearAllCookie();
  });

  it('set days in cookies', () => {
    // Arrange
    const name = 'testCookie';
    const value = 'testValue';
    const days = 7;
    // Act
    Cookie.set(name, value, days);

    // Assert
    expect(document.cookie).toContain(
      `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    );
  });

  it('should set a cookie with the given name and value', () => {
    // Arrange
    const name = 'testCookie';
    const value = 'testValue';

    // Act
    Cookie.set(name, value);

    // Assert
    expect(document.cookie).toContain(
      `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    );
  });

  // Sets a cookie with an empty name.
  it('should not set a cookie with an empty name', () => {
    // Arrange
    const name = '';
    const value = 'testValue';

    // Act
    Cookie.set(name, value);

    // Assert
    expect(document.cookie).toBe('');
  });

  // Sets a cookie with an empty value.
  it('should not set a cookie with an empty value', () => {
    // Arrange
    const name = 'testCookie';
    const value = '';

    // Act
    Cookie.set(name, value);

    // Assert
    expect(document.cookie).toBe('');
  });

  // Sets a cookie with a name and value that have non-ASCII characters.
  it('should set a cookie with non-ASCII characters in the name and value', () => {
    // Arrange
    const name = '😀cookie';
    const value = '😀value';

    // Act
    Cookie.set(name, value);

    // Assert
    expect(document.cookie).toContain(
      `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    );
  });

  // Sets a cookie with a name that is already in use, overwriting the previous value.
  it('should overwrite the previous value when setting a cookie with a name that is already in use', () => {
    // Arrange
    const name = 'testCookie';
    const value1 = 'testValue1';
    const value2 = 'testValue2';

    // Act
    Cookie.set(name, value1);
    Cookie.set(name, value2);

    // Assert
    expect(document.cookie).toContain(
      `${encodeURIComponent(name)}=${encodeURIComponent(value2)}`,
    );
  });
});

describe('Cookies.get() helper', () => {
  beforeEach(() => {
    Cookie.clearAllCookie();
  });

  // Returns the value of an existing cookie.
  it('should return the value of an existing cookie', () => {
    // Arrange
    const cookieValue = 'testCookieValue';
    document.cookie = `testCookie=${encodeURIComponent(cookieValue)};`;

    // Act
    const result = Cookie.get('testCookie');

    // Assert
    expect(result).toBe(cookieValue);
  });

  // Returns null if the cookie value is empty.
  it('should return null if the cookie value is empty', () => {
    // Arrange
    document.cookie = 'emptyCookie=';

    // Act
    const result = Cookie.get('emptyCookie');

    // Assert
    expect(result).toBe('');
  });

  // Handles cookies with no expiration date.
  it('should return null when cookie does not exist', () => {
    // Arrange
    document.cookie = '';

    // Act
    const result = Cookie.get('testCookie');

    // Assert
    expect(result).toBeNull();
  });
});
