What is prompt_Engineering :-

 - prompt engineering is the pratice of designing and refining the instuction(called prompts) given to an AI model to grt better, more accurate & more useful output.

what is LLM :-

 - LLM stands for large language model.
 - it is an AI model trained on massive amount of taxt data to -->

 1. understand language
 2. predict the next word in a sentence
 3. Generate meaningful responce

 ex. google keyboard

Role of LLM  in prompt Engineering :-

 - prompt engineering -> how you talk
  - LLM -> who you're talking to

- LLM's helps us to :-

1. read our prompt
2. interpret our intent
3. generate a  good responce based on our prompt.


- MOdule 1 -> Introduction to LLM & prompting basics

Descriminative AI ->
  - descriminative AI is a AI technique that helps us to classify the data.
  
  - ex.
   1. Email - Spam & not spam
   2. Face ID(face recognition)
   3. Netflix recomendation etc...

   Generative AI ->
   -  In Generative AI ,it not only classify the data but it generate some new data through AI.
   
   - ex.
   1. ChatGPT (Text generation/image)
   2. Midjourney (image generation)
   3. Github copilot ( code generation) etc....

Evolution of -> RNN, LSTM & transformer

1. RNN (Recurrent Neural Network)
   
    - An RNN is a tyepe of neural network designed to process sequencial data like...
        - text
        - speech
        - time series etc..
    - it process the data step by step.
    - it remember privious information using hidden state in RNN.

    Previou inf. -> RNN -> new Inf.

    EX. 
    sentence- "I Love AI"
    RNN reads it -"i" -> then "love" -> then "AI"
    (like keeping memory of previous word)

    The dis-advantages are ->
    1. it canot remember a long sentece because of short memory.
    2. struggle with reading long sentence.

2. LSTM (Long Short-Term Memory)
 - it stands for long Short-term memory.
 - it is an improved version of RNN

 How LSTM Works->

 - LSTM Uses some gates to control info.
    - Forget gate -> removes the useless data
    - input gate ->  adds new data/info.
    - output gate -> decides whats the output

- basically it acts like a "smart memory system".

Advantages ->

 - it solve RNN's memeory problem.
 - works well for
    - language translation
    - speech recognition
    - Time-series prediction

3. Transformer ->

- transformer is a mordern AI architecture that power LLM's (like ChatGPT)

How it works ->

-  uses self-attention mechanisem.
    (it allows to understand context, relation between words in a sequence)
- looks at all works at once , not step by step.

EX. "the animal didn't cross the road because it was tired"

 - in this ex, the transformer understands "it" refers to animal using attention mechanism.

 Advantages ->

 1. handle long context very well.
 2. faster(processing is vary first)
 3. give more accurate O/P than RNN/LSTM.

feature           RNN               LSTM                    tranformer

data processing   sequential        sequential              parallel
Memory            short             long                    very long
speed             slow              slow                    fast
performance       basic             better                  best


Prompt Engineering ->

- by the help of tranformer we can do the prompt engineering in a better way.

1. long context : transformer helps to memorise the long context give in the prompt. (it works on parallel data processing).
2. contextual engineering : if we can put some word in different form then transformer also understand that word properly.

ex. bank (river bank , financial bank)

- AI dono't read our words ,it read token
- we can't tank 1 token as a1 word , although "unbelievable" word can segrigate to different token.

ex.

- words : "playing" - play +ing
- words : transformation -> trans + form + ation

- AI didn't understand words directlly so we can segrigate differnt token form prefix (re-,un-)& suffix(-ing,-ation,-ed) so that AI can recreate some words by recognize it properly.

Token ->

AI Tools                            approx token limit

ChatGPT                             ~128,000 to ~250,000 token (depending on version)

Gemini                              ~1,000,000 to ~2,000,000 tokens 

claude                              ~200,000 Tokens(Standard) upto ~1,000,000 Token (enterprize)

Perplexity                          ~128,000 to ~200,000 Tokens

Context Windows of different LLMS :-
1. ChatGPT -> excellent for long discussion, essays, emails, summarization within it's ~128 - ~256k tokens.

2. Gemini ->processing multiple books, large size docs at once, large codebase analysis in one snapshot, complex project tasks across long charts etc...

3. claude -> it ideal for large document resoning/ scanning with more safely.

4. perplexity Ai -> uses in various backend model.

Structure prompting ->
 1. Role (person role)
 2. context
 3. task (what action we perform)
 4. constraints( negative constraints)
 5. output

 We can uses take some scenario for prompting ->

 use case -1 : writing & content creation

 simple prompt : write  a cold email for google intership.

 engineering prompt -> "act as a carrier coach . write a personalized cold email to a recruiter at google for a data science intership. mention my proficiency in python & sql. keep the tone profesional but eager & limit it to 150 words"

 use case 2: coding & technical task

 simple prompt -> fix this code (some code)

Engineering prompt ->
 " act as a senior python developer. review the following code for a log-in logics, identify potential security vulnarabilities and logical errors.provide the corrected code with comments explaining each fix."

 MODULE 2 -> core prompting technique->

 1. Zero shot prompting : "direct order"

  - in tis prompting we didn't give any example to AI but w provide a small instruction and we think that by the help of pre- trained knowledge , AI will provide the answers.

   EX.
    prompt - classify the sentiment of this review : " the battery life of this laptop is amazing but the screen is a bit dull."

    output -> mixed/ neutral
2. few shot prompting : the "pattern maker"

    we have faced some problem on zero shot prompting because somtimes it failed but in few shot prompting, we have to give some example to understand the pattern of our prompt than it gives a good response.
    
    ex.give the customer feedback in json format.
    input/output->

    example 1: i love the pizza! ->{"sentiment": "positive", "label":1}

    example 2:the delivery was late ->{"sentiment": "negative","label":0 }

    example 3: the food was okay -> {"sentiment": "neutral","label":2}

3. chain of thought (COT) :the "logical thinker"
    - this is the most importand tenchnique to solve complex problem. if we can put anything in AI , and we give prompt "think step by step" but  AI will look in full sentence and create the logic then give the output. so it's create a little "hallucination" / confusion.   


    - use case is ->
    - prompt -> "a farmer has 15 sheep. All but 8 die. how much are left ? let's think step-by-step."

    1. total sheep -15
    2. all but 8 die means only 8 are left but rest sheep are die.
    3. so only 8 sheeps are present.

    final ans - 8

4. Instruction prompting : framework
    - in this prompting we can put step by step instruction so that it will give the requeired output.
    - persona(role) : ""act as a senior python dev."
    - constraints(limit): "don't use external libraries. keep code under 20 lines"
    - specific instruction : "explain the code like i am 5 years old"

use case -> writting professional email

prompt -> "act as a polite HR manager.write a rejection email for a candidate who cleared the interview but we can't hire due to budget cuts. mention that we will keep their cv for future .constraints-> keep it simple & empathic, don't mention the exat budget amount."

MODULE 3 :-

ADVANCE PROMPT ENGINEERING FRAMEWORKS ->

1. ReAct FrameWork(reason + Action)
    
    - ReAct means Reason + Acting.
    - before some time AI only think or AI only give the result but now in ReAct Framework AI will work on the basis of a loop. like it will think first then give the result then think again wheather it's right or wrong then again give the result.

     use case -> Researching a market trend using AI with browsing capabilities (like chatGPT with search or perplexity)

     prompt ->"solve the following task using a thought-action-observation loop.Task: analyze the current stock performance of NVIDIA compared to its competitors in the last 7 days.Instruction:  1. Start with a 'thought' (what do we need to find?), 2. perform an Action (search for the specific data), 3. provide an observation (summarize what we find), 4. repeat until you provide a final recommendation fro a short-term investor."

2. Three of Thoughts (TOT)
 
 - "three of thoughts " is more efficient than"chain of thoughts",we can say TOT is a big brother of COT.
 - in "COT" AI can think for only one line but in "TOT" it can segrigate one line into diffenent branches / nodes like as a tree then think it separately.

 use case -> in TOT the stretegies are suppose will take A,B & C in these 3 branches of a line suppose we find B will work better than C/A then they cancel C/A only take B as the resultant.

 Prompt ->"imagine three different experts are brainstorming a solution to this problem : how can a small local bakery increases it's sales by 50% in 3 month with a budget of only $500 ?"