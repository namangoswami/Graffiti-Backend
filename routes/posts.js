import express from 'express';

const router=express.Router();
import {getposts, createPost, deletePost, likePlus, updatePost} from '../controllers/posts.js'
router.get('/',getposts);
router.post('/', createPost)
router.post('/:_id/delete/', deletePost);
router.post('/:_id/likePlus/', likePlus);
router.post('/:_id/update/', updatePost);
export default router;