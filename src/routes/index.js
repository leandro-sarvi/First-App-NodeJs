import { Router } from "express"
const router = Router();
router.get('/', (req, res) => res.render('index',{title: 'First website Node'}))
router.get('/contact', (req, res) => res.render('contact',{title: 'Contact us'}))
router.get('/about', (req, res) => res.render('about',{title: 'About me'}))

export default router 