module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '489ff74d60a37725151607468cfcab2d'),
  },
});
