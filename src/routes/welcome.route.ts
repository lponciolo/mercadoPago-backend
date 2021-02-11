import * as express from 'express'
const router = express.Router()
import { welcomeValidationSchema } from '../validators/welcome.validation'
// import controllers

import { getWelcomeController } from '../controllers/wellcome.controller'
//

router.get('/', getWelcomeController)

export default router
