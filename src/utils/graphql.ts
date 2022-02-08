export class TypenameGraphQLError {
  public code: string;
  public message: string;

  constructor(type: string, message = '') {
    this.code = type;
    this.message = message;
  }
}
