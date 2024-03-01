const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mymoney', { useNewUrlParser: true })
.catch(e => {
    const msg = 'FATAL ERROR, the system arent able to connect to mongodb'
    console.log('\x1b[41m%s\x1b[37m',msg,'\x1b[0m')
})