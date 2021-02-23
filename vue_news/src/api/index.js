import axios from 'axios';

const config ={
    baseurl:'https://api.hnpwa.com/v0/'
};

function fetchNewslist(){
    return axios.get(`${config.baseurl}news/1.json`);
}

function fetchAsklist(){
    return axios.get(`${config.baseurl}ask/1.json`);
}

function fetchJobslist(){
    return axios.get(`${config.baseurl}jobs/1.json`);
}

export{
    fetchNewslist,
    fetchAsklist,
    fetchJobslist
}