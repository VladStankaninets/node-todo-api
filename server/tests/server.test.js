const expect = require('expect'); // for assertions with mocha as overall test suite
const request = require('supertest'); // to test express routes
// nodemon and mocha do not need to be required.
// local install of nodemon (even though it is installed globally already) so we can use them in test scripts
//
// Next we need to load server.js to have access to the Express app and todo.js to test DB queries
const {app} = require('./../server.js');
const {ToDo} = require('./../models/todo.js');

beforeEach((done) => { // to wipe the DB clean before each POST call
    ToDo.remove({}).then(() => {
        done();
    });
});

describe('POST /todos', () => {

    it('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({text}) // using supertest to test routes. Supetest will AUTOMATICALLY convert text to JSON. No need to stringify. Great!
            // now assertions
            .expect(200)
            .expect((res) => { // custom expect assertion get passed (res) to the callback
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) return done(err);
                // else
                ToDo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                })
                    .catch((err2) => done(err2));
            });
    });

    it('should not create todo with invalid user data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                // else
                ToDo.find().then((todos) => {
                    expect(todos.length).toBe(0);
                    done();
                })
                    .catch((err2) => done(err2));
            });
    });
});
