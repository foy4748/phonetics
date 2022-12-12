import { createSlice } from "@reduxjs/toolkit";

import arabic from "../Images/Arabic.png";
import chinese from "../Images/chineese.png";
import english from "../Images/English.png";
import french from "../Images/french.png";
import hindi from "../Images/hindi.png";
import japaneese from "../Images/japaneese.png";
import korean from "../Images/korean.png";
import portuguiese from "../Images/portugese.png";
import russian from "../Images/russian.png";
import spanish from "../Images/spanish.png";

const initialState = [
  {
    name: "Md. Amir",
    desc: "Md amir has skills in communication, listening, collaboration, adaptability, empathy and patience. he is a arabic scholar",
    sub: "Arabic",
    Country: "Oman",
    image: arabic,
    email: "amir@email.com",
  },

  {
    name: "Kai Shin",
    desc: "She gives value in real-world learning, exchange of best practices and a lifelong love of learning.",
    sub: "Chineese",
    Country: "China",
    image: chinese,
    email: "kaishin@email.com",
  },

  {
    name: "Mrs. Jenny",
    desc: "She teach the principles of the English language, using different methods to deliver successful courses, responsibilities can vary based on the academic level and native language of the students.",
    sub: "English",
    Country: "UK",
    image: english,
    email: "jenny@email.com",
  },

  {
    name: "Annabelle",
    desc: "Annabelle is native language scholar. She is very smart co-operative and effective in teaching Japaneese",
    sub: "French",
    Country: "France",
    image: french,
    email: "annbella@email.com",
  },

  {
    name: "Mrs. Shetty",
    desc: "Mrs Shetty is a native hindi language speaker and teacher. She is helpful and a smart teacher",
    sub: "Hindi",
    Country: "India",
    image: hindi,
    email: "shetty@email.com",
  },

  {
    name: "Sakana",
    desc: "Sakana is native language scholar. She is very smart co-operative and effective in teaching Japaneese",
    sub: "Japanese",
    Country: "Japan",
    image: japaneese,
    email: "sakana@email.com",
  },

  {
    name: "Min Jun",
    desc: "As korean teacher she is exper at his native language. she helps her studebt very much",
    sub: "Korean",
    Country: "South Korea",
    image: korean,
    email: "minjun@email.com",
  },

  {
    name: "Amelia",
    desc: "She gives value in real-world learning, exchange of best practices and a lifelong love of learning.",
    sub: "Portuguiese",
    Country: "Portugal",
    image: portuguiese,
    email: "amelia@email.com",
  },

  {
    name: "Angelina",
    desc: "She teach the principles of the English language, using different methods to deliver successful courses, responsibilities can vary based on the academic level and native language of the students.",
    sub: "Russian",
    Country: "Russia",
    image: russian,
    email: "angellina@email.com",
  },

  {
    name: "Isabella",
    desc: "She has skilled in communication, listening, collaboration, adaptability, empathy and patience. she is a spanish scholar",
    sub: "Spanish",
    Country: "Spain",
    image: spanish,
    email: "isabella@email.com",
  },
];

export const teacherConsultingSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    bookAsession: (state, action) => {
      //state.value += action.payload;
      console.log(action.payload);
      state[action.payload]["booked"] = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { bookAsession } = teacherConsultingSlice.actions;

export default teacherConsultingSlice.reducer;
