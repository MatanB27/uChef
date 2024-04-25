class ServerError extends Error {
    public status: number;

    constructor(message = 'Internal Server Error') {
      super(message);
      this.status = 500;
      this.name = 'ServerError';
    }
  }
    
export default ServerError;
    