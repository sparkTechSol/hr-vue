export default {
    data: function () {
        return {
            validationRules: {
                required: (value) => !!value || "Required.",
                email: (value) => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || "Invalid e-mail.";
                },
                phone: (value) => {
                    const pattern = /^[0-9]{11}$/;
                    return pattern.test(value) || "Invalid phone.";
                },
            }
        }
    }


};