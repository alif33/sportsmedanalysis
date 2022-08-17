const cookie = require('cookie');

export function userAuth(gssp) {
    return async (context) => {
        const { req, res } = context
        if (req.headers.cookie) {
            const cookies = cookie.parse(req.headers.cookie)
            if (!cookies.__u__) {
                return {
                    redirect: {
                        destination: '/auth/sign-in',
                    }
                }
            }

        } else {
            return {
                redirect: {
                    destination: '/auth/sign-in',

                }
            }
        }
        return await gssp(context)
    }
}
