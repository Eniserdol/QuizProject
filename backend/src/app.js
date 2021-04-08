const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
require('dotenv').config()
const passport = require('passport')

const mongooseConnection = require('./database-connection')
// require('./database-connection')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const quizRouter = require('./routes/quiz')
const questionRouter = require('./routes/question')
const accountRouter = require('./routes/account')

const secretp = process.env.SECRET
const app = express()

if (app.get('env') == 'development') {
  /* eslint-disable-next-line */
  app.use(require('connect-livereload')())
  /* eslint-disable-next-line */
  require('livereload')
    .createServer({ extraExts: ['pug'], usePolling: true })
    .watch([`${__dirname}/public`, `${__dirname}/views`])
}

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(
  session({
    secret: `${secretp}`,
    store: new MongoStore({ mongooseConnection, stringify: false }),
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      path: '/api',
    },
  })
)
app.use(passport.initialize())
app.use(passport.session())

const User = require('./models/user')

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', indexRouter)
app.use('/api/account', accountRouter)
app.use('/api/users', userRouter)
app.use('/api/quizzes', quizRouter)
app.use('/api/questions', questionRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)

  res.send({
    status: err.status,
    message: err.message,
    stack: req.app.get('env') == 'development' ? err.stack : '',
  })
})

console.log('i am alive   ')

module.exports = app
