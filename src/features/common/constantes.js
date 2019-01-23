const SERVER_PATH = 'http://localhost:3000/';
const AXIOS_CONFIG = {	headers: {'Cache-Control' : 'max-age=0, no-cache, no-store, must-revalidate', 'Expires' : 'Thu, 01 Jan 1970 00:00:00 GMT', 'Pragma' : 'no-cache'}};

module.exports = {
  SERVER_PATH,
  AXIOS_CONFIG
};