## Registering provider

Make sure to register the provider inside `start/app.js` file.

```js
const providers = [
  'adonis-logger-rollbar/providers/RollbarProvider'
]
```

Add new configuration inside `logger` module in `config/app.js`:
```js
rollbar: {
  driver: 'rollbar',
  token: Env.get('ROLLBAR_TOKEN', ''),
  level: 'info'
}
```

That's it! Now you can use Logger that will send data to Rollbar.

```js
const Logger = use('Logger')

Logger.info('Test message')

```

## Env variables

`Rollbar` driver relies on single Env variable: `ROLLBAR_TOKEN=`.
