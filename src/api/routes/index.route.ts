import { Router } from 'express';
import { PersonRoutes } from './person.route';

const router = Router();
// controller routes
router.use('/person', PersonRoutes);

router.get('*', (req, res) => {
  res.json({
    Error: 'Invalid api route',
  });
});

export { router as ApiRoutes };
