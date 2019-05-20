const { exec } = require("child_process");

require("dotenv").config();

const PROJECT_ID = process.env.PROJECT_ID;

const GET_PROJECT_ID = `gcloud config get-value project`;
const UPDATE_SERVICE = `gcloud builds submit --tag gcr.io/${PROJECT_ID}/pinyin-conversion-service`;
const DEPLOY_SERVICE = `gcloud beta run deploy --image gcr.io/${PROJECT_ID}/pinyin-conversion-service`;

const deploy = () => {
  console.log("Starting deployment!");
  exec(UPDATE_SERVICE, (err, stdout, stderr) => {
    if (err) {
      return console.log("Failed... aborting!");
    }

    exec(DEPLOY_SERVICE, (err, stdout, stderr) => {
      if (err) {
        return console.log("Failed... aborting!");
      }

      console.log("Complete!");
    });
  });
};

deploy();
