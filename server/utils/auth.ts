import jwt from 'jsonwebtoken';

const secret = 'mysecret';
const expiration = '2h';

const authMiddleware = {
  authMiddleware: function ({req}:any) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data }: any = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ _id, email, username }:any) {
    const payload = { _id, email, username  };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

export default authMiddleware;