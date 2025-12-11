import { authMiddleware, adminOnly } from '../middlewares/auth.middleware.js';
import { addSoftware } from '../controllers/software.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { addSoftwareSchema } from '../validators/sofware.validator.js';
const router = express.Router()
router.post("/addsoftware", validate(addSoftwareSchema), authMiddleware, adminOnly, addSoftware);

export default router;