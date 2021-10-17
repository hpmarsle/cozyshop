import express from 'express'
const router = express.Router()
import { protect, admin } from '../middleware/authMiddleware.js'
import { authUser, getUserProfile, getUsers, registerUser, updateUserProfile, deleteUser, updateUser, getUserById } from '../controllers/userController.js'

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)
router.route('/:id')
    .get(protect, admin, getUserById)
    .delete(protect, admin, deleteUser)
    .put(protect, admin, updateUser)

export default router