const { expect } = require('chai');
const { getTimeDiff } = require('../index');

describe('Test time difference in second', () => {

    it('show difference in 1 second', () => {
        const date = new Date();
        const endDate = new Date();
        date.setSeconds(date.getSeconds() + 1);
        const result = getTimeDiff(date, endDate);
        expect(result).to.deep.equal({
            value: 1,
            suffix: 'second'
        });
    });

    it('show difference in 10 seconds', () => {
        const date = new Date();
        const endDate = new Date();
        date.setSeconds(date.getSeconds() + 10);
        const result = getTimeDiff(date, endDate);
        expect(result).to.deep.equal({
            value: 10,
            suffix: 'seconds'
        });
    });
});

describe('Test time difference in minute', () => {
    it('show difference in 1 minute', () => {
        const date = new Date();
        const endDate = new Date();
        date.setMinutes(date.getMinutes() + 1);
        const result = getTimeDiff(date, endDate);
        expect(result).to.deep.equal({
            value: 1,
            suffix: 'minute'
        });
    });

    it('show difference in 10 minutes', () => {
        const date = new Date();
        const endDate = new Date();
        date.setMinutes(date.getMinutes() + 10);
        const result = getTimeDiff(date, endDate);
        expect(result).to.deep.equal({
            value: 10,
            suffix: 'minutes'
        });
    });
});

describe('Test time difference in hour', () => {
    it('show difference in 1 hour', () => {
        const date = new Date();
        const endDate = new Date();
        date.setHours(date.getHours() + 1);
        const result = getTimeDiff(date, endDate);
        expect(result).to.deep.equal({
            value: 1,
            suffix: 'hour'
        });
    });

    it('show difference in 10 hours', () => {
        const date = new Date();
        const endDate = new Date();
        date.setHours(date.getHours() + 10);
        const result = getTimeDiff(date, endDate);
        expect(result).to.deep.equal({
            value: 10,
            suffix: 'hours'
        });
    });
});

describe('Test time difference in days', () => {
    it('show difference in 1 day', () => {
        const date = new Date();
        const endDate = new Date();
        date.setDate(date.getDate() + 1);
        const result = getTimeDiff(date, endDate);
        expect(result).to.deep.equal({
            value: 1,
            suffix: 'day'
        });
    });

    it('show difference in 10 days', () => {
        const date = new Date();
        const endDate = new Date();
        const addedDays = 5;
        date.setDate(date.getDate() + addedDays);
        const result = getTimeDiff(date, endDate);
        expect(result).to.deep.equal({
            value: addedDays,
            suffix: 'days'
        });
    });
});

describe('Test time difference in weeks', () => {
    it('show difference in 1 week', () => {
        const date = new Date();
        const endDate = new Date();
        const addedDays = 7;
        date.setDate(date.getDate() + addedDays);
        const result = getTimeDiff(date, endDate);
        expect(result).to.deep.equal({
            value: 1,
            suffix: 'week'
        });
    });

    it('show difference in 3 weeks', () => {
        const date = new Date();
        const endDate = new Date();
        const addedDays = 21;
        date.setDate(date.getDate() + addedDays);
        const result = getTimeDiff(date, endDate);
        expect(result).to.deep.equal({
            value: addedDays / 7,
            suffix: 'weeks'
        });
    });

    it('show difference in fraction weeks', () => {
        const date = new Date();
        const endDate = new Date();
        const addedDays = 26;
        date.setDate(date.getDate() + addedDays);
        const result = getTimeDiff(date, endDate);
        expect(result).to.deep.equal({
            value: 3,
            suffix: 'weeks'
        });
    });
});

describe('Test time difference in months', () => {
    it('show difference in 1 month', () => {
        const date = new Date();
        const endDate = new Date();
        date.setMonth(date.getMonth() + 1);
        const result = getTimeDiff(date, endDate);
        expect(result).to.deep.equal({
            value: 1,
            suffix: 'month'
        });
    });

    it('show difference in 10 months', () => {
        const date = new Date();
        const endDate = new Date();
        date.setMonth(date.getMonth() + 10);
        const result = getTimeDiff(date, endDate);
        expect(result).to.deep.equal({
            value: 10,
            suffix: 'months'
        });
    });
});

describe('Test time difference in years', () => {
    it('show difference in 1 year', () => {
        const date = new Date();
        const endDate = new Date();
        date.setFullYear(date.getFullYear() + 1);
        const result = getTimeDiff(date, endDate);
        expect(result).to.deep.equal({
            value: 1,
            suffix: 'year'
        });
    });

    it('show difference in 10 years', () => {
        const date = new Date();
        const endDate = new Date();
        date.setFullYear(date.getFullYear() + 10);
        const result = getTimeDiff(date, endDate);
        expect(result).to.deep.equal({
            value: 10,
            suffix: 'years'
        });
    });
});

describe('Test with bold date', () => {
    it('date format MM/DD/YYYY', () => {
        const startDate = new Date('6/4/2016');
	    const endDate = new Date('6/3/2016');
        const result = getTimeDiff(startDate, endDate);
        expect(result).to.deep.equal({
            value: 1,
            suffix: 'day'
        });
    });

    it('date format EEE MMM dd HH:mm:ss', () => {
        const startDate = new Date('Mon May 12 16:30:00');
        const endDate = new Date('Tue May 13 16:30:00');
        const result = getTimeDiff(startDate, endDate);
        expect(result).to.deep.equal({
            value: 1,
            suffix: 'day'
        });
    });

    it('date format EEE MMM dd yyyy HH:mm:ss.SSS', () => {
        const startDate = new Date('Mon May 12 2014 23:30:00.789');
        const endDate = new Date('Tue May 13 2014 23:30:00.789');
        const result = getTimeDiff(startDate, endDate);
        expect(result).to.deep.equal({
            value: 1,
            suffix: 'day'
        });
    });

    it('date format MMM dd, yyyy hh:mm:ss a z', () => {
        const startDate = new Date('May 13, 2014 11:30:00 PM PST');
        const endDate = new Date('May 12, 2014 11:30:00 PM PST');
        const result = getTimeDiff(startDate, endDate);
        expect(result).to.deep.equal({
            value: 1,
            suffix: 'day'
        });
    });

    it('date format MMM dd, yyyy hh:mm:ss a z', () => {
        const startDate = new Date('May 13, 2014 11:30:00 PM PST');
        const endDate = new Date('May 12, 2014 11:30:00 PM PST');
        const result = getTimeDiff(startDate, endDate);
        expect(result).to.deep.equal({
            value: 1,
            suffix: 'day'
        });
    });

    it('date format yyyy/MM/dd HH:mm:ss.SSS', () => {
        const startDate = new Date('2014/05/13 16:30:59.786');
        const endDate = new Date('2014/05/14 16:30:59.786');
        const result = getTimeDiff(startDate, endDate);
        expect(result).to.deep.equal({
            value: 1,
            suffix: 'day'
        });
    });
});

