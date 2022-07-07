import {Request, Response, NextFunction} from 'express'
import post from '../models/post-model'

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
        console.log(data)
        return res.render('list.ejs', { posts: data })
    })
    .catch((err) => next(err)),
    new: (req:Request, res: Response, next: NextFunction) => Promise.resolve()
    .then(() => res.render('new.ejs')),
    save:(req:Request, res: Response, next: NextFunction) => Promise.resolve()
    .then(async () => {
        await post.create(req.body)
        return res.redirect('/v1/posts')
    }),
    delete:(req:Request, res: Response, next: NextFunction) => Promise.resolve()
    .then(async () => {
        const { id } = req.params
        await post.findOneAndDelete({
            id
        })
        res.redirect('/v1/posts')
    })
    .catch(err => {
        console.log(err)
    })

}