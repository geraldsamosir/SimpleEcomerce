import Express from  'express'

//make alias path config in package.json
import moduleAlias  from  'module-alias'

moduleAlias()

const App =  Express()

App.disable('x-powered-by');

/**
 * registered module to Api
 */
//const {Blogmodule}   = require("_Module")


/**
 * registered core api to Api
 */
//const {usersApi} = require("_Core")

// App.use('/userscoreapi',usersApi.usersApi)

// App.use('/blogs/', Blogmodule)

App.get('/',(req,res)=>{
    res.status(200)
    res.json("welcome to api")
})

module.exports = App

