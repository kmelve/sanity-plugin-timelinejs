# Sanity TImeline.js schemas

```
sanity install timelinejs
```

This plugin install schemas for hosting content for [Timeline.js](https://timeline.knightlab.com/). A simple example frontend can be found at [codesandbox.io](https://codesandbox.io/s/5w2xv3moox).

Simple GROQ formatting in order to get the correct content structure:

```
*[_type == "timeline"][0]{
  "title": title{
    "media": media{
      "url": asset->url,
        caption,
        credit
    },
    "text": title{
      headline,
      "text": text[][0].children[][0].text
    }
  },
  events[]->{
    "media": media{
      caption,
      credit,
      "url": image.asset->url
    },
    start_date,
    "text": text{
      headline,
      "text": text[][0].children[][0].text
    }
  }
}
```

