import { Dataset } from "./objects/Dataset.js";

const mainDataset = new Dataset("/home/dragunovartem99/Data/lichess_db_puzzle.csv");

const mainDatasetHead = new Dataset("./samples/head-999.csv");
const mainDatasetTail = new Dataset("./samples/tail-999.csv");

export { mainDataset, mainDatasetHead, mainDatasetTail }
