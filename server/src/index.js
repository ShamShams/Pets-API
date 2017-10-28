import express from 'express';
import mongoose from 'mongoose';

import config from './config';

mongoose.connect(config.mongooseUrl, () => {
  console.log("DB initialized...");
});

const app = express();

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}...`);
})
