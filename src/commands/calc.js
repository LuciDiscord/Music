const utils = require('../config/utils');
const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;

exports.run = async (client, message, args) => {
  if(args.length < 1)
  return message.reply(`You must provide a equation to be solved on the calculator`);

const question = args.join(' ');

let answer;
if(question.indexOf('9 + 10') > -1) {
  answer = '21';
} else {
  try {
      answer = math.eval(question);
  } catch (err) {
     return  message.channel.send(`Invalid math equation! \n||**[i.e.: \`2*4\`, \`2+4\`, \`4/2\`, or \`4-2\`]**||`);
  }
}
message.channel.send({
  embed: utils.embed('', stripIndents`
  **Equation:**\n\`\`\`\n${question}\n\`\`\`
  **Answer:**\n\`\`\`\n${answer}\n\`\`\`
  `)
})
};
