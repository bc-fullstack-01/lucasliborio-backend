import {Request, Response, NextFunction} from 'express'
import post from '../models/post-model'
import comment from '../models/comment-model'

export const postsController = {
    //beforeAll:(req:Request, res: Response, next: NextFunction) => Promise.resolve()
    //
    //.then(() => {
    //    next()
    //})
    //.catch(err => next(err)),
    list: (req:Request, res: Response, next: NextFunction) => Promise.resolve()
    .then(() => post.find())
    .then((data) => {
        return res.render('list.ejs', { posts: data })
    })
    .catch((err) => next(err)),
    new: (req:Request, res: Response, next: NextFunction) => Promise.resolve()
    .then(() => res.render('new.ejs')),
    save:(req:Request, res: Response, next: NextFunction) => Promise.resolve()
    .then(async () => {
        const createPost = await post.create(req.body)
        console.log('POST', createPost)
        await comment.create({
            description: 'test1',
            post: createPost._id,
            
        }).then(commentcr => console.log('comments', commentcr))
        return res.redirect('/v1/posts')
    }),
    delete:(req:Request, res: Response, next: NextFunction) => Promise.resolve()
    .then(async () => {
        const { id } = req.params
        await post.deleteOne({
            id
        })
        res.redirect('/v1/posts')
    })
    .catch(err => {
        console.log(err)
    }),
    show:(req:Request, res: Response, next: NextFunction) => Promise.resolve()
    .then(async() => {
        const { id } = req.params
        
        const postById = await post.findById(id).populate('comments')
        console.log(postById)
        res.render('show.ejs', {post: postById})
    })

}