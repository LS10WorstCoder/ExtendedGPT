//const
const API_KEY = "ENTER YOUR GPT API KEY INTO THESE QUOTES";
const MODEL_TYPE = "gpt-3.5-turbo"; //chatGPT model vers

//changes the ui in google docs
function onOpen(){
  DocumentApp.getUi().createMenu("ExtendedGPT")
    .addItem("Custom Prompt","custPrompt")
    .addItem("Complete Sentence","compSentence")
    .addItem("Finish Paragraph","finishPar")
    .addItem("Expand Text","textExpand")
    .addItem("Summarize Text","textSum")
    .addToUi();
}

function custPrompt(){

  const doc = DocumentApp.getActiveDocument();
  const selectedText = doc.getSelection().getRangeElements()[0].getElement().asText().getText();
  const body = doc.getBody();
  const prompt = selectedText;
  const temperature = .5;
  const maxTokens = 4096;
  const requestBody = {
    model: MODEL_TYPE,
    messages: [{role: "user", content: prompt}],
    temperature,
    max_tokens: maxTokens,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + API_KEY,
    },
    payload:JSON.stringify(requestBody),
  };

  const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions",requestOptions)
  const responseText = response.getContentText();
  const json = JSON.parse(responseText);
  const generatedText = json['choices'][0]['message']['content'];
  Logger.log(generatedText);
  body.appendParagraph(generatedText.toString());

};

function compSentence(){
  const doc = DocumentApp.getActiveDocument();
  const selectedText = doc.getSelection().getRangeElements()[0].getElement().asText().getText();
  const body = doc.getBody();
  const prompt = "Complete the following sentence while matching the context as much as possible: " + selectedText;
  const temperature = .5;
  const maxTokens = 4096;

  const requestBody = {
    model: MODEL_TYPE,
    messages: [{role: "user", content: prompt}],
    temperature,
    max_tokens: maxTokens,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + API_KEY,
    },
    payload:JSON.stringify(requestBody),
  };

  const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions",requestOptions)
  const responseText = response.getContentText();
  const json = JSON.parse(responseText);
  const generatedText = json['choices'][0]['message']['content'];
  Logger.log(generatedText);
  body.appendParagraph(generatedText.toString());


}

function finishPar(){
  const doc = DocumentApp.getActiveDocument();
  const selectedText = doc.getSelection().getRangeElements()[0].getElement().asText().getText();
  const body = doc.getBody();
  const prompt = "Complete the following paragraph while matching the context as much as possible: " + selectedText;
  const temperature = .5;
  const maxTokens = 4096;

  const requestBody = {
    model: MODEL_TYPE,
    messages: [{role: "user", content: prompt}],
    temperature,
    max_tokens: maxTokens,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + API_KEY,
    },
    payload:JSON.stringify(requestBody),
  };

  const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions",requestOptions)
  const responseText = response.getContentText();
  const json = JSON.parse(responseText);
  const generatedText = json['choices'][0]['message']['content'];
  Logger.log(generatedText);
  body.appendParagraph(generatedText.toString());



}

function textExpand(){
  const doc = DocumentApp.getActiveDocument();
  const selectedText = doc.getSelection().getRangeElements()[0].getElement().asText().getText();
  const body = doc.getBody();
  const prompt = "Expand the following text: " + selectedText;
  const temperature = .5;
  const maxTokens = 4096;

  const requestBody = {
    model: MODEL_TYPE,
    messages: [{role: "user", content: prompt}],
    temperature,
    max_tokens: maxTokens,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + API_KEY,
    },
    payload:JSON.stringify(requestBody),
  };

  const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions",requestOptions)
  const responseText = response.getContentText();
  const json = JSON.parse(responseText);
  const generatedText = json['choices'][0]['message']['content'];
  Logger.log(generatedText);
  body.appendParagraph("Enhanced Text:\n" + generatedText.toString());


}

function textSum(){
  const doc = DocumentApp.getActiveDocument();
  const selectedText = doc.getSelection().getRangeElements()[0].getElement().asText().getText();
  const body = doc.getBody();
  const prompt = "Summarize the following text: " + selectedText;
  const temperature = .5;
  const maxTokens = 4096;


  const requestBody = {
    model: MODEL_TYPE,
    messages: [{role: "user", content: prompt}],
    temperature,
    max_tokens: maxTokens,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + API_KEY,
    },
    payload:JSON.stringify(requestBody),
  };

  const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions",requestOptions)
  const responseText = response.getContentText();
  const json = JSON.parse(responseText);
  const generatedText = json['choices'][0]['message']['content'];
  Logger.log(generatedText);
  body.appendParagraph("Summary:\n" + generatedText.toString());

}