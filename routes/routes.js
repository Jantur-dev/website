const express = require("express")
const router = express.Router()
router.get('/', (req, res) => {
    res.render('index', { title: "Djawir" })
})
router.get('/download', (req, res) => {
    //res.render('index')
})
router.get('/kontak', (req, res) => {
    //res.render('index')
})
router.get('/saran', (req, res) => {
    //res.render('index')
})
router.get('/developer', (req, res) => {
    res.render('developer', { title: "Developer" }) 
})
module.exports = router