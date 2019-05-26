const app = require('./app');

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Your app is listening on port ${PORT}`);
});
