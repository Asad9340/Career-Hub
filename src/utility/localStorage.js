const checkLocalStorage = () => {
  const storedJob = localStorage.getItem('job-applications');
  if (storedJob) {
    return JSON.parse(storedJob);
  }
  return [];
};
const saveLocalStorage = id => {
  const checkResult = checkLocalStorage();
  const exists = checkResult.find(jobId => jobId === id);
  if (!exists) {
    checkResult.push(id);
    localStorage.setItem('job-applications', JSON.stringify(checkResult));
  }
};

export { checkLocalStorage, saveLocalStorage };
