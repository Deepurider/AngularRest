import { Request, Response } from 'express';
import { GetPersonService } from '../services/person/get-person.service';
class PersonController {
  public async GetPersons(req: Request, res: Response) {
    const response = await GetPersonService.Handler();
    res.json(response);
  }
}
const controller = new PersonController();
export { controller as PersonController };
