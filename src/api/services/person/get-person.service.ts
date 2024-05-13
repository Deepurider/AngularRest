class GetPersonService {
  public async Handler() {
    const res = {
      title: 'Fetched from api.',
      content: 'Angular is a popular JavaScript framework for building dynamic web applications. It provides a structured way to develop client-side applications using TypeScript, a superset of JavaScript. With Angular, developers can create responsive, single-page applications (SPAs) with features such as data binding, dependency injection, and modular architecture.'
    };
    return res;
  }
}

const service = new GetPersonService();
export { service as GetPersonService };
