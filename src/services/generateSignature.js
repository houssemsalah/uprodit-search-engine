const hmacsha1 = require('hmacsha1');
const uuid = require('uuid');

function generateSignature(appid, env, uri) {
  const auth_signature_method = 'HMAC-SHA1';
  const auth_consumer_key = encodeURIComponent(hmacsha1(appid, env));
  const auth_token = uuid.v4();
  const uri_path = uri.replace(new RegExp('http(s)?://[^/]*'), '');
  const auth_signature = encodeURIComponent(hmacsha1(appid, uri_path + auth_token));
  const auth_nonce = encodeURIComponent(hmacsha1(appid, uuid.v4()));
  const auth_callback = encodeURIComponent(uri_path);
  const auth_timestamp = new Date().getTime();

  return `Auth ?auth_signature=${auth_signature}&auth_nonce=${auth_nonce}&auth_callback=${auth_callback}&auth_timestamp=${auth_timestamp}&auth_token=${auth_token}&auth_signature_method=${auth_signature_method}&auth_consumer_key=${auth_consumer_key}`;
}

module.exports = generateSignature;
