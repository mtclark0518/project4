import * as express from 'express'
const router = express.Router()
import {appCNTL} from '../controllers/appCNTL'

router.get(appCNTL.launch);

module.exports = router;
