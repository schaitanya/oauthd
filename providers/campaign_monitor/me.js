var me = {
    url: "/primarycontact.json",
    params: {},
    fields: {
        email: function(me) {
            console.log(me);
            return me.EmailAddress;
        }
    }
};

module.exports = me;
