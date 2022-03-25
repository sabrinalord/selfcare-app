const express = require('express')

const ActivityCtrl = require('../controllers/activity-controller')

const router = express.Router()

router.post('/activity', ActivityCtrl.createActivity)
router.put('/activity/:id', ActivityCtrl.updateActivity)
router.delete('/activity/:id', ActivityCtrl.deleteActivity)
router.get('/activity/:id', ActivityCtrl.getActivityById)
router.get('/activities', ActivityCtrl.getActivities)

module.exports = router