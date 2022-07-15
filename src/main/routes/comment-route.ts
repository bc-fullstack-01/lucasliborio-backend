import { Router } from "express";

export default (router: Router): void => {
  router.post('/posts/:postId/comments')
  router.post('/posts/:postId/comments/like')
  router.post('/posts/:postId/comments/unlike')
  router.delete('/posts/:postId/comments/:commentId')
}