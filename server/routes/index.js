const express = require('express')
const router = express.Router()
const multer = require('multer')

const Posts = require('../../models/postModel')

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads')
    },
    filename(req, file, cb) {
        let array = file.originalname.split('.')
        array[0] = 'Photo' + '-' + array[0] + '-' + Date.now().toString()
        array[1] = '.' + array[1]
        const result = array.join('')
        console.log(result)
        cb(null, result)
    }
})

const upload = multer({ storage })

router.get('/', (req, res) => {
    Posts.find({}, (err, posts) => {
        if(err) return res.status(500).send({error: 'database failure'})
        res.json(posts)
        console.log(posts)
    })
})

router.post('/', upload.single('image'), (req, res) => {
    const post = new Posts()

    post.number = req.body.number
    post.name = req.body.name
    post.title = req.body.title
    post.imgURL = './uploads/' + req.file.filename
    post.published_date = Date.now()
    post.description = req.body.description

    post.save(err => {
        if (err) {
            console.log(err)
            res.json({ result: 0 })
            return
        }

        res.json({ result: 1 })
    })
})

router.delete('/', (req, res) => {
    Posts.deleteMany({}, (err) => {
        if(err) {
            console.log(err)
            res.json({ result: 0 })
            return
        }

        res.json({ result: 1 })
    })
})

router.delete('/:post_id', function(req, res){
    Posts.remove({ _id: req.params.post_id }, function(err, output){
        if(err) return res.status(500).json({ error: "database failure" });
        res.status(204).end();
    })
})

module.exports = router