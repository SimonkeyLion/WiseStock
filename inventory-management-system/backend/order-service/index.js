const express = require('express'); const app = express(); const port = process.env.PORT || 3002; app.get('/', (req, res) => { res.send('Order Service is running'); }); app.listen(port, () => { console.log(`Order Service is running on port ${port}`); });
