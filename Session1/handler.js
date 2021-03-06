'use strict';

// --------------- Lex bot helper functions -----------------------
function close(sessionAttributes, fulfillmentState, message) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'Close',
            fulfillmentState,
            message,
        },
    };
}

// --------------- Functions that control the bot's behavior -----------------------
/**
 * Performs dialog management and fulfillment for greeting user.
 *
 */
function greetUser(intent_request, callback){
    var user_name = intent_request['currentIntent']['slots']['Name']
    var output_session_attributes = {
        "Name" : user_name
    }

    callback(close(output_session_attributes, 'Fulfilled',
    { contentType: 'PlainText', content: selectGreeting(user_name)}));
}


function selectGreeting(user_name){
    var options = [`Hi there ${user_name}, nice to meet you!`,
        `Hello ${user_name}, I hope you've enjoyed this lab session today!`,
        `Hey ${user_name}, hope you've had a good day!`];
    console.log(options[Math.floor(Math.random()*options.length)]);
    return options[Math.floor(Math.random()*options.length)];
}


 // --------------- Intents -----------------------

/**
 * Called when the user specifies an intent for this skill.
 */
function dispatch(intentRequest, callback) {
    console.log(`dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);

    const intentName = intentRequest.currentIntent.name;

    // Dispatch to your skill's intent handlers
    if (intentName === 'GreetUser'){
        return greetUser(intentRequest, callback);
    }
    throw new Error(`Intent with name ${intentName} not supported`);
}

// --------------- Main handler -----------------------

// Route the incoming request based on intent.
// The JSON body of the request is provided in the event slot.
module.exports.handler = (event, context, callback) => {
    try {
        // By default, treat the user request as coming from the America/New_York time zone.
        process.env.TZ = 'Pacific/Auckland';
        console.log(`event.bot.name=${event.bot.name}`);

        dispatch(event, (response) => callback(null, response));
    } catch (err) {
        callback(err);
    }
};
