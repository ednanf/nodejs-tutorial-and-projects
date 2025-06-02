const getJobs = async (req, res, next) => {
  res.send('get jobs');
};

const createJob = async (req, res, next) => {
  res.json(req.user);
};

const getJob = async (req, res, next) => {
  res.send('get job');
};

const patchJob = async (req, res, next) => {
  res.send('patch job');
};

const deleteJob = async (req, res, next) => {
  res.send('delete job');
};

module.exports = {
  getJobs,
  createJob,
  getJob,
  patchJob,
  deleteJob,
};
