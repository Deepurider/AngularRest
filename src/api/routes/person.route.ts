import { Router } from 'express';
import { PersonController } from '../controllers/person.controller';

const router = Router();
router.get('/', PersonController.GetPersons);
export { router as PersonRoutes };
