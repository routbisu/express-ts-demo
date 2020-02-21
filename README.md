## Node.js / Express API written in TypeScript

### Development

```bash
npm install
npm run dev
```

### Running tests

```bash
npm test
```

## API Endpoints

#### /

Method: `GET`
Home url that shows a greeting message

#### /transactions

Method: `GET`
Returns a list of transactions

#### /transactions

Method: `POST`
Add a new transaction (fake)
Required fields: `currency`
