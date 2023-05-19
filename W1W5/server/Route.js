import express from 'express';
import {savedata,getdata,updatedata,filterdata,deletedata} from './controllers.js'
const router = express.Router();

router.post('/savedata',savedata);
router.get('/getdata',getdata);
router.patch('/updatedata',updatedata);
router.get('/filterdata',filterdata);
router.delete('/deletedata',deletedata);

export default router;