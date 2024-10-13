const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

const moment = require("moment-timezone");
const timeZone = "Asia/Jakarta";

const logger = winston.createLogger({
    level: "debug",
    handleExceptions: true,
    handleRejections: true,
    format: winston.format.combine(
        winston.format.json(),
        winston.format.ms(),
        winston.format.timestamp({
            format: () => moment().tz(timeZone).format("YYYY-MM-DDTHH:mm:ss.SSS")
        })            
    ),
    json: true,
    transports: [
        new DailyRotateFile({
            filename: './log/app-%DATE%.log',
            zippedArchive: true,
            maxSize: '2m',
            maxFiles: '60d',
            format: winston.format.combine(
                winston.format.json(),
                winston.format.ms(),
                winston.format.timestamp({
                    format: () => moment().tz(timeZone).format("YYYY-MM-DDTHH:mm:ss.SSS")
                })                                
            ),
            json: true,
            handleExceptions: true,
            handleRejections: true,
        })
    ]
});

module.exports = logger