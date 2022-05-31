const passport = require('passport')
// JWT Strategy
const JwtStrategy = require('./strategies/jwt.strategy')
// Local Strategy
const LocalStrategy = require('./strategies/local.strategy')
// Github Strategy
const GithubStrategy = require('./strategies/github.strategy')
// Google Strategy
const GoogleStrategy = require('./strategies/google.strategy')

passport.serializeUser(
  (user, done) => {
    done(null, user.id)
  }
)

// passport.deserializeUser((id, done) => {
//     user.findById(id, (err, user) => {
//       done(err, user)
//     })
//   }
// )

passport.use(GithubStrategy)
passport.use(GoogleStrategy)
passport.use(LocalStrategy)
passport.use(JwtStrategy)
