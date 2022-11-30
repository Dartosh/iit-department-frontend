/**
 * Debugging
 */
class Debug {
    private readonly DEBUG_PREFIX = '[DEBUG] : ';
    private readonly DEBUG_PREFIX_SUCCESS = '[DEBUG] SUCCESS : ';
    private readonly DEBUG_PREFIX_ERROR = '[DEBUG] ERROR : ';

  /**
   * Set true when you are in development mode
   * @type {boolean}
   */
  public readonly isDevelopment: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

  /**
   * Set true when you are in production mode
   * @type {boolean}
   */
  private readonly isProduction: boolean = !this.isDevelopment;

  /**
   * Set names of methods that are available in development mode
   */
  private readonly showIfDevelopment = ['info', 'success', 'error'];

  /**
   * Set names of methods that are available in production mode
   */
  private readonly showIfProduction = ['error'];

  /**
   * Returns true if method allowed for current development or production mode.
   * If there is not development or production always return false.
   * @param {String} method - name of method
   * @returns {boolean}
   */
  public makeOrNot(method: string): boolean {
    if (this.isDevelopment) {
      return this.showIfDevelopment.includes(method);
    }

    if (this.isProduction) {
      return this.showIfProduction.includes(method);
    }

    /**
     * Don't show logs by default
     */
    return false;
  }

  /**
   * Info log
   * @param {String} message - log message
   * @param data - all other arguments
   */
  public info(message: string, ...data: any) {
    if (this.makeOrNot('info')) {
      console.log(`%c${new Date().toISOString()}`, 'color: gray', this.DEBUG_PREFIX, message, data);
    }
  }

  /**
   * Info log success
   * @param {String} message - log message
   * @param data - all other arguments
   */
  public success(message: string, ...data: any): void {
    if (this.makeOrNot('success')) {
      console.info(
        `%c${new Date().toISOString()} %c${this.DEBUG_PREFIX_SUCCESS}`,
        'color: gray',
        'color: green',
        message,
        data,
      );
    }
  }

  /**
   * Error log
   * @param {String} message - log message
   * @param data - all other arguments
   */
  public error(message: string, ...data: any): void {
    if (this.makeOrNot('error')) {
      console.log(
        `%c${new Date().toISOString()} %c${this.DEBUG_PREFIX_ERROR}`,
        'color: white',
        'color: red',
        message,
        data,
      );
    }
  }

  /**
   * Clear the console
   */
  public clear(): void {
    console.clear();
  }
}

const debug = new Debug();

export default debug;
