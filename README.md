
# itacpc.github.io

This is the soon-to-be-published new website for ITACPC.


## Run Locally

Clone the project:
```bash
  git clone https://github.com/itacpc/itacpc.github.io
```

Install dependencies:
```bash
  cd itacpc.github.io
```
```bash
  npm install
```

Run the project locally:

```bash
  npm run dev
```


## Deployment

To deploy on github pages, run:

```
  npm run deploy
```


## Update Tasks

The data for the tasks pages is stored in the `tasks.json` file in the `src/lib/json-data` folder. For the correct json structure, see the data of the previous years.

Each task object has 5 variables:

| Variable | Description |
| -        |        -    |
| `id`     | The short name of the task |
| `name`   | The full name of the task |
| `statement` | Link to the statement pdf file (Google Drive) |
| `solutions` | Link to the solution(s) file/folder (Google Drive) |
| `testcases` | Link to the testcases folder (Google Drive) |


## Update Results

TODO: change this section, we need to define a proper way to create the results.json file starting from the raw data

The data for the results pages is stored in the `results.json` file in the `src/lib/json-data` folder.

Create the results table in Excel, you can find an example file [here](static/excel/results.xlsx) with the correct format. 

If you want to display the awarded medals, create a column named `Award`. There are three available values in this column: `gold`, `silver` and `bronze`. If the team didn't get any award, leave the corresponding cell empty.

After that, use an [Excel to JSON converter](https://tableconvert.com/excel-to-json) to convert it into an **Array of Object*** format. 

*(On the linked site, choose the *Array of Object* option for the JSON format.)

(You can also check the data of the previous years in the `results.json` file for the required final JSON format.)


## Update Universities

The data for the universities page is stored in the `universities.json` file in the `src/lib/json-data` folder.

For creating a new universities, just use one of the existing universities in the `universities.json` file as a template.

Each universities has a `.png` flag file, which is stored in the `static/images/flags` folder. For new universities, please create or download an `.png` file of the universities flag and place it in there.

> The name of the `.png` file is **required** to match the `short_name` parameter of the universities in the `universities.json` file.


## Update Editions

To update the Editions (Archive) page, navigate to the `src/routes/editions/+page.svelte` file and create a new `<AccordionItem>` component where the others are.

Write the location of the competition or etc. inside the `<p slot="title">` element.

The parameters of the `<AccordionItem>` tag are:
| Parameter | Description |
| :- | :- |
| `year` |  **Required**. The year of the competition. |
| `flag` |  The name of the country's `.svg` flag. |


## Authors

| Github username |
| :- |
| [@wil93](https://www.github.com/wil93) |

This project is based on <https://github.com/iio-team/iio-team.github.io>

## Color Reference

TODO: update this section

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| IIOT logo turquoise | ![#6dc1c3](https://via.placeholder.com/10/6dc1c3?text=+) #6dc1c3 |
| IIOT logo purple | ![#f8f8f8](https://via.placeholder.com/10/595bb4?text=+) #595bb4 |
| IIOT logo grey | ![#00b48a](https://via.placeholder.com/10/a3a3a3?text=+) #a3a3a3 |

