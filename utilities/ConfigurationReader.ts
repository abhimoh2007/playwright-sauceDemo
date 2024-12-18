export function ConfigurationReader()
{
    var env = process.env.Environment;
    var config: any;

    if (env === undefined || env === null)
    {
        config = require('../test-data/config.json');
    } 
    else if (env == 'qa')
    {
        config = require('../test-data/config.json');
    } 
    return config;
}