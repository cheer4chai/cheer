import chai from 'chai';
import param from '../src/param.js';
import cookie from '../src/cookie.js';
import validate from '../src/validate.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my param library', () => {
    before(() => {
        lib = new param();
    });
    describe('when I need the param', () => {
        it('should return the name', () => {
            expect(lib._param("a=1&b=2", "&", "=").a).to.equal('1');
            expect(lib._param("a=1&b=2", "&", "=").b).to.equal('2');
        })
    });
    describe('when I need the key', () => {
        it('should return the key', () => {
            expect(lib.getParam("a=1&b=2", "a", "&", "=")).to.equal('1');
        })
    });
    describe('when I need set a key', () => {
        it('should return new key', () => {
            expect(lib.setParam("a=1", "b", "2")).to.equal('a=1&b=2');
            expect(lib.setParam("a=1&b=1", "b", "2")).to.equal('a=1&b=2');
        })
    })
})

describe('Given an instance if my validate library', () => {
    before(() => {
        lib = new validate();
    })
    describe('when I need to vallidate the ID number', () => {
        it('should return the result', () => {
            expect(lib.certificateNumber(371425199408010013).code).to.equal(0);
        })
    })
    describe('when I need to vallidate the birthday', () => {
        it('should return the result', () => {
            expect(lib.birthDay('2017/01/01').code).to.equal(0);
        })
    })
})