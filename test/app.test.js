const test = require('node:test');
const assert = require('node:assert');
const { normalizeInput } = require('./app');

test("test for trim", () => {
    const res = normalizeInput(' Raju Rastogi ');
    const exp = 'Raju Rastogi';

    assert.strictEqual(res, exp);
});

test("Capitalize the first letter", () => {
    const res = normalizeInput('raju rastogi');
    const exp = 'Raju Rastogi';

    assert.strictEqual(res, exp);
})