

function handleErrors(error) {
    console.error(error.message);
}

exports.register = function (user) {
    return new Promise((resolve, reject) => {
        resolve();
    });
};

exports.login = function (user) {
    return new Promise((resolve, reject) => {
        resolve();
    });
};

exports.resetPassword = function (email) {
    alert("Dream Agenda will send email now... .");
}