import React from "react"
import axios from "axios"
import MarkdownContainer from "react-markdown"

export default function Homepage() {
  const [markdown, setMarkdown] = React.useState<string>("")

  React.useEffect(() => window.scrollTo(0, 0), [])

  axios
    .get("/README.md")
    .then((response) => {
      if (typeof response.data === "string" && response.data.length > 0)
        setMarkdown(
          response.data
            .replace("[Introduction](#introduction)", "Introduction")
            .replace("[Pros. and Cons.](#pros-and-cons)", "Pros. and Cons.")
            .replace("[Use Case](#use-case)", "Use Case")
            .replace(
              "[Installation & Deployment](#installation--deployment)",
              "Installation & Deployment"
            )
            .replace("[Learn More](#learn-more)", "Learn More")
            .replace("../../src/routes/ComposeSDK/Recap/index.tsx", "/recap")
            .replace(
              "../../src/routes/ComposeSDK/Insights/index.tsx",
              "/insights"
            )
            .replace(
              "../../src/routes/ComposeSDK/Overview/index.tsx",
              "/overview"
            )
            .replace("../../src/routes/ComposeSDK/Retail/index.tsx", "/retail")
            .replace(
              "../../src/routes/ComposeSDK/Employees/index.tsx",
              "/employees"
            )
        )
      else console.error("Error fetching README.md")
    })
    .catch((error) => {
      console.error("Error fetching README.md:", error)
    })

  return (
    <>
      <article className="markdown-article">
        <MarkdownContainer>{markdown}</MarkdownContainer>
      </article>
    </>
  )
}
