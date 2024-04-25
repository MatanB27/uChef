class NotFoundError extends Error {
    
  public status: number;
    
  constructor(message = 'Not Found') {
    super(message);
    this.status = 404;
    this.name = 'NotFoundError';
  }
}
    
export default NotFoundError;
    