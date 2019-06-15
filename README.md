# Pinyin Conversion Service

This is a simple NodeJS app which exposes an API to generate pinyin romanization for provided Chinese characters.

This service was built to support the Chinese learning app [*Everyday Luck*](https://everyday-luck.surge.sh).

## Development

**To run the app:**

```
# yarn install
# yarn start
```

You will need a supply an `API_SECRET` as an environment variable and provide it in your requests.

## Usage

You will need to URL encode the Chinese characters in the URL (e.g. in JavaScript `encodeURIComponent(chineseCharacters)`).

**Example:**

```
GET localhost:3200/convert?token=my-secret-token&chinese=晚安 -> "Wǎn'ān"
```