# Nodejs test server

This is a simple usefull test server in node. To use it you only have to specify the port, so:
``` bash
node server.js 3459
```

You can also launch this with "npm start" or "npm test" and the server starts on port 3000.

With the dockerfile you can also create a container with: 
``` bash
docker buildx build -t image-name:tag .
```