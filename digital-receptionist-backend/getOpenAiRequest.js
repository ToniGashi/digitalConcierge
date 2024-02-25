const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function sleep(ms) {
    (async () => await new Promise((resolve) => {
        setTimeout(resolve, ms);
    }))();
}
 
async function postRequest(req) {
  // Extract the `prompt` from the body of the request
  const { prompt } = req.body;
  
  // Get first assistant: "asst_10028uS9y4tn5E675WBgmHTZ"
  const assistants = await openai.beta.assistants.list();
  
  const assistant = assistants.data[0]
  
  // Create a conversation thread #required
  const thread = await openai.beta.threads.create();

  // Add prompt to the thread
  await openai.beta.threads.messages.create(
    thread.id,
    {role: "user",
    content: prompt}
  )
  
  // Run thread
  let run = await openai.beta.threads.runs.create(
    thread.id,
    { 
        assistant_id: assistant.id
    }
  );
  
  while (run.status !== "completed" && run.status !== "failed"){
    console.log('trying to see if run is completed: ', run.status)
    run = await openai.beta.threads.runs.retrieve(thread.id, run.id);
  }

  if(run.status === "failed") {
    throw new Error("There was an issue with stutus failing: ", run);
  }

  // Retrieve response
  const messages = await openai.beta.threads.messages.list(
    thread.id
  );

  console.log(messages.data[0].content[0])

  const message = messages.data[0].content[0].text.value;

  return message;
  // Request the OpenAI API for the response based on the prompt
//   const response = await openai.chat.completions.create({
//     model: 'gpt-3.5-turbo',
//     messages: [
//       {
//         role: 'user',
//         content: prompt,
//       },
//     ],
//     max_tokens: 200,
//     temperature: 0, // you want absolute certainty for spell check
//     top_p: 1,
//     frequency_penalty: 1,
//     presence_penalty: 1,
//   });

//   const chat_response = response.choices[0].message.content;

//   return chat_response;
}

module.exports = {
    postRequest
}