const userValidator = (req, res, next) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const { email } = req.body

    if(!emailRegex.test(email)){
        return res.status(422).json({ error: "Invalid email" })
    }

    next()
}

module.exports = { userValidator }