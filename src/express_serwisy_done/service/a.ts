import axios from "axios";
import {Exam} from "../_model/exam";

//najprostsze wykorzystanie biblioteki axios (http-client)

axios.get(`https://doha.wsi.edu.pl:5200/exams`)
    .then(res => {
        // console.log(response.data)
        let result = [];

        res.data.forEach((item) => {
            // console.log(item);
            result.push(Object.assign(new Exam(), item));
        });
        console.log(`--------`);
        console.log(result[5]);
    });

