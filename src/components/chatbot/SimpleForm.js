import React from 'react';
import ChatBot from 'react-simple-chatbot';
export default  function SimpleForm(){
    return (
        
        <ChatBot
        steps={[
            {
             id:'intro', 
             message:'Am i doing this thing right?', 
             trigger:'intro-user',
            },
            {
             id:'intro-user', 
             options:[
               {value:'y', label:'Yes', trigger:'yes-response'},
               {value:'n', label:'No', trigger:'no-response'},
             ] 
            },
            {
             id:'yes-response', 
             message:'Thank you, that means a lot to me', 
             end:true,
            },
            {
             id:'no-response', 
             message:'Sorry to hear that.', 
             end:true,
             user:true,
            },
           ]}
        />
      
    )
        }






        
//  https://ordinarycoders.com/blog/article/reactjs-chatbot