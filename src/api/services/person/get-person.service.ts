class GetPersonService {
  public async Handler() {
    const res =  {
      PersonId: 1,
      Name: 'This is something amazing',
    };
    return res;
  }
}

const service = new GetPersonService();
export { service as GetPersonService };
