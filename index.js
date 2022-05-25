const dotenv = require('dotenv').config();
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_TOKEN });

async function teste()
{
  const response = await notion.pages.create(
    {
      parent: { database_id: process.env.DBTEST },
      properties:
      {
        PROJ:  { relation: [{ id: process.env.EDGE }]                    },
        Name:  { title   : [{ text: { content: "Tuscan Kale" }}]         },
        Price: { number  : 2.5                                           },
        ttt:   { relation: [{ id: "96d582b90adc4ba799f70e40a541025f" }]  },
        DT:    { date    : {"start": "2021-04-26", "end": "2021-05-07" } },
      },
    },
  );
  console.log(response);
}

teste();
