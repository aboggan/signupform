import { createServer } from 'miragejs'

createServer({

  routes() {
    this.namespace = 'api'

    this.post('/signup', (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      
      console.log("data passed to the api", attrs)
      
      let response = {
        status: "success",
        message: "Thank you. You are now subscribed." 
      }

      if(attrs.triggerError){
        response = {
          status: "error",
          message: "Invalid Subscription request." 
        }
      }

      return response;
    })

  },
})
