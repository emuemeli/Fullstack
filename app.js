import { serve } from "https://deno.land/std@0.160.0/http/server.ts";

const handleRequest = (request) => {

    return new Response(`You made a request with method ${request.method}`);
  
};

serve(handleRequest, { port: 7777 });