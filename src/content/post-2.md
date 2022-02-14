---
title: "COVID19 Financial losses"
date: "2020-01-20"
draft: false
path: "/blog/covid19"
category: "WebApp"
---

Under the commission of a local business consultant, a WebApp to compute future COVID19-related financial losses was born. New users were requested to input all the necessary data for the generation of the report, whereas those who were already clients of the consultant would be capable of modifying such data since it was alredy in their database.
<br />
With real-time computation a report could be generated with live charts that gave the possibility of a real-time analysis based on the input. A series of tables would then show where the business would incur losses separated by a number of parameters. All the reports could then be saved in PDF format and could be downloaded in the appropriate "files" section.

## Tools

As requested, all the data processing needed to pass through proprietary Excel. The front end was basic HTML5 with the popular [chart.js](https://www.chartjs.org/) library. The backend was implemented completely in PHP, most notably the core of the project was done with PHPSpreadsheet.

## WebApp Screenshots

<div style="display: flex; flex-direction: column; align-items: center; margin-top: 2rem;">
    <div
        style="width: 85%; height: auto; margin: 0 0.5rem; margin-bottom : 1rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <img style="display: inline-block;" src="../images/covid19/finance_1.png">
    </div>
    <div
        style="width: 85%; height: auto; margin: 0 0.5rem; margin-bottom : 1rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <img style="display: inline-block;" src="../images/covid19/finance_2.png">
    </div>
    <div
        style="width: 85%; height: auto; margin: 0 0.5rem; margin-bottom : 1rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <img style="display: inline-block;" src="../images/covid19/finance_4.png">
    </div>
    <div
        style="width: 85%; height: auto; margin: 0 0.5rem; margin-bottom : 1rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <img style="display: inline-block;" src="../images/covid19/finance_6.png">
    </div>
    <div
        style="width: 85%; height: auto; margin: 0 0.5rem; margin-bottom : 1rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <img style="display: inline-block;" src="../images/covid19/finance_5.png">
    </div>
</div>
