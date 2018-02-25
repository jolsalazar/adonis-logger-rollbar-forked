## Registering provider

Make sure to register the provider inside `start/app.js` file.

```js
const providers = [
  'adonis-logger-logentries/providers/LogentriesProvider'
]
```

Add new configuration inside `logger` module in `config/app.js`:
```js
logentries: {
  driver: 'logentries',
  token: Env.get('LOGENTRIES_TOKEN', ''),
  level: 'info'
}
```

That's it! Now you can use Logger that will send data to Logentries.

```js
const Logger = use('Logger')

Logger.info('Test message')

```

## Env variables

`Logentries` driver relies on single Env variable: `LOGENTRIES_TOKEN=`.
