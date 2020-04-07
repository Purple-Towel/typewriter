const sentence = "hello there from lighthouse labs";
let timeDelay = 50
let timeDelayWhenFinished = timeDelay * sentence.length;

for (let char = 0; char < sentence.length; char++) {
  setTimeout(() => {
    process.stdout.write(sentence[char]);
  }, timeDelay);
  timeDelay = timeDelay + 50;
};

setTimeout(() => {
  console.log('');
}, timeDelayWhenFinished);