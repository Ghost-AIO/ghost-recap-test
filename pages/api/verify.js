// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');
import qs from 'qs';
export default (req, res) => {
  
  res.statusCode = 200

  let url = 'https://www.google.com/recaptcha/api/siteverify';
  let secret = process.env.V3_SK;
  let response = req.body['token'];

  let data = {
    secret,
    response
  }

  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data),
    url,
  };
  axios(options).then((response => {
    return res.json(response.data);
  })).catch(err => {
    return res.json({error:err.message});
  });
  
}
