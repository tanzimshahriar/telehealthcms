module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c2cf92f004232efb8060cac0085dc09f'),
  },
});
