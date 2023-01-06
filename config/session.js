/**
 * Session Configuration
 * (sails.config.session)
 *
 * Use the settings below to configure session integration in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * https://sailsjs.com/config/session
 */

module.exports.session = {
  /***************************************************************************
   *                                                                          *
   * Session secret is automatically generated when your new app is created   *
   * Replace at your own risk in production-- you will invalidate the cookies *
   * of your users, forcing them to log in again.                             *
   *                                                                          *
   ***************************************************************************/
  // secret: "17b56b5f8c7c9ed6cacddac9e44721ad",

  /***************************************************************************
   *                                                                          *
   * Customize when built-in session support will be skipped.                 *
   *                                                                          *
   * (Useful for performance tuning; particularly to avoid wasting cycles on  *
   * session management when responding to simple requests for static assets, *
   * like images or stylesheets.)                                             *
   *                                                                          *
   * https://sailsjs.com/config/session                                       *
   *                                                                          *
   ***************************************************************************/
  // isSessionDisabled: function (req){
  //   return !!req.path.match(req._sails.LOOKS_LIKE_ASSET_RX);
  // },
  name: 'sails.session_id', // Name of the session ID cookie to set in the response (and read from in the request)
  secret: 'my_secret_key', // Secret string used to sign the session ID cookie
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // Maximum age of the session ID cookie in milliseconds (1 day)
  },
  adapter: 'connect-mongo', // Use the connect-mongo adapter to store session data in MongoDB
  url: 'mongodb://localhost:27017/social-media-app', // URL of the MongoDB server
  collection: 'sessions', // Collection in the MongoDB database where session data will be stored
  stringify: false   // <---- the fix

};
