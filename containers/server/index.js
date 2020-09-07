import express from 'express';
import bodyParser from 'body-parser';
import {AsciiString, CommonConst} from "common/common-const";
import {ExtraAscii} from "extra/extra";

const app = express();

app.use(bodyParser.json());

app.get('/',(req,res) => {
	ExtraAscii("Blimp").then(extraStr => {
		AsciiString("Hello World!!").then(str => {
			res.send(`Hello Babel: ${extraStr} ${[...Object.keys(CommonConst)].join(", ")} ${str}`);
		});
	});
})

app.listen(4000,() => {
	console.log(`app is listening to port 4000`);
})