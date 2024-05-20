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

`Compose SDK` is a software development kit that enables a composable, code-driven way to use Sisense platform capabilities. The SDK consists of packages such as: **sdk-ui**, **sdk-cli**, **sdk-data**, etc.

Sisense tends to use **both iFrame and Compose SDK** in their POC apps in order to showcase fully the capabilities of their tools. As of early 2024, Sisense incentivizes to use **Compose SDK** for its developer-first approach and high level of customization. Sisense also focuses on this as the _top priority_ amongst all other methods.

Click [here](https://sisense.dev/guides/sdk/) to visit its official documentation.

## Pros. and Cons.

### Pros.

- Most dynamic and customizable amongst all Sisense infuse methods.
- Developer-friendly, espcially to ones familiar with modern frameworks such as **React**, **Angular** and **Vue**.
- Can render dashboard widgets separately.
- Sisense top priority, so that all new analytics & AI features forward will be available in Compose SDK first.

### Cons.

- A developer-first approach; hence, it requires certain coding knowledge of **JavaScript** as well as at least one of the modern JavaScript frameworks eg. **React**, **Angular** or **Vue**.
- Does not acquire Sisense dashboard's AI features and plugins directly; hence, it tends to be paired up with `iFrame` so that both methods can compliment each other.

## Use Case

While Sisense compose SDK supports **React**, **Angular** and **Vue**, the examples here only cover the **ReactJS** side of things.

It contains of 2 parts, each part represents a method to fetch dataset to use in the compose SDK:

- Using 'Sample ECommerce' _(dataset that stores in Sisense environment)_: **[Recap](../../src/routes/ComposeSDK/Recap/index.tsx)** and **[Insights](../../src/routes/ComposeSDK/Insights/index.tsx)**.

  - **Pros:** intended way to use compose SDK, has powerful tools (eg. **measureFatory**, **filterFactory**, etc.) to perform powerful data analytics while the dataset is handled in the Sisense environment.
  - **Cons:** the filter tools though powerful in certain cases, aren't fully covered; the filter tile components _(eg. MemberFilterTile, DateRangeFilterTile, etc.)_ need extra effort to style & customize compared to things like charts.

- Using custom data _(dataset that doesn't go through Sisense environment)_: **[Overview](../../src/routes/ComposeSDK/Overview/index.tsx)**, **[Retail](../../src/routes/ComposeSDK/Retail/index.tsx)** and **[Employees](../../src/routes/ComposeSDK/Employees/index.tsx)**.
  - **Pros:** have the freedom to manipulate data at your own will _(though it still needs to follow certain format in order to be used in compose SDK charts)_.
  - **Cons:** can only utilize charts from **sdk-ui**; since the data doesn't go through Sisense environment, it can't use anything from **powerful date format**, **measureFatory**, **filterFactory** to **MemberFilterTile**, **DateRangeFilterTile**, etc.

## Installation & Deployment

After installing the required dependencies, create a `.env` or `.env.local` file in the root directory to store the credentials in order to use Sisense's resources. The example can be found in the file `.env.local.example`.

Afterwards, run the following command in the terminal to execute the program:

```bash
$ pnpm run dev # or yarn run dev, npm run dev, bun run dev, etc.
```

## Learn More

- [Sisense Compose SDK React Demo](https://github.com/sisense/compose-sdk-react-demo)
- [Sisense Compose SDK React Demo GitHub](https://github.com/sisense/compose-sdk-react-demo)
- [Sisense Compose SDK Playground](https://www.sisense.com/platform/compose-sdk/playground/)
