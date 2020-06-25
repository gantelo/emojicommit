import axios from 'axios';

const updateEmojiURI = `https://eaify1rq91.execute-api.sa-east-1.amazonaws.com/em-commit`;

export const clickEmoji = (id: number): void => {
  console.log(id);
  axios
    .post(updateEmojiURI, {
      id,
    })
    .then(resp => console.log(resp));
};
