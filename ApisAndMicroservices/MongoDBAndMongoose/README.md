# Introduction to the MongoDB and Mongoose Challenges

## Goals

Get to know what is MongoDB and Mongoose.

## Logs

* (12.07.2019): commit "Start the MongoDB challenges" 
	* I created the database on mongoDB atlas. _(link 5)_
	* I updated the package.json file with the version of mongodb et mongoose. _(link 6, 7)_
	* I created my first schema. _(link 3, 4)_
	* I created the function to add an array of person. _(link 8)_
* (15.07.2019): commit "Continue MongoDB Challenges"
	* I familiarised myself with the usage of the DB.
* (17.07.2019): commit "V1 done"
	* I worked with the method remove, findOneAndUpdate and the chain of method (find, sort, select, exec).
 
## Difficulties

* (12.07.2019): 
	* I didn't know how to connect to the database. With a serie of trial and error. => SUCCESS.
	* I use the documentation and thread of stackoverflow to find solution about creating a person schema or multiple person base on an array of Person. At the beginning I thought we needed to use a while loop in the Person.create() function. => SUCCESS
* (15.07.2019):
	* I didn't know how to make the find, replace, save process work. => SUCCESS _(link 9)_
* (17.07.2019):
	* I didn't know how to organise the method findOneAndUpdate() arguments. => SUCCESS _(link 10)_
	* I didn't know how the sort, limit and select method worked. => SUCCESS _(link 11, 12)_

## Useful links:

1. **Intro to the topic:** https://learn.freecodecamp.org/apis-and-microservices/mongodb-and-mongoose
2. **Github of the project:** https://github.com/freeCodeCamp/boilerplate-mongomongoose/
3. **Documentation of Mongoose:** https://mongoosejs.com/docs/schematypes.html#arrays
4. **Create and Save a Record of a Model on MongoDB:** https://stackoverflow.com/questions/50144826/create-and-save-a-record-of-a-model-on-mongodb
5. **MongoDB atlas:** https://cloud.mongodb.com/v2/
6. **npm Mongodb:** https://www.npmjs.com/package/mongodb
7. **npm Mongoose:** https://www.npmjs.com/package/mongoose
8. **MongoDB and Mongoose - Create Many Records with model.create():** https://www.freecodecamp.org/forum/t/mongodb-and-mongoose-create-many-records-with-model-create/208546/6
9. **MongoDB and Mongoose - Perform Classic Updates by Running Find, Edit, then Save:** https://www.freecodecamp.org/forum/t/mongodb-and-mongoose-perform-classic-updates-by-running-find-edit-then-save/202813/6
10. **MongoDB and Mongoose - Perform New Updates on a Document Using model.findOneAndUpdate()**: https://www.freecodecamp.org/forum/t/mongodb-and-mongoose-perform-new-updates-on-a-document-using-model-findoneandupdate/205014/4
11. **Thread - How do I limit the number of returned items?**: https://stackoverflow.com/questions/5830513/how-do-i-limit-the-number-of-returned-items
12. **The sort() method**: https://www.tutorialspoint.com/mongodb/mongodb_sort_record

