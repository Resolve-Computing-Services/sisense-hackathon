# Sisense Compose SDK Hackathon

![image](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/Sisense_Infusion-F7C922?style=for-the-badge&logo=alibabacloud&logoColor=white)

_Made by Nhat K. Nguyen @ resolve Computing Services Co Ltd_

## Table of Contents

- [Introduction](#introduction)
- [Pros. and Cons.](#pros-and-cons)
- [Use Case](#use-case)
- [Installation & Deployment](#installation--deployment)
- [Learn More](#learn-more)

## Introduction

This repository is made as a submission to the [Sisense Compose SDK Hackathon](https://www.sisense.com/platform/compose-sdk/hackathon/).

`Compose SDK` is a software development kit from Sisense that enables a composable, code-driven way to use Sisense platform capabilities. The SDK consists of packages such as: **sdk-ui**, **sdk-cli**, **sdk-data**, etc.

Click [here](https://sisense.dev/guides/sdk/) to visit the official documentation.

## Use Case

The app is named **CompetiSense** _(get it?)_ - it has the feature to show overviews and insights of different workspaces using Sisense Compose SDK charts with some touch to different types of filters and style customization.

There are 2 available workspaces that you can toggle in the app: (1) eCommerce and (2) Custom Retail.

- **eCommerce**: Using 'Sample ECommerce' _(dataset that stores in Sisense environment)_: **[Recap](/src/routes/Recap/index.tsx)** and **[Insights](/src/routes/Insights/index.tsx)**.

  - **Pros:** intended way to use compose SDK, has powerful tools (eg. **measureFatory**, **filterFactory**, etc.) to perform powerful data analytics while the dataset is handled in the Sisense environment.
  - **Cons:** the filter tools though powerful in certain cases, aren't fully covered; the filter tile components _(eg. MemberFilterTile, DateRangeFilterTile, etc.)_ need extra effort to style & customize compared to things like charts.

- **Custom Retail**: Using custom data _(dataset that doesn't go through Sisense environment)_: **[Overview](/src/routes/Overview/index.tsx)**, **[Retail](/src/routes/Retail/index.tsx)** and **[Employees](/src/routes/Employees/index.tsx)**.
  - **Pros:** have the freedom to manipulate data at your own will _(though it still needs to follow certain format in order to be used in compose SDK charts)_.
  - **Cons:** can only utilize charts from **sdk-ui**; since the data doesn't go through Sisense environment, it can't use anything from **powerful date format**, **measureFatory**, **filterFactory** to **MemberFilterTile**, **DateRangeFilterTile**, etc.

## Installation & Deployment

After installing the required dependencies, create a `.env` or `.env.local` file in the root directory to store the credentials in order to use Sisense's resources. The example can be found in the file `.env.local.example`.

Afterwards, run the following command in the terminal to execute the program:

```bash
$ pnpm run dev # or yarn run dev, npm run dev, bun run dev, etc.
```

## Documentation

It is required to include a detailed documentation of the project, particularly to show which, where and how Sisense Compose SDK is used within the built application. You can locate and download the document [here](/docs/documentation.pdf). It contains descriptions, screenshots and hyperlinks pointing out the process of how the app was developed.

## Learn More

- [Sisense Compose SDK Official Documentation](https://sisense.dev/guides/sdk/)
- [Sisense Compose SDK React Demo](https://github.com/sisense/compose-sdk-react-demo)
- [Sisense Compose SDK React Demo GitHub](https://github.com/sisense/compose-sdk-react-demo)
- [Sisense Compose SDK Playground](https://www.sisense.com/platform/compose-sdk/playground/)
