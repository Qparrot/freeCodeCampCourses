#Express and Node
##Log
(04.07.2019):
	- I learn the basic. 
to use the API of Express I do "app.use()" or "app.get/post/:etc()".
Then in the parenthesis I need to add the location of the request and the function: z.B.: 'app.get("/location", function action(req, res) { ... })' 
	req is the data attached to the request and res the resolution.
	in the function we can have : 'res.json({"name": req.ip})'
	__dirname est la var environmment du fichier root.
	To write or read a env var we do: 'process.env.VAR_ENV'

	we can use a middleware to improve our function:
	'(req, res, next)=> { ...; next()}' It is mandatory to finish your middleware with next();
 
use of body-parser;

#### Links

1.**Body-parser**: https://www.npmjs.com/package/body-parser
2. **Using middleware with Express:** http://expressjs.com/en/guide/using-middleware.html

