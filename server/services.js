
const UsersModel = require("./models/users.model")
const Discussion = require("./models/discussion.model")
exports.login = (req, res, next) => {
    console.log(req.query, req.body)

    const { emailAddress, password, } = req.body;
    if (!emailAddress || !password)
        return res.status(400).send({ message: "please provide valid information" });
    UsersModel.findOne({ emailAddress }, (error, userInfo) => {
        if (error) {
            console.log('signup error', error)
            return res.send({ error: error, message: 'Internal Server Error.Please try again.' })
        }
        if (!userInfo) return res.status(500).send({ error: error, message: 'please provide valid account.' })
        if (!userInfo.validPassword(password)) {
            return res.status(500).send({ error: error, message: 'email or password wrong' })
        }
        return res.status(200).send({ error: error, message: 'login successfull', data: userInfo })
    }
    )

}
exports.signup = (req, res,) => {
    const { personName, phoneNumber, emailAddress, password, } = req.body;
    if (!personName || !phoneNumber || !emailAddress || !password)
        return res.status(400).send({ message: "please provide valid information" });
    UsersModel.findOne({ emailAddress: emailAddress }, (error, userInfo) => {
        if (error) {
            console.log('signup error', error)
            return res.send({ error: error, message: 'Internal Server Error.Please try again.' })
        }
        if (userInfo && userInfo.emailAddress) {
            return res.status(400).send({ error: error, message: 'User Already existed with your email.' })
        }


        let userSignup = new UsersModel()
        userSignup.emailAddress = emailAddress
        userSignup.password = userSignup.generateHashPassword(password)
        userSignup.parsonName = personName
        userSignup.phoneNumber = phoneNumber
        userSignup.save((err, user) => {
            if (err) {
                console.log('authLsignup Error', err)
                return res.send({ error: error, message: 'Internal Server Error .Please try again.' })

            }
            return res.send({ error: error, data: 'User Signup successful', user: user })
        })
    })
}
exports.getdiscussion = (req, res) => {
    console.log(req.query, req.body)


    Discussion.find({}, (error, discussionlist) => {
        if (error) {
            console.log('Discussion error', error)
            return res.send({ error, message: 'Internal Server Error.Please try again.' })
        }
        return res.status(200).send({ error, message: 'success.', data: discussionlist })

    })

}
exports.creatediscussion = (req, res) => {

const {discussionText,userId}= req.body
    let Discussionrecord = new Discussion()
    Discussionrecord.discussionText = discussionText
    Discussionrecord.userId = userId
    Discussionrecord.createdAt= new Date()

    
    Discussionrecord.save((err, discussioninfo) => {
        if (err) {
            console.log('discussion Error', err)
            return res.send({error, message: 'Internal Server Error .Please try again.' })

        }
        return res.send({ error:err, data: 'successful', data: discussioninfo })
    })
}  