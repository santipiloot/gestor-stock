import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

const authConfig = () => {
    const jwtOptions = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
    }

    passport.use(
        new Strategy(jwtOptions, async (payload, done) => {
            done(null, payload)
        })
    )
}

export default authConfig;