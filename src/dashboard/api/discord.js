const express = require('express');
const fetch = require('node-fetch');
const btoa = require('btoa');
const { catchAsync } = require('../utils');
const router = express.Router();
const Enmap = require('enmap');
const dashboardDB = new Enmap();
const CLIENT_ID = process.env.Bid;
const CLIENT_SECRET = process.env.SECRET;
const redirect = encodeURIComponent('http://176.9.53.116:3000/api/discord/callback');
router.get('/login', (req, res) => {

  res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=http%3A%2F%2F176.9.53.116%3A3000%2Fapi%2Fdiscord%2Fcallback&response_type=code&scope=guilds%20identify%20email`);

});

router.get('/callback', catchAsync(async (req, res) => {
  if (!req.query.code) throw new Error('NoCodeProvided');
  const code = req.query.code;
  const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
  const response = await fetch(`https://discord.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,

    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${creds}`,
      },
    });
  const json = await response.json();
  console.log(json)
  const respone = await fetch('http://discord.com/api/users/@me', {
  headers: {
    Authorization: `Bearer ${json.access_token}`,
  }
});
const jsone = await respone.json();
  await res.redirect(`/dashboard/?token=${json.access_token}?expires_in=${json.expires_in}?jsone=${JSON.stringify(jsone)}`);

console.log(jsone) // json response from discord.


dashboarddb.set(creds, json)
dashboarusers.set(creds, jsone)

}));

module.exports = router;
