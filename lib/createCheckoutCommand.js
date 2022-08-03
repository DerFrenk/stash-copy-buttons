module.exports.createCheckoutCommand = (branchName) => {
    return `git fetch && git checkout ${branchName} && git pull`;
};
