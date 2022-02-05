export class GraphQLTNError {
  public code: string;
  public message: string;

  constructor(type: any, message?: string) {
    this.code = type;
    this.message = message;
  }
}

export const generateResult = (data: any = null) => {
  return data;
};

export const generateError = (
  type: string,
  message?: string,
): GraphQLTNError => {
  return new GraphQLTNError(type, message ? message : '');
};
