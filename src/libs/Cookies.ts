class Cookie {
  /**
   * Set a cookie with the given name and value.
   * @param name - The name of the cookie.
   * @param value - The value to be stored in the cookie.
   * @param days - The number of days until the cookie expires (optional).
   */
  public static set(name: string, value: string, days?: number): void {
    let expires: string;

    if (!name || !value) return;

    if (days) {
      const time = new Date();
      const now = time.getUTCDate();
      time.setUTCDate(now + days);
      expires = `expires=${time.toUTCString()}`;
    } else expires = `expires=`;

    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; ${expires}; path=/`;
  }

  /**
   * Get the value of a cookie with the given name.
   * @param name - The name of the cookie.
   * @returns The value of the cookie, or null if the cookie does not exist.
   */
  public static get(name: string): string | null {
    const matches = document.cookie.match(
      new RegExp(
        // eslint-disable-next-line no-useless-escape
        `(?:^|; )${name.replace(/([.$?*|{}()[+^\]\\\/])/g, '\\$1')}=([^;]*)`,
      ),
    );
    return matches ? decodeURIComponent(matches[1]) : null;
  }

  /**
   * Delete a cookie with the given name.
   * @param name - The name of the cookie to be deleted.
   */
  public static deleteCookie(name: string): void {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }

  /**
   * Delete all cookies from domain.
   */
  public static clearAllCookie() {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i += 1) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }
}

export default Cookie;
